/**
 * 版权所有：浙江薪福多网络科技有限公司
 * 作者：Tony
 * 创建时间：2017/5/16
 */

let webpack = require('webpack'),
    HtmlWebpackPlugin = require('html-webpack-plugin'),
    CopyWebpackPlugin = require('copy-webpack-plugin'),
    CleanWebpackPlugin = require('clean-webpack-plugin'),
    ExtractTextPlugin = require('extract-text-webpack-plugin'),
    merge = require('webpack-merge'),
    path = require('path');

let commonPath = require('./webpack.base').commonPath,
    config = require('./webpack.base').config;

exports.commonPath = commonPath;
exports.config = merge(config, {
    output: {
        path: path.join(commonPath.dist, 'static'),
        filename: '[name].[chunkHash:5].js',
        publicPath: '/static/',
    },
    module: {
        rules: [
            {
                test: /\.sass$/,
                loader: ExtractTextPlugin.extract({fallback: 'style-loader', use: ['css-loader', 'sass-loader']})
            }
        ]
    },
    plugins: [
        new CleanWebpackPlugin('dist', {
                root: commonPath.rootPath
            }
        ),
        new CopyWebpackPlugin([
            {
                from: commonPath.staticDir,
                to: path.join(commonPath.dist, 'static'),
                ignore: ['*.md']
            }
        ]),
        new webpack.optimize.UglifyJsPlugin(),
        new webpack.optimize.CommonsChunkPlugin({
            names: ['vendor', 'mainifest']
        }),
        new ExtractTextPlugin('[name].[chunkHash:5].css'),
        new HtmlWebpackPlugin({
            filename: '../index.html',
            template: commonPath.indexHtml
        })
    ]
});
