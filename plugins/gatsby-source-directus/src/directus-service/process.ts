import { SourceNodesArgs } from 'gatsby'

export interface RelationInfo {
    oneCollection: string,
    oneField: string
    onePrimary: string,
    manyCollection: string,
    manyField: string
    manyPrimary: string
}

export interface GatsbyNodesArgs extends SourceNodesArgs {

}

export const transformRelation = (relations: Array<any>): Array<RelationInfo> => {
    return relations.map(x => {
        const relation: RelationInfo = {
            oneCollection: x.one_collection,
            oneField: x.one_field,
            onePrimary: x.one_primary,
            manyCollection: x.many_collection,
            manyField: x.many_field,
            manyPrimary: x.many_primary,
        }

        return relation;
    });
}
const createNodesByObject = (table: string, dataset: object,
    oneCollectionRelation: RelationInfo[],
    manyCollectionRelation: RelationInfo[],
    gatsbyNodesArgs: GatsbyNodesArgs): void => {

    const { actions, createNodeId, createContentDigest } = gatsbyNodesArgs;
    const { createNode } = actions;

    // Mapping the id of O2M field
    for (let i = 0; i < oneCollectionRelation.length; i++) {
        const ocr = oneCollectionRelation[i];
        if (dataset[ocr.manyCollection] && dataset[ocr.manyCollection] instanceof Array) {
            dataset[`${ocr.manyCollection}___NODE`] = dataset[ocr.manyCollection]
                .map(v => createNodeId(`${ocr.manyCollection}-${v}`));

            delete dataset[ocr.manyCollection];
        }
    }

    let dataId = createNodeId(`${table}-${dataset['id']}`);
    // Create the node
    createNode({
        ...dataset,
        id: dataId,
        parent: null,
        children: [],
        internal: {
            type: table,
            content: JSON.stringify(dataset),
            contentDigest: createContentDigest(dataset)
        }
    });
};

export const createAllNodes = (table: string, dataset: Array<object> | object, relations: Array<RelationInfo>,
    gatsbyNodesArgs: GatsbyNodesArgs): void => {

    const oneCollectionRelation = relations.filter(x => x.oneCollection == table);
    const manyCollectionRelation = relations.filter(x => x.manyCollection == table);

    if (dataset instanceof Array) {
        dataset.forEach(element => {
            createNodesByObject(table, element, oneCollectionRelation, manyCollectionRelation, gatsbyNodesArgs);
        });
    } else {
        createNodesByObject(table, dataset, oneCollectionRelation, manyCollectionRelation, gatsbyNodesArgs);
    }
}