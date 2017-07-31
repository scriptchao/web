import {observable, action} from 'mobx'
import xhr from './xhr'

class Daily {

    @observable data = {};

    constructor() {

        this.daily = "/daily"
    }


    @action postDaily(name, title) {

        return xhr({
            method: 'post',
            url: this.daily,
            body: {
                name: name,
                title: title,
            }
        })
    }

    @action getDaily() {

        return xhr({
            method: 'get',
            url: this.daily,
        })
    }
}

export default new Daily

