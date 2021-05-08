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

    await builder.build(projectPath)
        .then(async () => {
            console.info(colors.green('build success.'));
            await builder.moveOutput()
                .then(() => {
                    console.info(colors.green('copy the build file success.'));
                })
                .catch(output => {
                    if (output) console.info(colors.red(output));
                });
        })
        .catch(output => {
            if (output) console.info(colors.red(output));
        });
});

app.listen(port, hostname);
console.info(colors.green(`Start listening at http://${hostname}:${port}`));
console.info(colors.green(`Project Path: ${config.projectPath}`));