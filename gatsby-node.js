/**
 * Programmatically create projects' pages from query data.
 */

const path = require("path")

module.exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

  // Sample query for all projects.
  const response = await graphql(`
    query {
      qprojectsQuery: allProjects(
        filter: { directus: { pages_id: { eq: 1 } } }
      ) {
        edges {
          node {
            directus {
              id
              year
              title_en_us
              reviews {
                directus {
                  id
                  date(formatString: "")
                  title
                }
              }
            }
          }
        }
      }
      tprojectsQuery: allProjects(
        filter: { directus: { pages_id: { eq: 5 } } }
      ) {
        edges {
          node {
            directus {
              id
              year
              title_en_us
            }
          }
        }
      }
      eprojectsQuery: allProjects(
        filter: { directus: { pages_id: { eq: 2 } } }
      ) {
        edges {
          node {
            directus {
              id
              year
              title_en_us
            }
          }
        }
      }
    }
  `)

  // Destructure response to get project IDs
  const {
    data: {
      qprojectsQuery: { edges: projectQs = [] },
      tprojectsQuery: { edges: projectTs = [] },
      eprojectsQuery: { edges: projectEs = [] },
    },
  } = response

  // Build a new page for each project by using its own projectTemplate, passing the id
  // via `context` for the static query
  projectQs.forEach(({ node: projectQ }) => {
    createPage({
      path: `/the-question/${projectQ.directus.year}`,
      component: path.resolve("./src/templates/projectQTemplate.js"),
      context: projectQ.directus,
    })
  })

  projectTs.forEach(({ node: projectT }) => {
    createPage({
      path: `/tcaa/${projectT.directus.year}`,
      component: path.resolve("./src/templates/projectTTemplate.js"),
      context: projectT.directus,
    })
  })

  projectEs.forEach(({ node: projectE }) => {
    createPage({
      path: `/extension/${projectE.directus.year}`,
      component: path.resolve("./src/templates/projectETemplate.js"),
      context: projectE.directus,
    })
  })

  projectQs.forEach(({ node: projectQ }) => {
    projectQ.directus.reviews.forEach(({ directus: reviewQ }) => {
      createPage({
        path: `/the-question/${projectQ.directus.year}/reviews/${reviewQ.date}`,
        component: path.resolve("./src/templates/projectQTemplateReview.js"),
        context: reviewQ,
      })
    })
  })

}