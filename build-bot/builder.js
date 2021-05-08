const fs = require('fs');
const fsPromises = fs.promises;
const util = require('util');
const exec = util.promisify(require('child_process').exec);
const colors = require('colors/safe');
const copydir = require('copy-dir');

const config = require('./config.js');

let isBuilding = false;
let requestBuildCount = 0;

async function privateBuild() {
    let projectPath = config.projectPath;

    let cleanCmd = 'gatsby clean';
    let buildCmd = 'gatsby build';

    let executeCmd = `${buildCmd}`;
    // let executeCmd = `${cleanCmd} && ${buildCmd}`;

    try {
        console.info(`Start building gatsby website... > ${projectPath}`);
        await fsPromises.access(projectPath);

        if (!projectPath) {
            console.error(colors.red(`[ERR]:: Project path is invalid. > ${projectPath}`));
            return;
        }

        const { err, stdout, stderr } =
            await exec(executeCmd, {
                cwd: projectPath
            });

        if (stderr) {
            console.error(colors.red(`${stderr}`));
        }

        console.info(colors.green('Building gatsby website done.'));
    } catch (err) {
        console.error(colors.red(`${err}${err.stdout}`));
    }
}

async function build() {
    if (isBuilding) {
        requestBuildCount++;
        console.warn(colors.yellow(`Is building...${requestBuildCount}`));
        return;
    }

    requestBuildCount = 0;
    isBuilding = true;

    await privateBuild();
    if (requestBuildCount > 0) {
        isBuilding = false;
        await build();
        return;
    }

    isBuilding = false;
}

async function moveOutput() {
    let srcPath = config.projectOutputPath;
    let destPath = config.websitePath;
    console.warn(colors.green(`${srcPath} >>> ${destPath}`));
    copydir.sync(srcPath, destPath, {
        utimes: true,
        mode: true,
        cover: true
    });
}

module.exports = {
    build,
    moveOutput
};