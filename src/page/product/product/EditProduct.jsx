import React, { Component } from 'react'
import CateSelector from './CategorySelector'
import Form from 'react-bootstrap/Form'
import InputGroup from 'react-bootstrap/InputGroup'
import FormControl from 'react-bootstrap/FormControl'
import FileUploader from '../../../UI/fileUploader/FileUploader'
import ProductService from '../../../service/ProductService'
import styles from './EditProduct.module.scss'

const _product = new ProductService();

class EditProduct extends Component {
    state = {
        id                  : this.props.match.params.pid,
        name                : '',
        subtitle            : '',
        categoryId          : 0,
        parentCategoryId    : 0,
        subImages           : [],
        price               : '',
        stock               : '',
        detail              : '',
        status              : 1 //商品状态1为在售
    }
    componentDidMount() {
        this.loadProductDetail();
    }
    loadProductDetail = () => {
        const { id } = this.state;
        // id exists -> edit, or it's saving a new product
        if( id ) {
            _product.getProductDetail({productId: id}).then(res => {
                this.setState(res.data.data);
            })
        }
    }
    changeValueHandler = (e, key) => {
        console.log(e.target.value)
        this.setState({[key]: e.target.value})
    }
    onSubmit = () => {
        _product.saveProduct({
            id:this.state.id,
            name:this.state.name,
            subtitle:this.state.subtitle,
            categoryId:this.state.categoryId,
            parentCategoryId:this.state.parentCategoryId,
            subImages:this.state.subImages,
            price:this.state.price,
            stock:this.state.stock,
            detail:this.state.detail,
            status:this.state.status,
        }).then(res => {
            console.log(res)
        })
    }
    render() {
        return (
            <React.Fragment>
                <h1>Edit Product Info</h1>
                <Form.Group controlId="exampleForm.ControlInput1">
                    <Form.Label className={styles.label}>Product Name</Form.Label>
                    <Form.Control value={this.state.name} onChange={e => this.changeValueHandler(e, 'name')} 
                    className="col-md-5"/>

                    <Form.Label className={styles.label}>Product Subtitle</Form.Label>
                    <Form.Control value={this.state.subtitle} onChange={e => this.changeValueHandler(e, 'subtitle')} 
                    className="col-md-5"/>

                    <Form.Label className={styles.label}>Category</Form.Label>
                    <CateSelector firstCateId={this.state.parentCategoryId}
                        secondCateId={this.state.categoryId}/>

                    <Form.Label className={styles.label}>Price</Form.Label>
                    <InputGroup>
                        <FormControl id="inlineFormInputGroup" 
                            value={this.state.price} 
                            onChange={e => this.changeValueHandler(e, 'price')} 
                            className="col-md-3"/>
                        <InputGroup.Append>
                        <InputGroup.Text>元</InputGroup.Text>
                        </InputGroup.Append>
                    </InputGroup>

                    <Form.Label className={styles.label}>Stock</Form.Label>
                    <InputGroup>
                        <FormControl id="inlineFormInputGroup" 
                            value={this.state.stock} 
                            onChange={e => this.changeValueHandler(e, 'stock')} 
                            className="col-md-3"/>
                        <InputGroup.Append>
                        <InputGroup.Text>件</InputGroup.Text>
                        </InputGroup.Append>
                    </InputGroup>
                
                    <FileUploader />
                </Form.Group>
                <button onClick={this.onSubmit}>Submit</button>
            </React.Fragment>
        )
    }
}

export default EditProduct;