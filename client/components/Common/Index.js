import React, {Component} from 'react'
import {Link, browserHistory} from 'react-router'
import {inject, observer} from 'mobx-react'
import {observable} from 'mobx'
import Sidebar from './Sidebar'
import Login from './Login'


@observer
class Index extends Component {

    constructor(...args) {

        super(...args);
    }

    render() {

        return (
            <Login />
        )

    }
}
export default Index
