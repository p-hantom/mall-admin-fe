import React, { Component } from 'react'
import Form from 'react-bootstrap/Form'
import CategoryService from '../../../service/CategoryService'
import styles from './CategorySelector.module.scss'
const _category = new CategoryService();

class CategorySelector extends Component {
    state = {
        firstCategoryList   : [],
        firstCategoryId     : 0,
        secondCategoryList  : [],
        secondCategoryId    : 0
    }
    componentDidMount() {
        this.loadFirstCategory();

        // If the product has first cate id, load second cate id and show both of them as default values
        const {firstCateId} = this.props;
        if(firstCateId) {
            this.loadSecondCategory(firstCateId)
        }
    }
    loadFirstCategory = () => {
        _category.getCategory().then(res => {
            this.setState({
                firstCategoryList: res.data.data
            })
        })
    }
    loadSecondCategory = (firstCategoryId) => {
        _category.getCategory({categoryId: firstCategoryId})
            .then(res => {
                this.setState({
                    secondCategoryList: res.data.data
                })
            })
    }
    selectFirstCate = (firstId) => {
        this.setState({
            firstCategoryId: firstId,
            secondCategoryId: 0,
            secondCategoryList: []
        }, () => {
            this.loadSecondCategory(firstId)
        })
    }
    selectSecondCate = (secondId) => {
        this.setState({
            secondCategoryId: secondId
        })
    }
    render() {
        const {firstCategoryList, secondCategoryList} = this.state;
        const FirstCateList = firstCategoryList.map((item,index) => (
            <option key={index} value={item.id} selected={this.props.firstCateId==item.id}>
                {item.name}
            </option>
        ))
        
        const SecondCateList = secondCategoryList.map((item,index) => (
            <option key={index} value={item.id} selected={this.props.secondCateId==item.id}>
                {item.name}
            </option>
        ))
        return (
            <Form.Group controlId="exampleForm.SelectCustom">
                <Form.Control onClick={e => this.selectFirstCate(e.target.value)}
                    disabled={this.props.readonly ? true : false}
                    as="select" custom
                    className={["col-md-5", styles.firstCate].join(' ')}
                    >
                    <option value="">Please select first category.</option>
                    {FirstCateList}
                </Form.Control>
                {
                secondCategoryList.length>0 && (
                <Form.Control onClick={e => this.selectSecondCate(e.target.value)}
                    disabled={this.props.readonly ? true : false}
                    as="select" custom
                    className="col-md-5">
                        <option value="">Please select second category.</option>
                        {SecondCateList}
                </Form.Control>)
                }
            </Form.Group>
        )
    }
}

export default CategorySelector;