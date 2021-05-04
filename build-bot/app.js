const builder = require('./builder');
const config = require('./config.js');

const projectPath = config.projectPath;

(async () => {
    await builder.moveOutput()
        .then(() => {
            console.log('moveOutput success.');
        })
        .catch(output => {
            if (output) console.log(output);
        });
})();