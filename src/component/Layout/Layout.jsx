import React from 'react'

import NavHead from '../NavHead/NavHead'
import NavSide from '../NavSide/NavSide'

import styles from './Layout.module.scss'

const layout = props => (
    <div>
        <NavHead />
        <NavSide />
        
        <div className={styles.pageWrapper}>{props.children}</div>
    </div>
)

export default layout;