let mongoose = require('mongoose');

let Post = mongoose.Schema({
        name: String,
        title: String,
        createTime: {
            type: Number,
            default: Date.now
        },
        updateTime: {
            type: Number,
            default: Date.now
        }
    },
    {
        versionKey: false,
    }
);

module.exports = mongoose.model('Post', Post);

