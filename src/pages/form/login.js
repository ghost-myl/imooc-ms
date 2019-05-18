import React, { Component } from 'react'
import { Card, Form, Input, Button, message, Icon, Checkbox } from 'antd'

const FormItem = Form.Item;

class FormLogin extends Component {

    handleSubmit = () => {
        let userInfo = this.props.form.getFieldsValue();
        this.props.form.validateFields((err, values) => {
            if (!err) {
                message.success(`${userInfo.userName}，恭喜你，登陆成功。`)
            }
        });
    }

    render() {
        let { handleSubmit } = this;
        const { getFieldDecorator } = this.props.form;

        return (
            <div>
                <Card title='登录行内表单'>
                    <Form layout='inline'>
                        <FormItem>
                            <Input placeholder='请输入用户名' />
                        </FormItem>
                        <FormItem>
                            <Input placeholder='请输入密码' />
                        </FormItem>
                        <FormItem>
                            <Button>登录</Button>
                        </FormItem>
                    </Form>
                </Card>
                <Card title='登录水平表单'>
                    <Form>
                        <FormItem>
                            {
                                getFieldDecorator('userName', {
                                    initialValue: '',
                                    rules: [
                                        {
                                            required: true,
                                            message: '用户名不能为空',
                                        },
                                        {
                                            pattern: /^\w+$/g,
                                            message: '用户名必须为字母或数字'
                                        }
                                    ]
                                })(<Input prefix={< Icon type='user' ></Icon>} placeholder='请输入用户名' />)
                            }
                        </FormItem>
                        <FormItem>
                            {
                                getFieldDecorator('userPwd', {
                                    initialValue: '',
                                    rules: [
                                        {
                                            required: true,
                                            max: 12,
                                            message: '密码长度不在范围内'
                                        }
                                    ]
                                })(<Input prefix={<Icon type='lock'></Icon>} placeholder='请输入密码' />)
                            }
                        </FormItem>
                        <FormItem>
                            {
                                getFieldDecorator('remember', {
                                    valuePropName: 'checked',
                                    initialValue: true
                                })(<Checkbox>记住密码</Checkbox>)
                            }
                            <a href="#" >忘记密码</a>
                        </FormItem>
                        <FormItem>
                            <Button onClick={handleSubmit}>登录</Button>
                        </FormItem>
                    </Form>
                </Card>
            </div>
        )
    }
}
export default Form.create()(FormLogin)