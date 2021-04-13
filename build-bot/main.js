const express = require('express');
const builder = require('./builder');
const colors = require('colors/safe');

const config = require('./config.js');

const app = express();

const port = config.port;
const projectPath = config.projectPath;

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

let server = app.listen(port);
let serHost = server.address().address
let serPort = server.address().port
console.info(colors.green(`Start listening at http://${serHost}:${serPort}`));
console.info(colors.green(`Project Path: ${config.projectPath}`));