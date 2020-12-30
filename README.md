# Seek

## Compile gatsby-source-directus with TypeScript

```sh
npm run build-plugin
```

## Plugin

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
