import React, {Component} from 'react'
import 'ASSET/css/common/register.sass'
import {inject, observer} from 'mobx-react'
import {observable} from 'mobx'
import {browserHistory} from 'react-router'
import {Link} from 'react-router'
import Sidebar from './Sidebar'


@inject('Register') @observer
class Register extends Component {

    @observable msg1;
    @observable msg2;
    @observable msg3;
    @observable msg4;

    @observable msg;

    @observable show;

    constructor(...args) {
        super(...args);

        this.register = this.props.Register;

    }

    componentDidMount() {

    }

    handleRegister() {

        this.msg = null;

        let name = this.refs.name.value;
        let password = this.refs.password.value;
        let passwordRe = this.refs.passwordRe.value;
        let email = this.refs.email.value;

        if (!/^\w{6,16}$/.test(name)) {

            this.msg1 = '请输入6-16位字符!';

            return false;
        }


        if(!/^[a-zA-Z]\w{5,}$/.test(password)){

            this.msg2 = '请输入以字母开头的不少于6位字符的密码!';

            return false
        }

        if(password !== passwordRe){

            this.msg3 = '两次输入密码不一致!';

            return false

        }

        if(!/^\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/.test(email)){

            this.msg4 = '请输入正确的邮箱格式!';

            return false
        }



        this.register
            .postRegister(name, password, email)
            .then((res) => {
                if(res.result == 'xxx'){
                    console.log(res);
                    this.msg = res.message
                }else {

                    this.show = true;

                    let timer = setTimeout(() => {
                        browserHistory.push('/login');
                        clearTimeout(timer)

                    },2000)
                }
            })
    }

    handleFocus(type) {

        if(type == 'name'){

            this.msg1 = null
        }

        if(type == 'password'){

            this.msg2 = null
        }

        if(type == 'passwordRe'){

            this.msg3 = null
        }

        if(type == 'email'){

            this.msg4 = null
        }

    }

    render() {

        return (
            <div className='register'>
                <div className="lock">
                    <div className="icon-lock"></div>
                </div>
                <h2>账号注册</h2>
                <div className="form-group">
                    <input type="text" required="required" ref="name" onFocus={this.handleFocus.bind(this,'name')}/>
                    <lable>用户名</lable>
                    <span>{this.msg1}</span>
                </div>
                <div className="form-group">
                    <input type="password" required="required" ref="password" onFocus={this.handleFocus.bind(this,'password')}/>
                    <label>密码</label>
                    <span>{this.msg2}</span>
                </div>
                <div className="form-group">
                    <input type="password" required="required" ref="passwordRe" onFocus={this.handleFocus.bind(this,'passwordRe')}/>
                    <lable>确认密码</lable>
                    <span>{this.msg3}</span>
                </div>
                <div className="form-group">
                    <input type="text" required="required" ref="email" onFocus={this.handleFocus.bind(this,'email')}/>
                    <label>邮箱</label>
                    <span>{this.msg4}</span>
                </div>
                <div className="button" onClick={this.handleRegister.bind(this)}>
                    <i>{null}</i>
                </div>
                <div className="tip">
                    <Link to="/login" className="fl">
                        <i>已</i>
                        <i>有</i>
                        <i>账</i>
                        <i>号</i>
                        <i>,</i>
                        <i>前</i>
                        <i>去</i>
                        <i>登</i>
                        <i>入</i>
                        <i>!</i>
                    </Link>
                </div>
                <div className="msg tc">{this.msg}</div>
                <div className={this.show ? 'show pop' : 'hide pop'}>注册成功!</div>
            </div>
        )
    }
}

export default Register

