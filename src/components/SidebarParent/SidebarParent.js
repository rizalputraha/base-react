import React, { Component } from 'react'

import { Layout } from 'antd';

import HeaderNav from '../HeaderNav/HeaderNav';
import SidebarMenu from '../SidebarMenu/SidebarMenu';

export default class SidebarParent extends Component {
    constructor() {
        super();
        this.state = {
            collapsed: false
        }
    }

    render() {
        const avatar = "https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png";
        const firstname = "Rizal";
        const fullname = "Rizal Putra H";
        const logo = "https://logo.clearbit.com/amazon.com";

        const { Sider } = Layout;

        return (
            <Sider
                breakpoint="lg"
                trigger={null}
                collapsible
                collapsed={this.props.collapsed}
            >
                <HeaderNav
                    avatar={avatar}
                    firstname={firstname}
                    fullname={fullname}
                    logo={logo}
                    collapsed={this.props.collapsed}
                />
                <SidebarMenu
                    url={this.props.routeUrl}
                />
            </Sider>
        )
    }
}
