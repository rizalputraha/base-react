import React, { Component } from 'react'
import { Table, Button, Icon } from 'antd';

export default class Tables extends Component {
    render() {
        const columns = [
            {
                title: 'Full Name',
                dataIndex: 'name',
                key: 'name',
            },
            {
                title: 'Column 1',
                dataIndex: 'address',
                key: '1'
            },
            {
                title: 'Column 2',
                dataIndex: 'address',
                key: '2'
            },
            {
                title: 'Column 3',
                dataIndex: 'address',
                key: '3'
            },
            {
                title: 'Action',
                key: 'operation',
                render: () => <div>
                    <Button>
                        <Icon type="edit" />
                        Edit
                    </Button>
                    <Button type="danger">
                        <Icon type="delete" />
                        Delete
                    </Button>
                </div>,
            }];

        const data = [{
            key: '1',
            name: 'John Brown',
            age: 32,
            address: 'New York Park',
        }, {
            key: '2',
            name: 'Jim Green',
            age: 40,
            address: 'London Park',
        }]

        return (
            <div>
                <Button onClick={this.handleAdd} type="primary" style={{ marginBottom: 16 }}>
                    <Icon type="plus" />
                    Add a row
                </Button>
                <Table bordered columns={columns} dataSource={data} />
            </div>
        )
    }
}
