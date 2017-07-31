import React, {Component} from 'react'
import {Link, browserHistory} from 'react-router'
import {inject, observer} from 'mobx-react'
import {observable} from 'mobx'
import 'ASSET/css/daily/index.sass'
import Nav from '../Common/Nav'


@inject('Daily') @observer
class Daily extends Component {

    @observable needAdd;
    @observable num;

    constructor(...args) {

        super(...args);

        this.daily = this.props.Daily;
    }

    componentDidMount() {

        this.daily
            .getDaily()
            .then((res) => {
                if (res.result === 'xxx') {

                    console.log(res)

                } else {
                    console.log(res);

                    this.daily.data = res.data;

                }
            })

    }

    handleAddDaily() {

        this.needAdd = true;
    }

    handleCancel() {
        this.needAdd = false
    }

    handleSave() {

        let name = this.refs.name.value;
        let title = this.refs.title.value;

        if (name && title) {
            this.daily
                .postDaily(name, title)
                .then((res) => {
                    if (res.result === 'xxx') {

                        console.log(res)

                    } else {
                        console.log(res);
                        this.needAdd = false;
                        location.reload();
                    }
                })

        }
    }

    handleBack(index) {


        this.num = index;

    }

    render() {

        let {post = []} = this.daily.data;
        return (
            <div>
                <Nav />
                <div className="daily">
                    <ul>
                        {
                            post.map((value,index) => {

                                return (
                                    <li onClick={this.handleBack.bind(this,index)} className={this.num == index ? 'roll' : null}>{this.num == index ? value.title : value.name}</li>
                                )
                            })
                        }

                    </ul>
                    <div className={this.needAdd ? 'newDaily' : 'hide'}>
                        <label>标题</label>
                        <input type="text" ref="name"/>
                        <textarea ref="title"></textarea>
                        <div className="btn">
                            <span onClick={this.handleSave.bind(this)}>保存</span>
                            <span onClick={this.handleCancel.bind(this)}>取消</span>
                        </div>
                    </div>
                    <div className="add tc">
                        <span onClick={this.handleAddDaily.bind(this)}>+新增随笔</span>
                    </div>
                </div>
            </div>

        )

    }
}
export default Daily


