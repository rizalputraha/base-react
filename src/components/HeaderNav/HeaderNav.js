import React, { Component } from 'react';
import { Avatar } from 'antd';

export default class HeaderNav extends Component {
    constructor() {
        super();
        this.state = {
            collapsed: false
        }
    }

    render() {
        return (
            <div className="header">
                <Avatar size={64} src={this.props.avatar} />
                <div className="name">{(this.props.collapsed == true) ? this.props.firstname : this.props.fullname}</div>
                <img style={{ margin: 10 }} width={50} src={this.props.logo} />
            </div>
        );
    }
}
