import React, { Component } from 'react'
import { Card, Form, Input, InputNumber, Button, message, Icon, Checkbox, Switch, Select, DatePicker, TimePicker, Upload, Radio } from 'antd'
import moment from 'moment'


const FormItem = Form.Item;
const RadioGroup = Radio.Group;
const Option = Select.Option;
const TextArea = Input.TextArea;


class Register extends Component {

    state = {
        loading: false,
    };

    handleChange = info => {
        if (info.file.status === 'uploading') {
            this.setState({ loading: true });
            return;
        }
        if (info.file.status === 'done') {
            // Get this url from response in real world.
            this.getBase64(info.file.originFileObj, imageUrl =>
                this.setState({
                    imageUrl,
                    loading: false,
                }),
            );
        }
    };


    getBase64 = (img, callback) => {
        const reader = new FileReader();
        reader.addEventListener('load', () => callback(reader.result));
        reader.readAsDataURL(img);
    }

    beforeUpload = (file) => {
        // const isJPG = file.type === 'image/jpeg';
        // if (!isJPG) {
        //     message.error('You can only upload JPG file!');
        // }
        const isLt2M = file.size / 1024 / 1024 < 2;
        if (!isLt2M) {
            message.error('Image must smaller than 2MB!');
        }
        return isLt2M;
    }

    handleSubmit = () => {
        // 将表单信息拼凑成对象
        let userInfo = this.props.form.getFieldsValue()
        message.success(`${userInfo.userName}，恭喜你注册成功`)
    }

    render() {
        const uploadButton = (
            <div>
                <Icon type={this.state.loading ? 'loading' : 'plus'} />
                <div className="ant-upload-text">Upload</div>
            </div>
        );
        const imageUrl = this.state.imageUrl;
        const { beforeUpload, handleChange, handleSubmit } = this;

        const { getFieldDecorator } = this.props.form;

        const formItemLayout = {
            // Form或FormItem属性
            labelCol: {
                xs: 24, //xs: {span: 24}的简写
                sm: 4,
            },
            wrapperCol: {
                xs: 24,
                sm: 12
            }
        }

        // 协议的偏移布局
        const offsetLayout = {
            wrapperCol: {
                xs: 24,
                sm: {
                    span: 12,
                    offset: 4 //左侧标题占的空间
                }
            }
        }

        return (
            <div>
                <Card title='注册表单'>
                    <Form layout='horizontal'  {...formItemLayout}>
                        <FormItem label='用户名'  >
                            {
                                getFieldDecorator('userName', {
                                    initialValue: '',
                                    rules: [
                                        {
                                            required: true,
                                            message: '用户名不能为空'
                                        }
                                    ],

                                })(
                                    <Input placeholder='请输入用户名' />
                                )
                            }
                        </FormItem>
                        <FormItem label='密码'  >
                            {
                                getFieldDecorator('userPwd', {
                                    initialValue: '',
                                    rules: [
                                        {
                                            required: true,
                                            message: '密码不能为空'
                                        }
                                    ],

                                })(
                                    <Input placeholder='请输入密码' />
                                )
                            }
                        </FormItem>
                        <FormItem label='性别'>
                            {
                                getFieldDecorator('userGender', {
                                    initialValue: 1,
                                    rules: [
                                        {
                                            required: true,
                                            message: '请选择性别'
                                        }
                                    ],

                                })(
                                    <RadioGroup>
                                        <Radio value='1'>男</Radio>
                                        <Radio value='0'>女</Radio>
                                    </RadioGroup>

                                )
                            }
                        </FormItem>
                        <FormItem label='年龄'  >
                            {
                                getFieldDecorator('userAge', {
                                    initialValue: 20
                                })(
                                    <InputNumber />
                                )
                            }
                        </FormItem>
                        <FormItem label='当前状态'  >
                            {
                                getFieldDecorator('userState', {
                                    initialValue: ['2', '5']
                                })(
                                    <Select mode='multiple'>
                                        <Option value='1'>AAAAA</Option>
                                        <Option value='2'>BBBBB</Option>
                                        <Option value='3'>CCCCC</Option>
                                        <Option value='4'>DDDDD</Option>
                                        <Option value='5'>EEEEE</Option>
                                    </Select>
                                )
                            }
                        </FormItem>
                        <FormItem label='是否已婚'  >
                            {
                                getFieldDecorator('isMarried', {
                                    valuePropName: 'checked',
                                    initialValue: true
                                })(
                                    <Switch />
                                )
                            }
                        </FormItem>
                        <FormItem label='生日'  >
                            {
                                getFieldDecorator('birthDate', {
                                    initialValue: moment('2018-08-12')
                                })(
                                    <DatePicker />
                                )
                            }
                        </FormItem>
                        <FormItem label='地址'  >
                            {
                                getFieldDecorator('address', {
                                    initialValue: '秦皇岛市海港区新天地A座'
                                })(
                                    <TextArea
                                        autosize={{
                                            minRows: 3,
                                            maxRows: 5
                                        }}
                                    />
                                )
                            }
                        </FormItem>
                        <FormItem label='时间'  >
                            {
                                getFieldDecorator('time', {
                                })(
                                    <TimePicker />
                                )
                            }
                        </FormItem>
                        <FormItem label='头像'  >
                            {
                                getFieldDecorator('avatar', {
                                })(
                                    <Upload
                                        name="avatar"
                                        listType="picture-card"
                                        className="avatar-uploader"
                                        showUploadList={false}
                                        action="https://www.mocky.io/v2/5cc8019d300000980a055e76" //上传的接口
                                        beforeUpload={beforeUpload}
                                        onChange={handleChange}
                                    >
                                        {imageUrl ? <img src={imageUrl} alt="avatar" /> : uploadButton}
                                    </Upload>
                                )
                            }
                        </FormItem>
                        <FormItem {...offsetLayout}>
                            {
                                getFieldDecorator('contract', {})(
                                    <Checkbox>我已阅读过<button>协议</button></Checkbox>
                                )
                            }
                        </FormItem>
                        <FormItem {...offsetLayout}>
                            {
                                getFieldDecorator('register')(
                                    <Button
                                        type='primary'
                                        onClick={handleSubmit}
                                    >注册</Button>
                                )
                            }
                        </FormItem>
                    </Form>
                </Card>
            </div>
        )
    }
}

export default Form.create()(Register)
