import React, { Component } from 'react'
import Pagination from '../../../UI/pagination/Pagination'
import Table from 'react-bootstrap/Table';
import { NavLink } from 'react-router-dom'

import styles from './OrderList.module.scss'
import OrderService from '../../../service/OrderService'

const _order = new OrderService();

class OrderList extends Component {
    state = {
        orderList: [],
        pageNum: 1,
        pageSize: 10,
        total: 0,
    }
    componentDidMount() {
        this.loadOrderList();
    }
    loadOrderList = () => {
        _order.getOrderList({
            pageNum: this.state.pageNum,
            pageSize: this.state.pageSize
        }).then(res => {
            this.setState({
                orderList: res.data.data.list,
                total: res.data.data.total
            })
        })
    }
    onPageNumChange = (pageNum) => {
        this.setState({
            pageNum: pageNum
        }, () => {
            this.loadOrderList();
        })
    }
    render() {
        const content = this.state.orderList.map((item,index) => (
            <tr key={item.orderNo}>
                    <td>{item.orderNo}</td>
                    <td>{item.receiverName}</td>
                    <td>{item.statusDesc}</td>
                    <td>￥{item.payment}</td>
                    <td>{item.createTime}</td>
                    <td>
                        <NavLink to={`/order/detail/${item.orderNo}`}>More</NavLink>
                    </td>
                </tr>
        ))
        return (
            <React.Fragment>
                <div className={styles.title}>
                    <h1>Order Management</h1>
                </div>
                <Table striped bordered hover className={styles.table}>
                    <thead>
                        <tr>
                            <th>Order No.</th>
                            <th>Receiver Name</th>
                            <th>Status</th>
                            <th>Total Price</th>
                            <th>Create Time</th>
                            <th>Operations</th>
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

export default OrderList;