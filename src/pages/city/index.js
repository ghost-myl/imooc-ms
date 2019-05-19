import React, { Component } from 'react'
import Axios from './../../axios'
import Utils from './../../utils'
import { Form, Card, Select } from 'antd'

const FormItem = Form.Item;
const Option = Select.Option;

export default class City extends Component {
    render() {
        return (
            <Card>
                <FilterItem />
            </Card>
        )
    }
}

class FilterItem extends Component {
    render() {

        const { getFieldDecorator } = this.props.form;

        return (
            <Form layout='inline'>
                <FormItem label="城市">
                    {
                        getFieldDecorator('city_id')(
                            <Select
                                style={{ width: 100 }}
                                placeholder='请选择'
                            >
                                <Option value='bj'>北京</Option>
                                <Option value='sh'>上海</Option>
                                <Option value='sz'>深圳</Option>
                            </Select>
                        )
                    }
                </FormItem>
            </Form>
        )
    }
}

FilterItem = Form.create({})(FilterItem)