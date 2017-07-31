import React, {Component} from 'react'
import 'ASSET/css/${ASSETS_MODULE_NAME}/${ASSETS_PAGE_NAME}.sass'
import {inject, observer} from 'mobx-react'
import {observable} from 'mobx'
import {Link, browserHistory} from 'react-router'
import Nav from '../Common/Nav'
import Sidebar from '../Common/Sidebar'
import Section from '../Common/Section'

@observer
export default class ${COMPONENTS_MODULE_NAME}${COMPONENTS_PAGE_NAME} extends Component {

    constructor(...args) {

        super(...args);
    }


    render() {
        return (
            <div className="flyingWing">
                <Nav />
                <Sidebar />
                <Section>
                    <div className="${ASSETS_MODULE_NAME}${COMPONENTS_PAGE_NAME} gray">
                    </div>
                </Section>
            </div>
        )
    }
}

