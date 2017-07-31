/**
 * 版权所有：浙江薪福多网络科技有限公司
 * 作者：Tony
 * 创建时间：2017/5/15
 */

import React from 'react'
import ReactDOM from 'react-dom'
import {Router, browserHistory} from 'react-router'
import {Provider} from 'mobx-react'
import stores from 'STORE'
import routes from 'ROUTE'
import 'ASSET/css/global.sass'

const MOUNT_NODE = document.getElementById('app');

ReactDOM.render(
    <Provider {...stores}>
        <Router history={browserHistory} children={routes}/>
    </Provider>,
    MOUNT_NODE
);