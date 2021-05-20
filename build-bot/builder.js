const fs = require('fs');
const fsPromises = fs.promises;
const util = require('util');
const exec = util.promisify(require('child_process').exec);
const colors = require('colors/safe');
const copydir = require('copy-dir');

const config = require('./config.js');

let _isBuilding = false;
let _isCopying = false;
let _requestBuildCount = 0;

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
    if (isBusy()) {
        _requestBuildCount++;
        console.warn(colors.yellow(`Is building...${_requestBuildCount}`));
        return;
    }

    _requestBuildCount = 0;
    _isBuilding = true;

    await privateBuild();
    if (_requestBuildCount > 0) {
        _isBuilding = false;
        await build();
        return;
    }

    _isBuilding = false;
}

async function moveOutput() {
    let srcPath = config.projectOutputPath;
    let destPath = config.websitePath;
    console.info(colors.green(`${srcPath} >>> ${destPath}`));

    if (isBusy()) {
        console.warn(colors.yellow(`Is copying..`));
        return;
    }

    _isCopying = true;

    copydir.sync(srcPath, destPath, {
        utimes: true,
        mode: true,
        cover: true
    });

    _isCopying = false;

    if (_requestBuildCount > 0) {
        await build();
    }
}

function isBusy() {
    return _isBuilding || _isCopying;
}

module.exports = {
    build,
    moveOutput,
    isBusy
};