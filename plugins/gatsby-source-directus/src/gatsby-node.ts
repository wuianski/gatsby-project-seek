import * as gatsby from 'gatsby'
import { DirectusService } from './directus-service';
import { transformRelation, createAllNodes } from './directus-service/process';

export const sourceNodes = async (
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
            for (let index = 0; index < tables.length; index++) {
                const table = tables[index];
                try {
                    let dataset = await directus.getItems(table);
                    await createAllNodes(table, dataset.data, transformedRelations, gatsbyArgs);
                } catch (error) {
                    console.error(`${table}:: ${error}`);
                }
            }
        }

        console.log(`Success.`);
    } catch (error) {
        console.error(`${error}`);
    }
}