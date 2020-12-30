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
