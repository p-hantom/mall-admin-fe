import React from 'react'
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faList, faCheckSquare, faUser, faChartBar } from "@fortawesome/free-solid-svg-icons";
import Util from '../../util/Util'
import { Link, NavLink } from 'react-router-dom';


import styles from './NavSide.module.scss'

const _util = new Util();

class NavSide extends React.Component {
    state = {
        selected: 'home'
    }
    render() {
        const { selected } = this.state;
        return (
            <Nav className={[styles.sidebar, 'd-none d-md-block'].join(' ')}>
                <div>
                    <NavLink className={styles.item} to="/">
                        <span className={styles.fa}><FontAwesomeIcon icon={faChartBar} /></span>
                    Home</NavLink>
                </div>
                <div>
                    <NavLink className={styles.item} to="/product">
                        <span className={styles.fa}><FontAwesomeIcon icon={faList} /></span>
                    Product</NavLink>
                </div>
                <div className={styles.subItem}>
                    <NavLink className={styles.subItem} to="/product">Product Management</NavLink>
                </div>
                <div className={styles.subItem}>
                    <NavLink className={styles.subItem} to="/product-category">Category Management</NavLink>
                </div>
                <div>
                    <NavLink className={styles.item} to="/order">
                        <span className={styles.fa}><FontAwesomeIcon icon={faCheckSquare} /></span>
                    Order</NavLink>
                </div>
                <div className={styles.subItem}>
                    <NavLink className={styles.subItem} to="/order">Order Management</NavLink>
                </div>
                <div>
                    <NavLink className={styles.item} to="/user">
                        <span className={styles.fa}><FontAwesomeIcon icon={faUser} /></span>
                    User</NavLink>
                </div>
                <div className={styles.subItem}>
                    <NavLink className={styles.subItem} to="/user">User List</NavLink>
                </div>
            </Nav>
        )
    }
}

export default NavSide;