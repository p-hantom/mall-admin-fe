import React, {Component} from 'react'
import Category from '../../../service/CategoryService'
import Table from 'react-bootstrap/Table';
import Pagination from '../../../UI/pagination/Pagination'
import Button from 'react-bootstrap/Button'
import EditNameModal from './EditNameModal'

import styles from './CategoryList.module.scss'

const _category = new Category();

class CategoryList extends Component {
    state = {
        pageNum: 1,
        pageSize: 10,
        total: 0,
        cateList: []
    }
    componentDidMount() {
        this.loadCategoryList();
    }
    loadCategoryList = () => {
        _category.getCategoryList().then(res => {
            console.log(res.data.data)
            this.setState({
                cateList: res.data.data
            })
        })
    }
    onPageNumChange = (pageNum) => {
        this.setState({
            pageNum: pageNum
        }, () => {
            this.loadCategoryList();
        })
    }
    openEditNameModalHandler = (id, name) => {
        this.setState({
            editId: id,
            editName: name,
            modalShow: true
        })
    }
    hideModalHandler = () => {
        this.setState({modalShow: false});
    }
    confirmEdit = () => {
        _category.setCategoryName({
            categoryId: this.state.editId,
            categoryName: this.state.editName
        }).then(() => {
            this.loadCategoryList();
            this.hideModalHandler();
        })
    }
    changeNameHander = e => {
        this.setState({
            editName: e.target.value
        })
    }
    render() {
        const content = this.state.cateList.map(item => {
            return (
                <tr key={item.id}>
                    <td>{item.id}</td>
                    <td>{item.name}</td>
                    <td>
                        <Button onClick={() => this.openEditNameModalHandler(item.id, item.name) }
                            className={styles.editBtn} variant="warning">
                            Edit Name</Button>
                    </td>
                </tr>
            )
        })
        return (
            <React.Fragment>
                <h1>Category Management</h1>
                <EditNameModal 
                    prevName={this.state.editName}
                    id={this.state.editId}
                    show={this.state.modalShow}
                    onHide={this.hideModalHandler}
                    confirmEdit={this.confirmEdit}
                    inputValue={this.state.editName}
                    changeValueHandler={this.changeNameHander}
                />
                <Table striped bordered hover className={styles.table}>
                    <thead>
                        <tr>
                            <th>id</th>
                            <th>Name</th>
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

export default CategoryList;