import React, { Component } from 'react'
import { Card, Row, Col, Modal } from 'antd'
import './ui.less'

export default class Gallery extends Component {
    state = {
        visible: false,
        currentImg: ''
    }


    openGallery = (imgSrc) => {
        this.setState({
            visible: true,
            currentImg: '/gallery/' + imgSrc
        })
    }


    render() {

        const imgs = [];
        let num = 1;
        for (let row = 0; row < 5; row++) {
            let arr = [];
            for (let col = 0; col < 5; col++ , num++) {
                arr.push(num + '.png')
            }
            imgs.push(arr)
        }

        const imgList = imgs.map(arrItem => arrItem.map(item => {
            return <Card
                style={{ marginBottom: 10 }}
                cover={<img src={'/gallery/' + item} onClick={() => this.openGallery(item)} />}
            >
                <Card.Meta
                    title="React Admin"
                    description="I Love Imooc"
                />
            </Card>
        }
        ))

        let cols = []
        for (let i = 0; i < 5; i++) {
            cols.push(<Col md={5} key={i}>{imgList[i]}</Col>)
        }
        console.log(cols)



        let { visible, currentImg } = this.state;



        return (
            <div className='card-wrap'>
                <Row gutter={10}>
                    {cols}
                </Row>
                <Modal

                    visible={visible}
                    onCancel={() => { this.setState({ visible: false }) }}
                >
                    <img src={currentImg} alt="" width='100%' />
                </Modal>
            </div>
        )
    }
}
