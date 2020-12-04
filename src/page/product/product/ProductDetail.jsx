import React, { Component } from 'react'
import Form from 'react-bootstrap/Form'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import ProductService from '../../../service/ProductService'
import styles from './ProductDetail.module.scss'
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
    render() {
        if(!this.state.data)    return null;
        const {name, price, status, stock, subtitle, detail, categoryId} = this.state.data
        return (
            <React.Fragment>
                <h1>Product Detail</h1>
                <Form>
                    <Form.Group as={Row} controlId="formPlaintextEmail">
                        <Form.Label column sm="3" className={styles.itemTitle}>Name</Form.Label>
                        <Col sm="7"><Form.Control plaintext readOnly value={name} /></Col>

                        <Form.Label column sm="3" className={styles.itemTitle}>Description</Form.Label>
                        <Col sm="7"><Form.Control plaintext readOnly value={subtitle} /></Col>

                        <Form.Label column sm="3" className={styles.itemTitle}>Current Status</Form.Label>
                        <Col sm="7"><Form.Control plaintext readOnly value={status==1 ? '在售' : '已下架'} /></Col>

                        <Form.Label column sm="3" className={styles.itemTitle}>Category</Form.Label>
                        <Col sm="7"><Form.Control plaintext readOnly value={categoryId} /></Col>

                        <Form.Label column sm="3" className={styles.itemTitle}>Price</Form.Label>
                        <Col sm="7"><Form.Control plaintext readOnly value={name} /></Col>
                    </Form.Group>
                </Form>
            </React.Fragment>
        )
    }
}

export default ProductDetail;