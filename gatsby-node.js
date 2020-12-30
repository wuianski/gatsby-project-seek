/**
 * Programmatically create pages from data
 */

const path = require("path")

module.exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

  // Sample query for all pages.
  const response = await graphql(`
    query GatsbyNodeQuery {
      allPages {
        edges {
          node {
            id
            slug
          }
        }
      }
    }
  `)

  // Destructure response to get page IDs
  const {
    data: {
      allPages: { edges: pages = [] },
    },
  } = response

  // Build a new page for each page, passing the id
  // via `context` for the static query
  pages.forEach(({ node: page }) => {
    createPage({
      path: `${page.slug}`,
      component: path.resolve("./src/templates/projectTemplate.js"),
      context: page,
    })
  })
}