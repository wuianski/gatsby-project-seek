const fs = require('fs');
const fsPromises = fs.promises;
const util = require('util');
const exec = util.promisify(require('child_process').exec);

async function build(projectPath) {
    try {
        console.info('Start building gatsby website...');
        await fsPromises.access(projectPath);

        if (!projectPath) {
            console.error(`[ERR]:: Project path is invalid. > ${projectPath}`);
            return;
        }

        const { err, stdout, stderr } =
            await exec('gatsby build', {
                cwd: projectPath
            });

        if (stderr) {
            console.error(`error: ${stderr}`);
        }

        console.info('Building gatsby website done.');
    } catch (error) {
        throw error;
    }
}

module.exports = build;