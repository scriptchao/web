import React, {Component} from 'react'
import 'ASSET/css/common/login.sass'
import {inject, observer} from 'mobx-react'
import {observable} from 'mobx'
import {browserHistory} from 'react-router'
import {Link} from 'react-router'
import Sidebar from './Sidebar'


@inject('Login') @observer
class Login extends Component {

    @observable msg1;
    @observable msg2;
    @observable msg;

    constructor(...args) {
        super(...args);

        this.login = this.props.Login;
    }

    handleLogin() {

        this.msg = null;

        let name = this.refs.name.value;
        let password = this.refs.password.value;

        if (!name) {
            this.msg1 = '请输入用户名!';

            return false
        }

        if (!password) {

            this.msg2 = '请输入密码';

            return false
        }


        this.login
            .postLogin(name, password)
            .then((res) => {
                if (res.result === 'xxx') {
                    console.log(res);
                    this.msg = res.message
                }else {
                    console.log(res);
                    localStorage.setItem("jwtToken", res.token);
                    localStorage.setItem("lastAction", (new Date).getTime());
                    browserHistory.push('/overview')
                }
            })
    }

    handleFocus(type) {
        if (type === 'name') {

            this.msg1 = null;
        }

        if (type === 'password') {

            this.msg2 = null
        }
    }

    handleKeyUp(e) {

        if(e.keyCode == 13){

            this.handleLogin()
        }

    }

    render() {

        return (
            <div className='login'>
                <input type="text" className="hide"/>
                <input type="password" className="hide"/>
                <div className="lock">
                    <div className="icon-lock"></div>
                </div>
                <h2>用户登入</h2>
                <div className="form-group">
                    <input type="text" required="required" ref="name" onFocus={this.handleFocus.bind(this, 'name')}/>
                    <label>用户名</label>
                    <span>{this.msg1}</span>
                </div>
                <div className="form-group">
                    <input type="password" required="required" ref="password" onFocus={this.handleFocus.bind(this, 'password')}　onKeyUp={this.handleKeyUp.bind(this)}/>
                    <label>密码</label>
                    <span>{this.msg2}</span>
                </div>
                <div className="button" onClick={this.handleLogin.bind(this)}>
                    <i>{null}</i>
                </div>
                <div className="tip">
                    <Link to="/register" className="fl">
                        <i>没</i>
                        <i>有</i>
                        <i>账</i>
                        <i>号</i>
                        <i>,</i>
                        <i>前</i>
                        <i>去</i>
                        <i>注</i>
                        <i>册</i>
                        <i>!</i>
                    </Link>
                    <Link to="/" className="fr">
                        <i>忘</i>
                        <i>记</i>
                        <i>密</i>
                        <i>码</i>
                        <i>?</i>
                    </Link>
                </div>
                <div className="msg tc">{this.msg}</div>
            </div>
        )
    }
}

export default Login
