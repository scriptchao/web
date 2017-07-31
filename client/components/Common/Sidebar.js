import React, {Component} from 'react'
import 'ASSET/css/common/sidebar.sass'
import {Link} from 'react-router'
import {observable} from 'mobx'
import {inject, observer} from 'mobx-react'

@observer
class Sidebar extends Component {

    constructor(...args) {
        super(...args);

    }

    render() {
        return (
            <div className="sidebar">
                <Link to="/">home</Link>
                <Link to="/login">login</Link>
                <Link to="/register">register</Link>
            </div>
        )
    }
}
export default Sidebar