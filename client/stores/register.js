import {observable, action} from 'mobx'
import xhr from './xhr'

class Register {

    constructor() {

        this.register = "/register"
    }


    @action postRegister(name, password, email) {

        return xhr( {
            method: 'post',
            url: this.register,
            body: {
                name: name,
                password: password,
                email: email,
            }
        })
    }
}

export default new Register

