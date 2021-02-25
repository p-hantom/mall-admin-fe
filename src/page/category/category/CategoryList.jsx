import React, {Component} from 'react'
import Category from '../../../service/CategoryService'
import Table from 'react-bootstrap/Table';
import Pagination from '../../../UI/pagination/Pagination'
import Button from 'react-bootstrap/Button'

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
    render() {
        const content = this.state.cateList.map(item => {
            return (
                <tr key={item.id}>
                    <td>{item.id}</td>
                    <td>{item.name}</td>
                    <td>
                        <Button className={styles.editBtn} variant="warning">Edit Name</Button>
                    </td>
                </tr>
            )
        })
        return (
            <React.Fragment>
                <h1>Category Management</h1>
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