import React, { Component } from 'react'
import { Card, Button } from 'antd'
import './ui.less'

export default class Buttons extends Component {

    state = {
        isLoading: true
    }

    cancelLoading = () => {
        this.setState({
            isLoading: false
        })
    }


    render() {

        let { isLoading } = this.state;

        return (
            <div>
                <Card title='基础按钮' className='card-wrap'>
                    <Button type='primary'>Imooc</Button>
                    <Button >Imooc</Button>
                    <Button type='dashed'>Imooc</Button>
                    <Button type='danger'>Imooc</Button>
                    <Button disabled>Imooc</Button>
                </Card>
                <Card title='图形按钮' className='card-wrap'>
                    <Button icon='plus'>创建</Button>
                    <Button icon='edit'>编辑</Button>
                    <Button icon='delete'>删除</Button>
                    <Button shape='circle' icon='search'></Button>
                    <Button type='primary' icon='search'>搜索</Button>
                    <Button type='primary' icon='download'>下载</Button>
                </Card>
                <Card title='loading按钮' className='card-wrap'>
                    <Button type='primary' loading={isLoading}>确定</Button>
                    <Button type='primary' loading={isLoading}>确定</Button>
                    <Button type='primary' loading={isLoading}>确定</Button>
                    <Button type='primary' onClick={this.cancelLoading}>关闭</Button>
                </Card>
                <Card title='按钮组'>
                    <Button.Group>
                        <Button icon='left' type='primary'>返回</Button>
                        <Button icon='right' type='primary'>前进</Button>
                    </Button.Group>
                </Card>

            </div>
        )
    }
}
