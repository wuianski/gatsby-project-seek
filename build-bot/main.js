const express = require('express');
const builder = require('./builder');

const app = express();
const port = 3000;

const projectPath = '';

// support json encoded bodies
app.use(express.json());
// support encoded bodies
app.use(express.urlencoded({ extended: true }));

app.post('/', (req, res) => {
    // console.log(req.body);
    builder(projectPath).catch(output => {
        if (output) console.log(output);
    }).finally(() => {
        res.status = 200;
    });
});

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});