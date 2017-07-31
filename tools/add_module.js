/**
 * 版权所有：浙江薪福多网络科技有限公司
 * 作者：Tony
 * 创建时间：2017/5/17
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

const context = {
    ASSETS_MODULE_NAME: assets_module_name,
    ASSETS_PAGE_NAME: assets_page_name,
    COMPONENTS_MODULE_NAME: components_module_name,
    COMPONENTS_PAGE_NAME: components_page_name
};

let fileToSave = [];
let toSave = helpers.getToSave(fileToSave);

let components_target = path.join(common.client, `components/${components_module_name}/${components_page_name}.js`),
    assets_target = path.join(common.client, `assets/css/${assets_module_name}/${assets_page_name}.sass`),
    components_dir = path.join(common.client, `components/${components_module_name}`),
    assets_dir = path.join(common.client, `assets/css/${assets_module_name}`),
    routes_dir = path.join(common.client, 'routes/index.js');

let components_tpl = shell.cat(path.join(common.tools, 'template/template.js')),
    assets_tpl = shell.cat(path.join(common.tools, 'template/template.sass'));

if (!shell.test('-e', components_target)) {
    toSave(components_target, helpers.processTemplate(components_tpl, context));
    toSave(assets_target, helpers.processTemplate(assets_tpl, context))
}

let lines = helpers.getLines(routes_dir);
let i = helpers.lineIndex(lines, /\{path: '\*'/);

lines.splice(i - 1, 0, '' , `        {path: '${assets_module_name}/${assets_page_name}', component: require('COMPONENT/${components_module_name}/${components_page_name}').default},`);

toSave(routes_dir, lines);


if (!shell.test('-e', components_dir)) {
    shell.mkdir(components_dir)
}

if (!shell.test('-e', assets_dir)) {
    shell.mkdir(assets_dir)
}


helpers.saveFiles(fileToSave);

console.log(`add module success: 
${assets_dir}\r\n${assets_target}\r\n${components_dir}\r\n${components_target}`);