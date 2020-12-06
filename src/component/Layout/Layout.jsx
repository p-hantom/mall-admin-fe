import React, { Component } from 'react'

import NavHead from '../NavHead/NavHead'
import NavSide from '../NavSide/NavSide'

import styles from './Layout.module.scss'

class Layout extends Component {

    render() {
        return (
            <div>
                <NavHead />
                <NavSide selectedNav={this.props.selectedNav}/>
                
                <div className={styles.pageWrapper}>{this.props.children}</div>
            </div>
        )
    }
} 

export default Layout;