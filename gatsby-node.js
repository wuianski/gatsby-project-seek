/**
 * Programmatically create projects' pages from query data.
 */

const path = require("path")

module.exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

  // Sample query for all projects.
  const response = await graphql(`
    query {
      aboutpagereviewQuery: allAboutPage(
        filter: {
          directus: {
            reviews: {
              elemMatch: { directus: { status: { eq: "published" } } }
            }
          }
        }
      ) {
        edges {
          node {
            directus {
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

      qprojectsQuery: allProjects(
        filter: {
          directus: { pages_id: { eq: 1 }, status: { eq: "published" } }
        }
      ) {
        totalCount
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

      qprojectsreviewQuery: allProjects(
        filter: {
          directus: {
            pages_id: { eq: 1 }
            status: { eq: "published" }
            reviews: {
              elemMatch: { directus: { status: { eq: "published" } } }
            }
          }
        }
      ) {
        totalCount
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
        filter: {
          directus: { pages_id: { eq: 5 }, status: { eq: "published" } }
        }
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

      tprojectsreviewQuery: allProjects(
        filter: {
          directus: {
            pages_id: { eq: 5 }
            status: { eq: "published" }
            reviews: {
              elemMatch: { directus: { status: { eq: "published" } } }
            }
          }
        }
      ) {
        totalCount
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

      eprojectsQuery: allProjects(
        filter: {
          directus: { pages_id: { eq: 2 }, status: { eq: "published" } }
        }
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

      eprojectsreviewQuery: allProjects(
        filter: {
          directus: {
            pages_id: { eq: 2 }
            status: { eq: "published" }
            reviews: {
              elemMatch: { directus: { status: { eq: "published" } } }
            }
          }
        }
      ) {
        totalCount
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

      pressimageQuery: allProjects(
        filter: {
          directus: { pages_id: { in: [1, 5] }, status: { eq: "published" } }
        }
      ) {
        edges {
          node {
            directus {
              id
              year
              pages_id
            }
          }
        }
      }

      cartworklistQuery: allArtworksList(
        filter: {
          directus: { pages_id: { eq: 3 }, status: { eq: "published" } }
        }
        sort: {
          fields: [directus___year, directus___sort]
          order: [DESC, DESC]
        }
        limit: 1000
      ) {
        totalCount
        edges {
          node {
            directus {
              id
              year
              sort
            }
          }
        }
      }

      hartworklistQuery: allArtworksList(
        filter: {
          directus: { pages_id: { eq: 4 }, status: { eq: "published" } }
        }
        sort: {
          fields: [directus___year, directus___sort]
          order: [DESC, DESC]
        }
        limit: 1000
      ) {
        totalCount
        edges {
          node {
            directus {
              id
              year
              sort
            }
          }
        }
      }

      qprojectlistQuery: allProjects(
        filter: {
          directus: { pages_id: { eq: 1 }, status: { eq: "published" } }
        }
        sort: { fields: directus___year, order: DESC }
        limit: 1000
      ) {
        totalCount
        edges {
          node {
            directus {
              id
              year
            }
          }
        }
      }

      tprojectlistQuery: allProjects(
        filter: {
          directus: { pages_id: { eq: 5 }, status: { eq: "published" } }
        }
        sort: { fields: directus___year, order: DESC }
        limit: 1000
      ) {
        totalCount
        edges {
          node {
            directus {
              id
              year
            }
          }
        }
      }

      eprojectlistQuery: allProjects(
        filter: {
          directus: { pages_id: { eq: 2 }, status: { eq: "published" } }
        }
        sort: { fields: directus___year, order: DESC }
        limit: 1000
      ) {
        totalCount
        edges {
          node {
            directus {
              id
              year
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
      qprojectsreviewQuery: { edges: projectQreviews = [] },
      tprojectsQuery: { edges: projectTs = [] },
      tprojectsreviewQuery: { edges: projectTreviews = [] },
      eprojectsQuery: { edges: projectEs = [] },
      eprojectsreviewQuery: { edges: projectEreviews = [] },
      aboutpagereviewQuery: { edges: aboutPageReviews = [] },
      pressimageQuery: { edges: pressImages = [] },
      cartworklistQuery,
      hartworklistQuery,
      qprojectlistQuery,
      tprojectlistQuery,
      eprojectlistQuery,
    },
  } = response

  // Build a new page for each project by using its own projectTemplate, passing the id
  // via `context` for the static query

  // Create the content page of THE QUESTION
  projectQs.forEach(({ node: projectQ }) => {
    createPage({
      path: `/the-question/${projectQ.directus.year}/${projectQ.directus.id}`,
      component: path.resolve("./src/templates/projectQTemplate.js"),
      context: projectQ.directus,
    })
  })

  // Create review page of THE QUESTION
  projectQreviews.forEach(({ node: projectQreview }) => {
    projectQreview.directus.reviews.forEach(({ directus: reviewQ }) => {
      createPage({
        path: `/the-question/${projectQreview.directus.year}/reviews/${reviewQ.date}`,
        component: path.resolve("./src/templates/projectQTemplateReview.js"),
        context: reviewQ,
      })
    })
  })

  // Create the content page of TCAA
  projectTs.forEach(({ node: projectT }) => {
    createPage({
      path: `/tung-chung-prize/${projectT.directus.year}/${projectT.directus.id}`,
      component: path.resolve("./src/templates/projectTTemplate.js"),
      context: projectT.directus,
    })
  })

  // Create review page of THE TCAA
  projectTreviews.forEach(({ node: projectTreview }) => {
    projectTreview.directus.reviews.forEach(({ directus: reviewT }) => {
      createPage({
        path: `/tung-chung-prize/${projectTreview.directus.year}/reviews/${reviewT.date}`,
        component: path.resolve("./src/templates/projectTTemplateReview.js"),
        context: reviewT,
      })
    })
  })

  // Create the content page of EXTENSION
  projectEs.forEach(({ node: projectE }) => {
    createPage({
      path: `/extension/${projectE.directus.id}`,
      component: path.resolve("./src/templates/projectETemplate.js"),
      context: projectE.directus,
    })
  })

  // Create review page of THE EXTENSION
  projectEreviews.forEach(({ node: projectEreview }) => {
    projectEreview.directus.reviews.forEach(({ directus: reviewE }) => {
      createPage({
        path: `/extension/${projectEreview.directus.year}/reviews/${reviewE.date}`,
        component: path.resolve("./src/templates/projectETemplateReview.js"),
        context: reviewE,
      })
    })
  })

  // Create review page of ABOUT
  aboutPageReviews.forEach(({ node: aboutPageReview }) => {
    aboutPageReview.directus.reviews.forEach(({ directus: reviewAbout }) => {
      createPage({
        path: `/about/reviews/${reviewAbout.date}`,
        component: path.resolve("./src/templates/aboutPageTemplateReview.js"),
        context: reviewAbout,
      })
    })
  })

  // Create press images page of PRESS
  pressImages.forEach(({ node: pressImage }) => {
    createPage({
      path: `/press/${pressImage.directus.year}/${pressImage.directus.pages_id}`,
      component: path.resolve("./src/templates/pressImageTemplate.js"),
      context: pressImage.directus,
    })
  })

  // Create listing page of CANOPY with pagination
  const postsCPerPage = 6
  const numCPages = Math.ceil(cartworklistQuery.totalCount / postsCPerPage)
  Array.from({ length: numCPages }).forEach((_, i) => {
    createPage({
      path: i === 0 ? `/canopy/list` : `/canopy/list/${i + 1}`,
      component: path.resolve("./src/templates/artworkListCTemplate.js"),
      context: {
        limit: postsCPerPage,
        skip: i * postsCPerPage,
        numCPages,
        currentPage: i + 1,
      },
    })
  })

  // Create listing page of HONGxPANASONIC with pagination
  const postsHPerPage = 6
  const numHPages = Math.ceil(hartworklistQuery.totalCount / postsHPerPage)
  Array.from({ length: numHPages }).forEach((_, j) => {
    createPage({
      path:
        j === 0 ? `/hong-x-panasonic/list` : `/hong-x-panasonic/list/${j + 1}`,
      component: path.resolve("./src/templates/artworkListHTemplate.js"),
      context: {
        limit: postsHPerPage,
        skip: j * postsHPerPage,
        numHPages,
        currentPage: j + 1,
      },
    })
  })

  // Create listing page of THE QUESTION with pagination
  const postsQPerPage = 5
  const numQPages = Math.ceil(qprojectlistQuery.totalCount / postsQPerPage)
  Array.from({ length: numQPages }).forEach((_, k) => {
    createPage({
      path: k === 0 ? `/the-question/list` : `/the-question/list/${k + 1}`,
      component: path.resolve("./src/templates/projectListQTemplate.js"),
      context: {
        limit: postsQPerPage,
        skip: k * postsQPerPage,
        numQPages,
        currentPage: k + 1,
      },
    })
  })

  // Create listing page of TCAA with pagination
  const postsTPerPage = 5
  const numTPages = Math.ceil(tprojectlistQuery.totalCount / postsTPerPage)
  Array.from({ length: numTPages }).forEach((_, l) => {
    createPage({
      path:
        l === 0 ? `/tung-chung-prize/list` : `/tung-chung-prize/list/${l + 1}`,
      component: path.resolve("./src/templates/projectListTTemplate.js"),
      context: {
        limit: postsTPerPage,
        skip: l * postsTPerPage,
        numTPages,
        currentPage: l + 1,
      },
    })
  })

  // Create listing page of EXTENSION with pagination
  const postsEPerPage = 5
  const numEPages = Math.ceil(eprojectlistQuery.totalCount / postsEPerPage)
  Array.from({ length: numEPages }).forEach((_, m) => {
    createPage({
      path: m === 0 ? `/extension/list` : `/extension/list/${m + 1}`,
      component: path.resolve("./src/templates/projectListETemplate.js"),
      context: {
        limit: postsEPerPage,
        skip: m * postsEPerPage,
        numEPages,
        currentPage: m + 1,
      },
    })
  })
}
