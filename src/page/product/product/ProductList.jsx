import React, { Component } from 'react'
import Table from 'react-bootstrap/Table';
import styles from './ProductList.module.scss'

import ProductService from '../../../service/ProductService'

const _product = new ProductService();

class ProductList extends Component {
    state = {
        pageNum: 1,
        pageSize: 10,
        productList: []
    }
    componentDidMount() {
        this.loadProductList();
    }
    loadProductList = () => {
        const params = {
            pageNum: this.state.pageNum,
            pageSize: this.state.pageSize
        }
        _product.getProductList(params).then(res => {
            console.log(res)
        })
    }
    render() {
        return (
            <React.Fragment>
                <h1>Product Management</h1>
                <Table striped bordered hover className={styles.table}>
                    <thead>
                        <tr>
                            <th>id</th>
                            <th>Information</th>
                            <th>Price</th>
                            <th>State</th>
                            <th>Operations</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>1</td>
                            <td>Mark</td>
                            <td>Otto</td>
                            <td>@mdo</td>
                            <td>@mdo</td>
                        </tr>
                        <tr>
                            <td>2</td>
                            <td>Jacob</td>
                            <td>Thornton</td>
                            <td>@fat</td>
                            <td>@mdo</td>
                        </tr>
                    </tbody>
                </Table>
            </React.Fragment>
        )
    }
}

export default ProductList;