import React, { Component } from 'react'
import { Card, Table, Modal } from 'antd'
import Axios from './../../axios'
import Utils from './../../utils'

const { pagination } = Utils;

export default class BasicTable extends Component {

    state = {
        dataSource2: [],
        pagination: {}
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
                    dataSource2: res.data,
                    pagination: pagination(res, current => {
                    })

                })

            })
    }


    componentWillMount() {
        this.request()
    }

    onRowClick = (record, index) => {
        let selectKey = [index];
        Modal.info({
            title: '信息',
            content: `用户名：${record.name}`
        })
        this.setState({
            selectedRowKeys: selectKey,
            selectedItem: record
        })
    }

    render() {

        const dataSource = [
            {
                key: '1',
                name: '胡彦斌',
                age: 32,
                address: '西湖区湖底公园1号',
            },
            {
                key: '2',
                name: '胡彦祖',
                age: 42,
                address: '西湖区湖底公园1号',
            },
        ];

        const columns = [
            {
                title: 'id',
                dataIndex: 'id',
                key: 'id',
            },
            {
                title: '姓名',
                dataIndex: 'name',
                key: 'name',
            }
        ];

        const rowSelection = {
            type: 'checkbox'
        }

        let { dataSource2, pagination } = this.state;

        return (
            <div>
                <Card title='基础表格'>
                    <Table
                        dataSource={dataSource}
                        columns={columns}
                        bordered
                        pagination={false} //分页
                    />
                </Card>
                <Card title='动态渲染表格'>
                    <Table
                        dataSource={dataSource2}
                        columns={columns}
                        bordered
                        rowSelection={rowSelection}
                        onRow={(record, index) => {
                            return {
                                onClick: () => {
                                    this.onRowClick(record, index);
                                }
                            };
                        }}
                        pagination={pagination}
                    />
                </Card>
            </div>
        )
    }
}
