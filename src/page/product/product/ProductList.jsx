import React, { Component } from 'react'
import Table from 'react-bootstrap/Table';
import { NavLink } from 'react-router-dom'
import Pagination from '../../../UI/pagination/Pagination'
import Button from 'react-bootstrap/Button'
import styles from './ProductList.module.scss'

import ProductService from '../../../service/ProductService'

const _product = new ProductService();

class ProductList extends Component {
    state = {
        pageNum: 1,
        pageSize: 10,
        total: 0,
        productList: []
    }
    componentDidMount() {
        this.loadProductList();
    }
    loadProductList = () => {
        const params = {
            pageNum: this.state.pageNum-1,
            pageSize: this.state.pageSize,
        }
        _product.getProductList(params).then(res => {
            this.setState({
                productList: res.data.data.list,
                total: res.data.data.total
            })
        })
    }
    onPageNumChange = (pageNum) => {
        this.setState({
            pageNum: pageNum
        }, () => {
            this.loadProductList();
        })
    }
    setSaleStatus = (status, productId) => {
        _product.setSaleStatus({
            productId: productId,
            status: status
        }).then(() => {
            this.loadProductList();
        })
    }
    getSaleStatus = (status, productId) => {
        if(status===1) {
            return (
                <span>
                    在售
                    <Button className={styles.changeStatusBtn} variant='warning' onClick={() => this.setSaleStatus(0, productId)}>下架</Button>
                </span>
            )
        } else {
            return (
                <span>
                    已下架
                    <Button className={styles.changeStatusBtn} variant='warning' onClick={() => this.setSaleStatus(1, productId)}>在售</Button>
                </span>
            )
        }
    }
    render() {
        const content = this.state.productList.map(item => {
            return (
                <tr key={item.id}>
                    <td>{item.id}</td>
                    <td>
                        <div>{item.name}</div>
                        <div>{item.subtitle}</div>
                    </td>
                    <td>{item.price}</td>
                    {/* <td>{item.status==1 ? '在售' : '已下架'}</td> */}
                    <td>{this.getSaleStatus(item.status, item.id)}</td>
                    <td>
                        <NavLink to={`/product/detail/${item.id}`}>More</NavLink> {'   '}
                        <NavLink to={`/product/edit/${item.id}`}>Edit</NavLink>
                    </td>
                </tr>
            )
        })
        return (
            <React.Fragment>
                <div className={styles.titleDiv}>
                    <h1 className={styles.title}>Product Management</h1>
                    <Button className={styles.addProductBtn} variant='primary'>Add</Button>
                </div>
                
                <Table striped bordered hover className={styles.table}>
                    <thead>
                        <tr>
                            <th>id</th>
                            <th>Information</th>
                            <th>Price</th>
                            <th>Status</th>
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

export default ProductList;