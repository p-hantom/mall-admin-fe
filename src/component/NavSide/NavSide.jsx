import React from 'react'
import Nav from 'react-bootstrap/Nav';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faList, faCheckSquare, faUser, faChartBar, faAngleDown } from "@fortawesome/free-solid-svg-icons";
import Util from '../../util/Util'
import { Link, NavLink } from 'react-router-dom';


import styles from './NavSide.module.scss'

const _util = new Util();

const content = [
    {
        title: true,
        text: 'Home',
        selectedKey: 'home',
        linkTo: '/',
        fa: faChartBar
    },{
        title: true,
        text: 'Product',
        selectedKey: 'product',
        linkTo: '/product',
        fa: faList
    },{
        title: false,
        text: 'Product Management',
        selectedKey: 'product',
        linkTo: '/product'
    },{
        title: false,
        text: 'Category Management',
        selectedKey: 'category',
        linkTo: '/category'
    },{
        title: true,
        text: 'Order',
        selectedKey: 'order',
        linkTo: '/order',
        fa: faCheckSquare
    },{
        title: false,
        text: 'Order Management',
        selectedKey: 'order',
        linkTo: '/order'
    },{
        title: true,
        text: 'User',
        selectedKey: 'user',
        linkTo: '/user',
        fa: faUser
    },{
        title: false,
        text: 'User List',
        selectedKey: 'user',
        linkTo: '/user'
    }
]

class NavSide extends React.Component {
    state = {
        selected: 'home'
    }
    // When selecting an item in nav, change its bg color
    selectHandler = (name) => {
        console.log(name)
        this.setState({
            selected: name
        })
    }
    componentDidUpdate(prevProps) {
        // In Home page, click and link to a section, change selected navside too.
        if(prevProps!=this.props && this.state.selected !== this.props.selectedNav){
            this.setState({
                selected: this.props.selectedNav
            })
        }
    }
    render() {
        const { selected } = this.state;
        const view = content.map((item,index) => (
            item.title ? 
            <NavLink className={styles.linkText} to={item.linkTo} key={index}>
                <div className={[styles.title, item.text==='Home'&&selected===item.selectedKey&&styles.selected].join(' ')}
                    onClick={() => this.selectHandler(item.selectedKey)}>
                        <span className={styles.fa}><FontAwesomeIcon icon={item.fa} /></span>
                        {item.text}
                        {   item.text!=='Home' &&
                            <span className={styles.faAngleDown}><FontAwesomeIcon icon={faAngleDown} /></span>
                        }
                </div> 
            </NavLink>
            :
            <NavLink className={styles.linkText} to={item.linkTo} key={index}>
                <div className={[styles.subItem, selected===item.selectedKey?styles.selected:''].join(' ')}
                    onClick={() => this.selectHandler(item.selectedKey)}>
                    {item.text}
                </div>
            </NavLink>
        ))
        return (
            <React.Fragment>
                <NavLink className={styles.logo} to="/">
                    <h1>MALL</h1>
                </NavLink>
                <Nav className={[styles.sidebar, 'd-none d-md-block'].join(' ')}>
                    {view}
                {/* <div className={[styles.title, selected==='home'?styles.selected:''].join(' ')}
                    onClick={() => this.selectHandler('home')}>
                    <NavLink className={styles.linkText} to="/">
                        <span className={styles.fa}><FontAwesomeIcon icon={faChartBar} /></span>
                        Home
                    </NavLink>

                </div>

                <div className={styles.title}
                    onClick={() => this.selectHandler('product')}>
                    <NavLink className={styles.linkText} to="/product">
                        <span className={styles.fa}><FontAwesomeIcon icon={faList} /></span>
                        Product
                        <span className={styles.faAngleDown}><FontAwesomeIcon icon={faAngleDown} /></span>
                    </NavLink>
                </div>
                <div className={[styles.subItem, selected==='product'?styles.selected:''].join(' ')}
                    onClick={() => this.selectHandler('product')}>
                    <NavLink className={styles.linkText} to="/product">Product Management</NavLink>
                </div>
                <div className={[styles.subItem, selected==='category'?styles.selected:''].join(' ')}
                    onClick={() => this.selectHandler('category')}>
                    <NavLink className={styles.linkText} to="/product-category">Category Management</NavLink>
                </div>

                <div className={styles.title}
                    onClick={() => this.selectHandler('order')}>
                    <NavLink className={styles.linkText} to="/order">
                        <span className={styles.fa}><FontAwesomeIcon icon={faCheckSquare} /></span>
                        Order
                        <span className={styles.faAngleDown}><FontAwesomeIcon icon={faAngleDown} /></span>
                    </NavLink>
                </div>
                <div className={[styles.subItem, selected==='order'?styles.selected:''].join(' ')}
                    onClick={() => this.selectHandler('order')}>
                    <NavLink className={styles.linkText} to="/order">Order Management</NavLink>
                </div>

                <div className={styles.title}
                    onClick={() => this.selectHandler('user')}>
                    <NavLink className={styles.linkText} to="/user">
                        <span className={styles.fa}><FontAwesomeIcon icon={faUser} /></span>
                        User
                        <span className={styles.faAngleDown}><FontAwesomeIcon icon={faAngleDown} /></span>
                    </NavLink>
                </div>
                <div className={[styles.subItem, selected==='user'?styles.selected:''].join(' ')}
                    onClick={() => this.selectHandler('user')}>
                    <NavLink className={styles.linkText} to="/user">User List</NavLink>
                </div> */}
            </Nav>
            </React.Fragment>
        )
    }
}

export default NavSide;