/**
 * 版权所有：浙江薪福多网络科技有限公司
 * 作者：Tony
 * 创建时间：2017/5/18
 */

const _ = require('lodash'),
    path = require('path'),
    shell = require('shelljs'),
    common = require('../common'),
    helpers = require('./helpers');

const args = process.argv;
const arr = (args[2] || '').split('/');
let moduleName = arr[0],
    pageName = arr[1];

if (!moduleName || !pageName) {
    throw new Error('Please set the module name and page name');
}

let assets_module_name = _.camelCase(moduleName),
    assets_page_name = _.camelCase(pageName),
    components_module_name = _.capitalize(assets_module_name),
    components_page_name = _.capitalize(assets_page_name);

let fileToSave = [];
let toSave = helpers.getToSave(fileToSave);

let components_target = path.join(common.client, `components/${components_module_name}/${components_page_name}.js`),
    assets_target = path.join(common.client, `assets/css/${assets_module_name}/${assets_page_name}.sass`),
    components_dir = path.join(common.client, `components/${components_module_name}`),
    assets_dir = path.join(common.client, `assets/css/${assets_module_name}`),
    routes_dir = path.join(common.client, 'routes/index.js');

let lines = helpers.getLines(routes_dir);
let i = helpers.lineIndex(lines, new RegExp(`\{path: '${assets_module_name}\/${assets_page_name}'`));

lines.splice(i, 1);

toSave(routes_dir, lines);

if (shell.test('-e', components_target)) {
    if (shell.ls(components_dir).length === 1) {
        shell.rm('-rf', components_dir)
    } else {
        shell.rm('-rf', components_target)
    }
}

if (shell.test('-e', assets_target)) {
    if (shell.ls(assets_dir).length === 1) {
        shell.rm('-rf', assets_dir)
    } else {
        shell.rm('-rf', assets_target)
    }
}

helpers.saveFiles(fileToSave);

console.log(`remove module done: 
${assets_dir}\r\n${assets_target}\r\n${components_dir}\r\n${components_target}`);
