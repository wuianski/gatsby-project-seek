import * as gatsby from 'gatsby'
import { DirectusService } from './directus-service';
import { createAllNodes } from './directus-service/process';

export const sourceNodes = async (
    gatsbyArgs: gatsby.SourceNodesArgs,
    pluginOptions: gatsby.PluginOptions,
) => {
    const { reporter } = gatsbyArgs;
    const { url, email, password, tables, additionalTables } = pluginOptions;

    const directus = new DirectusService({
        url: url as string,
        auth: {
            email: email as string,
            password: password as string
        }
    });

    try {
        reporter.info(`Start fetch all data from directus...`);

        await directus.init();

        let relations = await directus.getRelations(reporter);
        let fields = await directus.getFields(reporter);
        let fileInfos = await directus.getFileInfos(reporter);

        let additionalCollections = {};
        if (additionalTables && additionalTables instanceof Array) {
            for (let index = 0; index < additionalTables.length; index++) {
                const table = additionalTables[index];
                let dataset = await directus.getItems(table);
                additionalCollections[table] = dataset.data;
                
            }
        }

        if (tables && tables instanceof Array) {
            for (let index = 0; index < tables.length; index++) {
                const table = tables[index];
                try {
                    let dataset = await directus.getItems(table);
                    await createAllNodes({
                        directus: directus,
                        table: table,
                        dataset: dataset.data,
                        relations: relations,
                        fields: fields,
                        fileInfos: fileInfos,
                        additionalCollections: additionalCollections,
                        gatsbyNodesArgs: gatsbyArgs
                    });
                } catch (error) {
                    reporter.error(`${table}:: ${error}`);
                }
            }
        }

        reporter.success(`All directus data fetched.`);
    } catch (error) {
        reporter.error(`${error}`);
    }
}