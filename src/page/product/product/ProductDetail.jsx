import React, { Component } from 'react'
import Form from 'react-bootstrap/Form'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import ProductService from '../../../service/ProductService'
import styles from './ProductDetail.module.scss'
import { Breadcrumb, Table } from 'react-bootstrap'
import { Link } from "react-router-dom";
const _product = new ProductService();

class ProductDetail extends Component {
    state = {
        data: null,
        id: this.props.match.params.pid
    }
    componentDidMount() {
        this.loadDetail();
    }
    loadDetail = () => {
        if(this.state.id) {
            const params = {
                productId: this.state.id
            }
            _product.getProductDetail(params).then(res => {
                this.setState({
                    data: res.data.data
                })
            })
        }
    }
    getImgDiv = () => {
        if(!this.state.data)    return null;
        const {mainImage, imageHost} = this.state.data;
        if(!mainImage){
            return (
                <div>No Image.</div>
            );
        }   

        return (
            <div className={styles.imgCon}>
                <img alt="" className={styles.img} src={imageHost+mainImage} />
            </div>
        )
    }
    render() {
        if(!this.state.data)    return null;
        const {name, price, status, stock, subtitle, categoryId} = this.state.data
        return (
            <React.Fragment>
                <Breadcrumb>
                    <Breadcrumb.Item linkProps={{ to: '/product' }} linkAs={Link}>Product List</Breadcrumb.Item>
                    <Breadcrumb.Item active>Product Detail</Breadcrumb.Item>
                </Breadcrumb>
                <h1>Product Detail</h1>
                <Table striped bordered hover className={styles.table}>
                    <tbody>
                        <tr>
                            <td>Name</td>
                            <td>{name}</td>
                        </tr>
                        <tr>
                            <td>Description</td>
                            <td>{subtitle}</td>
                        </tr>
                        <tr>
                            <td>Stock</td>
                            <td>{stock}</td>
                        </tr>
                        <tr>
                            <td>Current Status</td>
                            <td>{status==1 ? '在售' : '已下架'}</td>
                        </tr>
                        <tr>
                            <td>Category</td>
                            <td>{categoryId}</td>
                        </tr>
                        <tr>
                            <td>Price</td>
                            <td>{'￥'+price}</td>
                        </tr>
                        <tr>
                            <td>Main Image</td>
                            <td>{this.getImgDiv()}</td>
                        </tr>
                    </tbody>
                </Table>
            </React.Fragment>
        )
    }
}

export default ProductDetail;