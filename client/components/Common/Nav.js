import React, {Component} from 'react'
import 'ASSET/css/common/nav.sass'
import {inject, observer} from 'mobx-react'
import {observable} from 'mobx'
import {browserHistory} from 'react-router'
import {Link} from 'react-router'

@inject('Login') @observer
class Nav extends Component {

    constructor(...args) {
        super(...args);

        this.login = this.props.Login;

    }

    handleQuit() {

        this.login
            .getLogout()
            .then((res) => {
                if (res.result === 'xxx') {

                } else {

                    console.log(res);
                    localStorage.clear();
                    browserHistory.push('/login')
                }
            })
    }




    render() {

        return (
            <div className='nav'>
                <div className="logo">
                    <span>scriptchao</span>
                </div>
                <ul>
                    <li><Link to="/overview">首页</Link></li>
                    <li><Link to="/daily">随笔</Link></li>
                </ul>
                <div className="quit">
                    <span onClick={this.handleQuit.bind(this)}>退出</span>
                </div>

            </div>
        )
    }
}

export default Nav

