import React, {Component} from 'react'
import {Link, browserHistory} from 'react-router'
import {inject, observer} from 'mobx-react'
import {observable} from 'mobx'
import 'ASSET/css/overview.sass'
import Nav from './Common/Nav'


@inject('Overview') @observer
class Overview extends Component {

    constructor(...args) {

        super(...args);

        this.overview = this.props.Overview;
    }

    componentDidMount() {

        /*this.overview
            .getOverview()
            .then((res) => {
                if (res.result === 'xxx') {

                    console.log(res)

                } else {
                    console.log(res)
                }
            })*/
    }

    handleUpload() {

        let formData = new FormData(this.refs.form);

        this.overview
            .postPayroll(formData)
            .then((response) => {

            console.log(response)
            })
    }

    render() {
        return (
            <div>
                <Nav />
                <div className="overview">
                    <form encType="multipart/form-data" ref="form">
                        <input type="file" name="file" onChange={this.handleUpload.bind(this)}/>
                    </form>
                </div>
            </div>
        )
    }
}
export default Overview

