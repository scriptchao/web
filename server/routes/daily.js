let Post = require('../models/post');

export function postDaily(req, res) {

    Post.findOne({name: req.body.name}, (err, post) => {
        if (err) {
            res.json(err)
        } else if (post) {
            res.json({
                result: 'xxx',
                message: '标题重复!',
            })
        } else {
            Post.create(req.body, (err, post) => {
                if (err) {
                    res.json(err)
                } else {
                    res.json({
                        result: 'a007',
                        message: '保存成功!',
                        post: post,
                    })
                }
            })
        }
    })
}

export function getDaily(req, res) {

    Post.find({}, (err, post) => {
        if (err) {
            res.json(err)
        } else {
            res.json({
                result: 'a007',
                message: '获取数据成功!',
                data: {
                    post: post,
                }

            })
        }
    })
}



