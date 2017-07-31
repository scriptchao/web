/**
 * 版权所有：浙江薪福多网络科技有限公司
 * 作者：Tony
 * 创建时间：2017/5/15
 */



let express = require('express'),
    bodyParser = require('body-parser'),
    path = require('path'),
    mongoose = require('mongoose');

let app = express();

let commonPath = require('./webpack.base').commonPath,
    config = require('./webpack.base').config;

let db = require(path.join(commonPath.server,'models/db'));

mongoose.connect(db.mongodb);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

let index = require(path.join(commonPath.server, 'routes/index.js'));

index(app);

app.listen(5050, () => {
    console.log('app listening on port 5050.')
});



