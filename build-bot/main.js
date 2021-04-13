const express = require('express');
const builder = require('./builder');
const config = require('./config.js');

const app = express();

console.info(config);

const port = config.port;
const projectPath = config.projectPath;

// support json encoded bodies
app.use(express.json());
// support encoded bodies
app.use(express.urlencoded({ extended: true }));

app.get('/', function (req, res) {
    res.json({ status: 'ok' });
});

app.post('/', (req, res) => {
    // console.log(req.body);
    builder(projectPath)
        .catch(output => {
            if (output) console.log(output);
        })
        .finally(() => {
            res.json({ status: 'ok' });
        });
});

let server = app.listen(port);
let serHost = server.address().address
let serPort = server.address().port
console.log(`Start listening at http://${serHost}:${serPort}`);