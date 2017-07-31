/**
 * 版权所有：浙江薪福多网络科技有限公司
 * 作者：Tony
 * 创建时间：2017/5/15
 */

let webpack = require('webpack'),
    merge = require('webpack-merge'),
    HtmlWebpackPlugin = require('html-webpack-plugin'),
    BrowserSyncPlugin = require('browser-sync-webpack-plugin'),
    path = require('path');

let commonPath = require('./webpack.base').commonPath,
    config = require('./webpack.base').config;


exports.commonPath = commonPath;
exports.config = merge(config, {
    module: {
        rules: [
            {
                test: /\.sass$/,
                loader: 'style-loader!css-loader!sass-loader'
            }
        ]
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: commonPath.indexHtml
        }),
        new BrowserSyncPlugin({
            host: '127.0.0.1',
            port: 6060,
            proxy: 'http://127.0.0.1:6000/',
        })
    ]
})
