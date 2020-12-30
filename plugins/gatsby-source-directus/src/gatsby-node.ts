import * as gatsby from 'gatsby'
import { DirectusService } from './directus-service';
import { transformRelation, createAllNodes } from './directus-service/process';

export const sourceNodes: gatsby.GatsbyNode['sourceNodes'] = async (
    gatsbyArgs: gatsby.SourceNodesArgs,
    pluginOptions: gatsby.PluginOptions,
) => {
    const { url, email, password, tables } = pluginOptions;

    const directus = new DirectusService({
        url: url as string,
        auth: {
            email: email as string,
            password: password as string
        }
    });

    try {
        console.log(`Start parsing...`);

        await directus.init();

        let relations = await directus.getRelations();
        let transformedRelations = transformRelation(relations.data);

        if (tables && tables instanceof Array) {
            tables.forEach(async (table) => {
                try {
                    let dataset = await directus.getItems(table);
                    createAllNodes(table, dataset.data, transformedRelations, gatsbyArgs);
                } catch (error) {
                    console.error(`${table}:: ${error}`);
                }
            });
        }

        console.log(`Success.`);
    } catch (error) {
        console.error(`${error}`);
    }
}