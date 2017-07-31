/**
 * 版权所有：浙江薪福多网络科技有限公司
 * 作者：Tony
 * 创建时间：2017/5/15
 */

let path = require('path'),
    NyanProgressPlugin = require('nyan-progress-webpack-plugin');

let common = require('../common.js');

let commonPath = {
    rootPath: common.rootPath,
    client: common.client,
    server: common.server,
    dist: common.dist,
    publicPath: '/',
    staticDir: path.join(common.client, 'static'),
    indexHtml: path.join(common.client, 'index.html'),
    indexApp: path.join(common.client, 'app.js')
};

let config = {
    entry: {
        app: [
            'webpack-hot-middleware/client',
            'webpack/hot/only-dev-server',
            commonPath.indexApp
        ],
        vendor: [
            'react',
            'react-dom',
            'react-router',
            'mobx',
            'mobx-react'
        ]
    },

    output: {
        publicPath: commonPath.publicPath,
        filename: '[name].js',
    },

    resolve: {
        extensions: ['.js'],
        alias: {
            ASSET: path.join(commonPath.client, 'assets'),
            COMPONENT: path.join(commonPath.client, 'components'),
            ROUTE: path.join(commonPath.client, 'routes'),
            STORE: path.join(commonPath.client, 'stores'),
        }
    },


    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
                query: {
                    'presets': ['es2015', 'react', 'stage-0'],
                    'plugins': [
                        'transform-runtime',
                        'transform-decorators-legacy'
                    ]
                }
            }
        ]
    },

    plugins: [
        new NyanProgressPlugin()
    ]
};

exports.commonPath = commonPath;
exports.config = config;


