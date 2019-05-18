import React, { Component } from 'react'
import { Modal, Button, Card } from 'antd'
import './ui.less'

export default class Modals extends Component {

    state = {
        showModal1: false,
        showModal2: false,
        showModal3: false,
        showModal4: false,
        showConfirm1: false,
        showConfirm2: false
    }

    handleModal = (type) => {
        this.setState({
            [type]: true
        })
    }

    cancelModal = (type) => {
        this.setState({
            [type]: false
        })
    }

    handleConfirm = (type) => {
        Modal[type]({
            title: '确认',
            content: 'you sure to delete your life?',
            // onOk() {
            //     console.log('ok')
            // },
            // onCancel() {
            //     console.log('cancel')
            // }
        })
    }

    render() {

        let { handleModal, cancelModal, handleConfirm } = this;
        let { showModal1, showModal2, showModal3, showModal4 } = this.state;

        return (
            <div>
                <Card title='基础模态框' className='card-wrap'>
                    <Button type='primary' onClick={() => handleModal('showModal1')}>Open</Button>
                    <Button type='primary' onClick={() => handleModal('showModal2')}>自定义页脚</Button>
                    <Button type='primary' onClick={() => handleModal('showModal3')}>Open</Button>
                    <Button type='primary' onClick={() => handleModal('showModal4')}>Open</Button>
                </Card>
                <Modal
                    title='标题'
                    visible={showModal1}
                    okText='YEAH'
                    cancelText='NOPE'
                    onCancel={() => cancelModal('showModal1')}
                    onOk={() => cancelModal('showModal1')}
                ></Modal>
                <Modal
                    title='标题'
                    visible={showModal2}
                    okText='YEAH'
                    cancelText='NOPE'
                    onCancel={() => cancelModal('showModal2')}
                    onOk={() => cancelModal('showModal2')}
                ></Modal>
                <Modal
                    title='标题'
                    visible={showModal3}
                    okText='YEAH'
                    cancelText='NOPE'
                    onCancel={() => cancelModal('showModal3')}
                    onOk={() => cancelModal('showModal3')}
                ></Modal>
                <Modal
                    title='标题'
                    visible={showModal4}
                    okText='YEAH'
                    cancelText='NOPE'
                    onCancel={() => cancelModal('showModal4')}
                    onOk={() => cancelModal('showModal4')}
                ></Modal>

                <Card title='确认框' className='card-wrap'>
                    <Button onClick={() => handleConfirm('confirm')}>
                        Confirm
                    </Button>
                    <Button onClick={() => handleConfirm('success')}>
                        success
                    </Button>
                    <Button onClick={() => handleConfirm('info')}>
                        info
                    </Button>
                    <Button onClick={() => handleConfirm('warning')}>
                        warning
                    </Button>
                </Card>
            </div>
        )
    }
}
