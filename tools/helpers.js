/**
 * 版权所有：浙江薪福多网络科技有限公司
 * 作者：Tony
 * 创建时间：2017/5/18
 */

let _ = require('lodash'),
    shell = require('shelljs');

module.exports = {
    getLines(filePath) {
        return shell.cat(filePath).split('\r\n');
    },

    lineIndex(lines, str) {
        if (typeof str === 'string') {
            return _.findIndex(lines, l => l.indexOf(str) >= 0);
        }
        return _.findIndex(lines, l => str.test(l) === true);
    },

    processTemplate(tpl, data) {
        const compiled = _.template(tpl);
        return compiled(data);
    },

    getToSave(filesToSave) {
        return function toSave(filePath, fileContent) {
            filesToSave.push({
                path: filePath,
                content: _.isArray(fileContent) ? fileContent.join('\r\n') : fileContent,
            });
        };
    },

    saveFiles(files) {
        files.forEach(file => {
            shell.ShellString(file.content).to(file.path);
        });
    },
};