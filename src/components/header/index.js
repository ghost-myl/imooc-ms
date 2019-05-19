import React, { Component } from 'react'
import { Row, Col } from 'antd'
import Utils from './../../utils'
import Axios from './../../axios'
import './index.less'

export default class Header extends Component {

    // state = {}  
    //初始化state 但会不显示时间一秒 所以先手动调用showTime
    componentWillMount() {
        // 1. 每秒获取时间
        const showTime = () => {
            let sysTime = Utils.formateDate(new Date().getTime());
            this.setState({
                sysTime
            });

        }
        setInterval(showTime, 1000)
        showTime();

        // 2. 获取当天天气
        this.getWeatherAPIData();
    }


    getWeatherAPIData() {
        let city = '秦皇岛';
        Axios.jsonp({
            url: 'http://api.map.baidu.com/telematics/v3/weather?location=' + encodeURIComponent(city) + '&output=json&ak=3p49MVra6urFRGOT9s8UBWr2'
        })
            .then(res => {
                if (res.status === 'success') {
                    let data = res.results[0].weather_data[0];
                    this.setState({
                        dayPictureUrl: data.dayPictureUrl,
                        weather: data.weather
                    })
                }
            })
    }

    render() {

        let { sysTime, dayPictureUrl, weather } = this.state;

        return (
            <div className='header'>
                <Row className='header-top'>
                    <Col span={6} className="logo">
                        <img src="/assets/logo-ant.svg" alt="" />
                        <span>IMooc 通用管理系统</span>
                    </Col>
                    {/* <Col span={menuType ? 18 : 24}> */}
                    <Col span={18}>
                        <span>欢迎，</span>

                        {/* <span>欢迎，{this.state.userName}</span> */}
                        <span>退出</span>
                    </Col>
                </Row>
                {/* {
                    menuType ? '' : */}
                <Row className="breadcrumb">
                    <Col span={4} className="breadcrumb-title">
                        {/* {menuName || '首页'} */}
                        首页
                    </Col>
                    <Col span={20} className="weather">
                        <span className="date">{sysTime}</span>
                        <span className="weather-img">
                            <img src={dayPictureUrl} alt="" />
                        </span>
                        <span className="weather-detail">
                            {weather}
                        </span>
                    </Col>
                </Row>
                {/* } */}
            </div>

        )
    }
}
