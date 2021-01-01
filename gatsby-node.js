/**
 * Programmatically create pages from data
 */

const path = require("path")

module.exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

  // Sample query for all pages which kind equal "1".
  const response1 = await graphql(`
    query {
      allPages(filter: { directus: { kind: { eq: "1" } } }) {
        edges {
          node {
            directus {
              id
              slug
              kind
            }
          }
        }
      }
    }
  `)

  // Destructure response1 to get page IDs
  const {
    data: {
      allPages: { edges: pages1 = [] },
    },
  } = response1

  // Build a new page for each page by using projectTemplate, passing the id
  // via `context` for the static query
  pages1.forEach(({ node: page1 }) => {
    createPage({
      path: `${page1.directus.slug}`,
      component: path.resolve("./src/templates/projectTemplate.js"),
      context: page1.directus,
    })
  })

  
  // Sample query for all pages which kind equal "2".
  const response2 = await graphql(`
    query {
      allPages(filter: { directus: { kind: { eq: "2" } } }) {
        edges {
          node {
            directus {
              id
              slug
              kind
            }
          }
        }
      }
    }
  `)

  // Destructure response2 to get page IDs
  const {
    data: {
      allPages: { edges: pages2 = [] },
    },
  } = response2

  // Build a new page for each page by using artworkTemplate, passing the id
  // via `context` for the static query
  pages2.forEach(({ node: page2 }) => {
    createPage({
      path: `${page2.directus.slug}`,
      component: path.resolve("./src/templates/artworkTemplate.js"),
      context: page2.directus,

    })
  })
}