import {observable, action} from 'mobx'
import xhr from './xhr'

class Overview {

    constructor() {

        this.overview = "/overview";

        this.payroll = '/upload';
    }


    @action getOverview() {

        return xhr({
            method: 'get',
            url: this.overview,
        })
    }

    @action postPayroll(formData) {
        return xhr({
            method: 'post',
            url: `${this.payroll}`,
            body: formData
        })
    }
}

export default new Overview


