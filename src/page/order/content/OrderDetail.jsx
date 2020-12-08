import React, { Component } from 'react'
import Form from 'react-bootstrap/Form'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import styles from './OrderDetail.module.scss'
import OrderService from '../../../service/OrderService'

const _order = new OrderService();

class OrderDetail extends Component {
    state = {
        data: null,
        orderNo: this.props.match.params.orderNo
    }
    componentDidMount() {
        console.log(this.state.orderNo)
        this.loadDetail();
    }
    loadDetail = () => {
        if(this.state.orderNo) {
            const params = {
                orderNo: this.state.orderNo
            }
            _order.getOrderDetail(params).then(res => {
                this.setState({
                    data: res.data.data
                })
            })
        }
    }
    render() {
        console.log('detail')
        if(!this.state.data)    return null;
        const {orderNo, payment, statusDesc, 
            createTime, receiverName, paymentTypeDesc,
             orderItemVoList} = this.state.data
        return (
            <React.Fragment>
                <h1>Order Detail</h1>
                <Form>
                    <Form.Group as={Row} controlId="formPlaintextEmail">
                        <Form.Label column sm="3" className={styles.itemTitle}>Order Number:</Form.Label>
                        <Col sm="7"><Form.Control plaintext readOnly value={orderNo} /></Col>

                        <Form.Label column sm="3" className={styles.itemTitle}>Create Time:</Form.Label>
                        <Col sm="7"><Form.Control plaintext readOnly value={createTime} /></Col>

                        <Form.Label column sm="3" className={styles.itemTitle}>Receiver Name:</Form.Label>
                        <Col sm="7"><Form.Control plaintext readOnly value={receiverName} /></Col>

                        <Form.Label column sm="3" className={styles.itemTitle}>Status:</Form.Label>
                        <Col sm="7"><Form.Control plaintext readOnly value={statusDesc} /></Col>

                        <Form.Label column sm="3" className={styles.itemTitle}>Payment Type:</Form.Label>
                        <Col sm="7"><Form.Control plaintext readOnly value={paymentTypeDesc} /></Col>

                        <Form.Label column sm="3" className={styles.itemTitle}>Payment:</Form.Label>
                        <Col sm="7"><Form.Control plaintext readOnly value={'￥'+payment} /></Col>
                    </Form.Group>
                </Form>
            </React.Fragment>
        )
    }
}

export default OrderDetail;