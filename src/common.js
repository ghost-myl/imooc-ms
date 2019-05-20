import React, { Component } from 'react'
import { Row } from 'antd'
import Header from './components/header'
import './style/common.less'


export default class Common extends Component {
    render() {

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