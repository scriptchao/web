/**
 * 版权所有：浙江薪福多网络科技有限公司
 * 作者：Tony
 * 创建时间：2017/5/16
 */

let fs = require('fs'),
    path = require('path'),
    webpack = require('webpack');

let commonPath = require('./webpack.prod').commonPath,
    config = require('./webpack.prod').config;

webpack(config, (err, stats) => {
    console.log(stats.toString({chunks: false, color: true}));

    fs.writeFile(
        path.join(commonPath.dist,'__build_info__'),
        stats.toString({color: false})
    )
});