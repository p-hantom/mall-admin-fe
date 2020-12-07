import React, { Component } from 'react'
import UserService from '../../service/UserService'
import Pagination from '../../UI/pagination/Pagination'
import Table from 'react-bootstrap/Table';

import styles from './UserList.module.scss'

const _user = new UserService();

class UserList extends Component {
    state = {
        userList: [],
        pageNum: 1,
        pageSize: 10,
        total: 0,
    }
    componentDidMount() {
        this.loadUserList();
    }
    loadUserList = () => {
        _user.getUserList({
            pageNum: this.state.pageNum,
            pageSize: this.state.pageSize
        }).then(res => {
            this.setState({
                userList: res.data.data.list,
                total: res.data.data.total
            })
        })
    }
    onPageNumChange = (pageNum) => {
        this.setState({
            pageNum: pageNum
        }, () => {
            this.loadUserList();
        })
    }
    render() {
        const content = this.state.userList.map((item,index) => (
            <tr key={item.id}>
                    <td>{item.id}</td>
                    <td>{item.username}</td>
                    <td>{item.email}</td>
                    <td>{item.phone}</td>
                    <td>{item.createTime}</td>
                </tr>
        ))
        return (
            <React.Fragment>
                <div className={styles.title}>
                    <h1>User Management</h1>
                </div>
                <Table striped bordered hover className={styles.table}>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Username</th>
                            <th>Email</th>
                            <th>Phone Number</th>
                            <th>Register Time</th>
                        </tr>
                    </thead>
                    <tbody>
                        {content}
                    </tbody>
                </Table>
                <Pagination defaultCurrent={1}
                    current={this.state.pageNum}
                    defaultPageSize={10} 
                    total={this.state.total}
                    onChange={(pageNum) => this.onPageNumChange(pageNum)}/>
            </React.Fragment>
        )
    }
}

export default UserList;