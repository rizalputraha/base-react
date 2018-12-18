import React, { Component } from 'react'
import { Menu, Icon } from 'antd';
import { Link } from 'react-router-dom';
import { matchPath } from 'react-router-dom';

export default class SidebarMenu extends Component {
    render() {

        const dataMenu = [
            {
                "key": ["tables"],
                "title": "Tables",
                "Routename": "tables",
                "icon": "table",
            },
            {
                "key": ["card"],
                "title": "Card",
                "Routename": "card",
                "icon": "appstore",
            },
            {
                "key": ["example"],
                "title": "Example 3",
                "Routename": "example",
                "icon": "upload",
            },
            {
                "key": ["test"],
                "title": "Example 4",
                "Routename": "test",
                "icon": "user",
            }
        ];

        const match = dataMenu.map((data) => {
            matchPath(this.props.url.pathname + '/' + data.Routename);
        })

        console.log(this.props.url.path);

        if (match) {
            dataMenu.map(res => {
                return (
                    <Menu theme="dark" mode="inline" selectedKeys={[res.key]} >
                        {
                            dataMenu.map((data) => {
                                return (
                                    <Menu.Item key={data.key}>
                                        <Link to={`${this.props.url.url}/${data.Routename}`} className="link" />
                                        <Icon type={data.icon} />
                                        <span className="nav-text">{data.title}</span>
                                    </Menu.Item>
                                );
                            })
                        }
                    </Menu>
                );
            })
        }

        return (
            <div>
                <Menu theme="dark" mode="inline" defaultSelectedKeys={["tables"]}>
                    {
                        dataMenu.map((data) => {
                            return (
                                <Menu.Item key={data.key}>
                                    <Link to={`${this.props.url.url}/${data.Routename}`} className="link" />
                                    <Icon type={data.icon} />
                                    <span className="nav-text">{data.title}</span>
                                </Menu.Item>
                            );
                        })
                    }
                </Menu>
            </div >
        )
    }
}
