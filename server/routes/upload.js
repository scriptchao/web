/**
 * 版权所有：浙江薪福多网络科技有限公司
 * 作者：Tony
 * 创建时间：2017/5/16
 */

import multiparty from 'multiparty'

export default function (req, res) {

    let form = new multiparty.Form();
    form.encoding = 'utf-8';

    // console.log(req.headers)
    // console.log(req)
    form.parse(req, (err, fields, files) => {
        console.log(fields, files)
    });
}
