import { SourceNodesArgs } from 'gatsby'
import { createRemoteFileNode } from "gatsby-source-filesystem";
import { DirectusService } from '.';
import { FieldInfos, FileInfo, RelationInfo } from './interfaces';

// let createdFileNodes: Array<any> = [];

export interface CreateNodeArgs {
    directus: DirectusService,
    table: string,
    dataset: Array<object> | object,
    relations: Array<RelationInfo>,
    fields: Array<FieldInfos>,
    fileInfos: Array<FileInfo>,
    additionalCollections: any,
    gatsbyNodesArgs: GatsbyNodesArgs
}

export interface GatsbyNodesArgs extends SourceNodesArgs {
}

const createNodesByObject = async (directus: DirectusService, table: string, dataset: object,
    relations: RelationInfo[],
    fieldInfos: FieldInfos[],
    fileInfos: FileInfo[],
    additionalCollections: any,
    gatsbyNodesArgs: GatsbyNodesArgs) => {

    const { actions, store, cache, createNodeId, createContentDigest, reporter } = gatsbyNodesArgs;
    const { createNode } = actions;

    let thisNodeId = createNodeId(`${table}-${dataset['id']}`);

    // Process file and image, download and create the node
    let fileFields = fieldInfos.filter(x => x.field !== '' && x.type === 'uuid' && (x.interface === 'file-image' || x.interface === 'file'));
    for (let i = 0; i < fileFields.length; i++) {
        const element = fileFields[i];
        let val = dataset[element.field];
        if (!val) {
            continue;
        }

        let fileInfo = fileInfos.find(f => f.fileId == val);
        if (!fileInfo) {
            continue;
        }

        // if (createdFileNodes.includes(fileInfo.fileId)) {
        //     continue;
        // }
        // createdFileNodes.push(fileInfo.fileId);

        let url = directus.getAssetUrl(val);
        if (element.field === 'planimetric_map' || element.field === 'apply_for') {
            reporter.info(url);
        }
        try {

            let fileInfoNodeId = createNodeId(`fileInfo-${fileInfo.fileId}`)

            let fileNode = await createRemoteFileNode({
                url: url,
                store: store,
                cache: cache,
                parentNodeId: thisNodeId,
                createNode: createNode,
                createNodeId: createNodeId,
                reporter: reporter
            });
            fileNode['directus'] = {
                fileInfoId: fileInfoNodeId,
                ...fileInfo
            };

            createNode({
                directus: { ...fileInfo },
                id: fileInfoNodeId,
                parent: thisNodeId,
                children: [],
                internal: {
                    type: 'fileInfo',
                    contentDigest: createContentDigest(fileInfo)
                }
            });

            dataset[`${element.field}___NODE`] = fileNode.id;
            delete dataset[element.field];
        } catch (error) {
            reporter.error(error);
        }
    }

    // Process files
    let manyFileFields = fieldInfos.filter(x => x.type === 'files');
    var collectionNames = Object.keys(additionalCollections);
    for (let index = 0; index < collectionNames.length; index++) {
        const collectionName = collectionNames[index];

        let targetTableName = collectionName.split('_')[0];
        if (!targetTableName || targetTableName !== table) {
            continue;
        }

        const collectionFiles = additionalCollections[collectionName] as Array<any>;
        for (let i = 0; i < manyFileFields.length; i++) {
            const element = manyFileFields[i];

            // reporter.log(`${table}::${collectionName}::${element.field}`);
            let arrayFileId = dataset[element.field] as Array<any>;
            if (!arrayFileId || arrayFileId.length === 0) {
                continue;
            }

            let idSet: Array<any> = [];
            for (let k = 0; k < arrayFileId.length; k++) {
                const m2mId = arrayFileId[k];
                // reporter.log(`${table}::${collectionName}::${m2mId}`);
                let m2mData = collectionFiles.find(x => x.id == m2mId);
                if (!m2mData) {
                    continue;
                }

                let fileId = m2mData['directus_files_id'];
                let fileInfo = fileInfos.find(f => f.fileId == fileId);
                if (!fileInfo) {
                    continue;
                }

                // reporter.log(`${table}::${collectionName}::${fileInfo.fileId}`);

                // if (createdFileNodes.includes(fileInfo.fileId)) {
                //     continue;
                // }
                // createdFileNodes.push(fileInfo.fileId);

                let url = directus.getAssetUrl(fileId);
                try {

                    let fileInfoNodeId = createNodeId(`fileInfo-${fileInfo.fileId}`)

                    let fileNode = await createRemoteFileNode({
                        url: url,
                        store: store,
                        cache: cache,
                        parentNodeId: thisNodeId,
                        createNode: createNode,
                        createNodeId: createNodeId,
                        reporter: reporter,
                    });
                    fileNode['directus'] = {
                        fileInfoId: fileInfoNodeId,
                        ...fileInfo
                    };


                    createNode({
                        directus: { ...fileInfo },
                        id: fileInfoNodeId,
                        parent: thisNodeId,
                        children: [],
                        internal: {
                            type: 'fileInfo',
                            contentDigest: createContentDigest(fileInfo)
                        }
                    });

                    idSet.push(fileNode.id);
                } catch (error) {
                    reporter.error(error);
                }
            }

            dataset[`${element.field}___NODE`] = idSet;
            delete dataset[element.field];
        }
    }

    // Process for id to node
    let o2mFieldInfos = fieldInfos.filter(x => x.type === 'o2m');
    for (let i = 0; i < o2mFieldInfos.length; i++) {
        const o2mFieldInfo = o2mFieldInfos[i];
        let relation = relations.find(x => x.oneCollection === table && x.oneField === o2mFieldInfo.field);
        if (!relation) {
            continue;
        }

        let o2mFieldData = dataset[o2mFieldInfo.field] as Array<any>;
        if (!o2mFieldData) {
            continue;
        }

        dataset[`${o2mFieldInfo.field}___NODE`] = o2mFieldData
            .map(vId => createNodeId(`${relation.manyCollection}-${vId}`));

        delete dataset[o2mFieldInfo.field];
        delete dataset[relation.manyCollection];
    }

    // Create the node
    createNode({
        directus: { ...dataset },
        id: thisNodeId,
        parent: null,
        children: [],
        internal: {
            type: table,
            content: JSON.stringify(dataset),
            contentDigest: createContentDigest(dataset)
        }
    });
};

export const createAllNodes = async (args: CreateNodeArgs) => {
    const { directus,
        table,
        dataset,
        relations, fields, fileInfos,
        additionalCollections,
        gatsbyNodesArgs, } = args;

    const collectionFieldInfos = fields.filter(x => x.collection == table);

    if (dataset instanceof Array) {
        for (let index = 0; index < dataset.length; index++) {
            let element = dataset[index];
            await createNodesByObject(directus,
                table,
                element,
                relations, collectionFieldInfos, fileInfos,
                additionalCollections,
                gatsbyNodesArgs);
        }
    } else {
        await createNodesByObject(directus,
            table,
            dataset, relations, collectionFieldInfos, fileInfos,
            additionalCollections,
            gatsbyNodesArgs);
    }
}