let register = require('./register');
let login = require('./login');
let overview = require('./overview');
let logout = require('./logout');
import {postDaily, getDaily} from './daily'
let User = require('../models/user');
import upload from './upload'


module.exports = function (app) {

    app.all('*', function (req, res, next) {

        res.header('Access-Control-Allow-Origin', '*');
        res.header('Access-Control-Allow-Headers', 'Content-Type, Content-Length, Authorization, Accept, X-Requested-With');
        res.header('Access-Control-Allow-Methods', 'PUT, POST, GET, DELETE, OPTIONS');

        if (req.method === 'OPTIONS') {
            res.send(200);
        }
        else {
            next();
        }
    });

    app.use(function (req, res, next) {

        let url = req.originalUrl;

        if (url !== "/login" && url !== '/register') {
            console.log(req.headers.authorization);

            User.findOne({token: req.headers.authorization}, (err, user) => {
                if (err) {
                    console.log(err);
                    res.json({
                        result: 'xxx',
                        message: '通用异常!',
                    })
                } else if (!user) {
                    console.log('noUser');
                    res.json({
                        result: 'xxx',
                        message: '用户未登入!',
                    })
                } else {
                    next();
                }
            })
        } else {
            next();
        }
    });

    app.post('/register', register);

    app.post('/login', login);

    app.get('/overview', overview);

    app.get('/logout', logout);

    app.post('/daily', postDaily);

    app.get('/daily', getDaily);

    app.post('/upload',upload)
};


