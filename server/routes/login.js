let User = require('../models/user');

module.exports = function (req, res) {

    console.log(req);

    User.findOne({name: req.body.name}, (err, user) => {
        if (!user) {
            res.json({
                result: 'xxx',
                message: '用户不存在!',
            })
        } else if (user.password !== req.body.password) {

            res.json({
                result: 'xxx',
                message: '密码错误!',
            });
        } else {
            User.findOneAndUpdate({name: req.body.name},
                {$set: {token: '323406'}},
                {new: true},
                (err, user) => {
                    res.json({
                        result: 'a007',
                        message: '登入成功，请自行跳转!',
                        token: user.token,
                        user: user,
                    })
                }
            );

        }
    })
};
