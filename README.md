# Seek

## Compile gatsby-source-directus with TypeScript

```sh
# Install TypeScript if needed
npm install -g typescript

# cd to project root directory and install all package
npm install

# build plugin
npm run build-plugin
```

## Setting plugin

### gatsby-source-directus

Add below object to `plugins: [ ]` in `gatsby-config.js`

```js
{
    resolve: require.resolve(`./plugins/gatsby-source-directus`),
    options: {
        url: '',
        email: '',
        password: ''
    }
}
```

## GraphQL

### File information

這部分是用來取得 directus 裡面 file 相關的資訊。

```graphql
{
  allFileInfo {
    edges {
      node {
        directus {
          fileId // 檔案的 id, 非 Gatsby node id
          title // same as directus
          description // same as directus
          filename_download // same as directus
          tags // same as directus
        }
      }
    }
  }
}
```

### 檔案相關欄位

檔案相關的欄位可以直接使用 `publicURL` 來取得檔案位置，需要取得檔案相關資訊時可使用 `name` 欄位來比對 `FileInfo`.`fileId` 取得資訊。

```graphql
{
  someTarget {
    edges {
      node {
        directus {
          file_field {
            publicURL
            name
          }
        }
      }
    }
  }
}
```
