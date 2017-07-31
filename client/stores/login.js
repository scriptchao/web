import {observable, action} from 'mobx'
import xhr from './xhr'

class Login {

    constructor() {

        this.login = "/login";

        this.logout = '/logout'
    }


    @action postLogin(name, password) {

        return xhr({
            method: 'post',
            url: this.login,
            body: {
                name: name,
                password: password
            }
        })
    }

    @action getLogout() {

        return xhr({
            method: 'get',
            url: this.logout,
        })
    }
}

export default new Login
