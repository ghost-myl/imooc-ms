import React, { Component } from 'react'
import { Row } from 'antd'
import Header from './components/header'
import './style/common.less'


export default class Common extends Component {

    test = {
        a: 1
    }

    render() {
        console.log(this.test.a)
        this.test.a = this.test.a + 1;

        return (
            <div>
                <Row className='container'>
                    <Header menuType='second' />
                </Row>
                <Row>
                    {this.props.children}
                </Row>
            </div>

        )
    }
}