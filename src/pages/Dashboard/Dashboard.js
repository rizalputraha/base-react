import React, { Component } from 'react'
import { Avatar, Layout, Menu, Icon, Breadcrumb, Dropdown, Button, message } from 'antd';
import { Link, Route } from 'react-router-dom';

//Pages
import Tables from '../Tables/Tables';
import Card from '../Card/CardPages';
import Test from '../Test/Test';

//Local Components 
import HeaderNav from '../../components/HeaderNav/HeaderNav';
import SidebarMenu from '../../components/SidebarMenu/SidebarMenu';
import SidebarParent from '../../components/SidebarParent/SidebarParent';

import './Dashboard.css';
import CardPages from '../Card/CardPages';

export default class Dashboard extends Component {

    state = {
        collapsed: false,
    };

    toggle = () => {
        this.setState({
            collapsed: !this.state.collapsed,
        });
    }

    render() {

        const {
            Header, Content, Footer,
        } = Layout;

        function handleButtonClick(e) {
            console.log('clickLeftButton');
        }

        function handleMenuClick(e) {
            message.info('Click on menu item.');
            console.log('click', e);
        }

        const menu = (
            <Menu onClick={handleMenuClick}>
                <Menu.Item key="1"><Icon type="bell" />Notifications</Menu.Item>
                <Menu.Item key="2"><Icon type="setting" />Settings</Menu.Item>
                <Menu.Item key="3"><Icon type="logout" />Log Out</Menu.Item>
            </Menu>
        );

        const firstname = 'Rizal';

        return (
            <div>
                <Layout>
                    <SidebarParent
                        className="sidebar-main"
                        routeUrl={this.props.match}
                        collapsed={this.state.collapsed}
                    />
                    <Layout>
                        <Header className="header-menu" style={{ background: '#fff', padding: 0 }} >
                            <Icon
                                size="large"
                                className="trigger"
                                type={this.state.collapsed ? 'menu-unfold' : 'menu-fold'}
                                onClick={this.toggle}
                            />
                            <div className="container-dropdown">
                                <Dropdown overlay={menu}>
                                    <Button size="large" className="dropdown-button">
                                        <div className="dd-user-detail">
                                            <div className="dd-user-avatar">
                                                <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
                                            </div>
                                            <div className="dd-username">
                                                {firstname}
                                            </div>
                                        </div>
                                        <Icon style={{ paddingTop: 13 }} type="down" />
                                    </Button>
                                </Dropdown>
                            </div>

                        </Header>
                        <Content style={{ padding: '0 50px', }}>
                            <Breadcrumb className="breadcumb" style={{ margin: '16px 0' }}>
                                <Breadcrumb.Item>Home</Breadcrumb.Item>
                                <Breadcrumb.Item>List</Breadcrumb.Item>
                                <Breadcrumb.Item>App</Breadcrumb.Item>
                            </Breadcrumb>
                            <div style={{ padding: 24, background: '#fff', minHeight: 550 }}>
                                <Route path={`${this.props.match.path}/tables`} component={Tables} />
                                <Route path={`${this.props.match.path}/card`} component={CardPages} />
                                <Route path={`${this.props.match.path}/test`} component={Test} />
                            </div>
                        </Content>
                        <Footer style={{ textAlign: 'center' }}>
                            Ant Design ©2018 Created by Ant UED
                        </Footer>
                    </Layout>
                </Layout>
            </div>
        )
    }
}
