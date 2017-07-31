/**
 * 版权所有：浙江薪福多网络科技有限公司
 * 作者：Tony
 * 创建时间：2017/5/17
 */

let chalk = require('chalk'),
    semver = require('semver'),
    shell = require('shelljs');

let packageConfig = require('../package.json');

function exec (cmd) {
    return shell.exec(cmd).toString().trim()
}

let versionUpdate = [
    {
        name: 'node',
        current: semver.clean(process.version),
        requirement: packageConfig.engines.node
    },
    {
        name: 'npm',
        current: exec('npm --version'),
        requirement: packageConfig.engines.npm
    }
];

module.exports = function () {
    let warnings = [];
    for(let i = 0; i < versionUpdate.length; i++) {
        let mod = versionUpdate[i];
        if(!semver.satisfies(mod.current,mod.requirement)) {
            warnings.push(`${mod.name} : ${chalk.red(mod.current)} should be update ${chalk.green(mod.requirement)}`)
        }
    }

    if(warnings.length) {
        console.log(chalk.yellow('To use this template, you must update following to modules:'));

        for(let i = 0; i < warnings.length; i++) {
            console.log(`  ${warnings[i]}`)
        }
        process.exit(1)
    }
};