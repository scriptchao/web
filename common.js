/**
 * 版权所有：浙江薪福多网络科技有限公司
 * 作者：Tony
 * 创建时间：2017/5/17
 */
let path = require('path');

let rootPath = __dirname;

module.exports = {
    rootPath: rootPath, // 项目根目录
    client: path.join(rootPath, 'client'), // 客户端代码
    server: path.join(rootPath, 'server'), // 服务端代码
    dist: path.join(rootPath, 'dist'), // 单页应用代码
    tools: path.join(rootPath, 'tools') // 自动化部署工具
};
