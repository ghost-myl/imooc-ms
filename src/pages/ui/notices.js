import React, { Component } from 'react'
import { Card, Button, notification } from 'antd'
import './ui.less'


export default class Notices extends Component {

    handleNotice = (type, description) => {
        if (description) {
            // notification.config({
            //     placement: direction
            // })
        }
        notification[type]({
            message: 'peekaboo',
            description: 'iiiii'
        })
    }


    render() {

        let { handleNotice } = this;

        return (
            <div>
                <Card>
                    <Button onClick={() => handleNotice('success')}>通知</Button>
                </Card>
            </div>
        )
    }
}
