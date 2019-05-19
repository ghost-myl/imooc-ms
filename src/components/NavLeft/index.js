import React, { Component } from 'react'
import { Menu } from 'antd';
import MenuConfig from './../../config/menuConfig'
import './index.less'
import { NavLink } from 'react-router-dom'

const SubMenu = Menu.SubMenu;

export default class NavLeft extends Component {


    componentWillMount() {
        const menuTreeNode = this.renderMenu(MenuConfig)
        this.setState({ menuTreeNode })
    }


    // 渲染菜单
    renderMenu = (data) => {
        return data.map(item => {
            // 子菜单
            if (item.children) {
                return (
                    <SubMenu key={item.key} title={item.title} >
                        {this.renderMenu(item.children)}
                        {/* 递归调用 最终为<Menu.Item>s */}
                    </SubMenu>
                )
            }

            // 菜单项
            return (<Menu.Item key={item.key} title={item.title}>
                <NavLink to={item.key}>{item.title}</NavLink>
            </Menu.Item>)

        })
    }

    render() {
        let { menuTreeNode } = this.state;

        return (
            <div>
                <div className='logo'>
                    <img src="/assets/logo-ant.svg" alt="" />
                    <h1>Imooc MS</h1>
                </div>

                <Menu theme='dark'>
                    {menuTreeNode}
                </Menu>
            </div>
        )
    }
}
