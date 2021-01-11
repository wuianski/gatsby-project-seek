import { useStaticQuery, graphql } from "gatsby"

export const useMenuQuery = () => {
  const data = useStaticQuery(graphql`
    query MenuQuery {
      menu: allPages(
        filter: { directus: { sort: { ne: 5 } } }
        sort: { order: ASC, fields: directus___sort }
      ) {
        nodes {
          directus {
            id
            slug
            menu_text_en_us
            menu_text_zh_hant_tw
          }
        }
      }
    }
  `)

  return data
}
