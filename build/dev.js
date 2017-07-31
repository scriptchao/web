/**
 * 版权所有：浙江薪福多网络科技有限公司
 * 作者：Tony
 * 创建时间：2017/5/15
 */

require('./check-versions')();

let webpack = require('webpack'),
    express = require('express'),
    ConnectHistoryApiFallback = require('connect-history-api-fallback'),
    webpackDevMiddleware = require('webpack-dev-middleware'),
    webpackHotMiddleware = require('webpack-hot-middleware');

let commonPath = require('./webpack.dev').commonPath,
    config = require('./webpack.dev').config;

let app = express(),
    compiler = webpack(config);


app.use('/static', express.static(commonPath.staticDir)); //绝对路径

app.use(ConnectHistoryApiFallback());
app.use(webpackDevMiddleware(compiler, {
    noInfo: true,
    publicPath: commonPath.publicPath
}));
app.use(webpackHotMiddleware(compiler));


app.listen(6000, () => {
    console.log('app listening on port 6000')
});



