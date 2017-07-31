let User = require('../models/user');

module.exports = function (req, res) {

    User.findOne({name: req.body.name}, (err, user) => {
        if (err) {
            res.json(err)
        } else if (user) {
            res.json({
                result: 'xxx',
                message: '用户名已存在!',
            })
        } else {
            User.create(req.body, (err, user) => {
                if (err) {
                    res.json(err)
                } else {
                    res.json({
                        result: 'a007',
                        message: '注册成功!',
                        user: user,
                    })
                }
            })
        }
    })
};
