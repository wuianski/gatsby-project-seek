import chalk from 'chalk';
import { DirectusService } from './directus-service';

exports.sourceNodes = async (
    {
        actions,
        getNode,
        store,
        cache,
        createNodeId,
        createContentDigest,
        getCache,
        reporter,
    },
    {
        url,
        email,
        password
    }
) => {
    const formatMsg = msg => chalk`gatsby-source-directus:: ${msg}`;

    const { createNode, touchNode } = actions;

    const directus = new DirectusService({
        url: url,
        auth: {
            email: email,
            password: password
        }
    });

    try {
        console.log(formatMsg(`Start parsing...`));

        await directus.init();

        let PAGES_NODE_TYPE = 'pages';
        let ARTWORK_NODE_TYPE = 'artworks_list';

        let pages = await directus.getItems(PAGES_NODE_TYPE);
        for (let i = 0; i < pages.data.length; i++) {
            let element = pages.data[i];
            if (element.artworks_list) {
                element.artworks_list___NODE = element.artworks_list.map(x => createNodeId(`${ARTWORK_NODE_TYPE}-${x}`));
                delete element.artworks_list;
            }
        }

        pages.data.forEach(element => {
            createNode({
                ...element,
                id: createNodeId(`${PAGES_NODE_TYPE}-${element.id}`),
                parent: null,
                children: [],
                internal: {
                    type: PAGES_NODE_TYPE,
                    content: JSON.stringify(element),
                    contentDigest: createContentDigest(element),
                }
            });
        });

        let artworksList = await directus.getItems(ARTWORK_NODE_TYPE);
        artworksList.data.forEach(element => {
            createNode({
                ...element,
                id: createNodeId(`${ARTWORK_NODE_TYPE}-${element.id}`),
                parent: null,
                children: [],
                internal: {
                    type: ARTWORK_NODE_TYPE,
                    content: JSON.stringify(element),
                    contentDigest: createContentDigest(element),
                }
            });
        });
        console.log(formatMsg(`Success.`));
    } catch (error) {
        console.error(formatMsg(`${error}`));
    }
}