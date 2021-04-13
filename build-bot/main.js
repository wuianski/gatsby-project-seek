const express = require('express');
const builder = require('./builder');
const colors = require('colors/safe');

const config = require('./config.js');

const app = express();

const port = config.port;
const projectPath = config.projectPath;
const hostname = config.host;

// support json encoded bodies
app.use(express.json());
// support encoded bodies
app.use(express.urlencoded({ extended: true }));

app.get('/', function (req, res) {
    res.json({ status: 'ok' });
});

app.post('/', async (req, res) => {
    res.json({ status: 'ok' });

    await builder(projectPath)
        .catch(output => {
            if (output) console.log(output);
        });
});

app.listen(port, hostname);
console.info(colors.green(`Start listening at http://${hostname}:${port}`));
console.info(colors.green(`Project Path: ${config.projectPath}`));