import React, { Component } from 'react'
import { Button, Spin, Card, Icon, Alert } from 'antd'
import './ui.less'

export default class Loadings extends Component {
    render() {

        let icon = <Icon type='loading'> </Icon>

        return (
            <div>
                <Card className='card-wrap'>
                    <Spin size='small' />
                    <Spin indicator={icon} />
                </Card>

                <Card>
                    <Spin tip='loading...' indicator={icon}>
                        <Alert
                            message='welcome'
                            description='Welcome to Hollywood'
                            type='warning'
                        />
                    </Spin>
                </Card>
            </div>
        )
    }
}
