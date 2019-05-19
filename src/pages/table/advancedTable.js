import React, { Component } from 'react'
import { Card, Table } from 'antd'
import Axios from './../../axios'

export default class AdvancedTable extends Component {

    state = {
        dataSource2: []
    }

    // 动态获取ajax
    request = () => {
        Axios.ajax({
            url: '/table/list'
        })
            .then(res => {
                res.data.map((item, index) => {
                    item.key = index;
                    return item
                })
                this.setState({
                    dataSource2: res.data
                })

            })
    }


    componentWillMount() {
        this.request()
    }


    render() {


        const columns = [
            {
                title: 'id',
                dataIndex: 'id',
                key: 'id',
                width: 50
            },
            {
                title: '姓名',
                dataIndex: 'name',
                key: 'name',
                width: 50
            }
        ];

        const rowSelection = {
            type: 'checkbox'
        }

        let { dataSource2 } = this.state;

        return (
            <div>
                <Card title='动态渲染表格'>
                    <Table
                        dataSource={dataSource2}
                        columns={columns}
                        bordered
                        pagination={false}
                        scroll={{ y: 260 }}
                    />
                </Card>
            </div>
        )
    }
}
