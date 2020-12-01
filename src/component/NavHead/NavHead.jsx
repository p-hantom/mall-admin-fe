import React from 'react'
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Util from '../../util/Util'

import styles from './NavHead.module.scss'

const _util = new Util();
class NavHead extends React.Component {
    state = {
        // username = _util.getStorage('userInfo') ? _util.getStorage('userinfo').username : ''
    }
    render() {
        return (
            <Nav className={["justify-content-end",styles.navhead].join(' ')} activeKey="/home">
                <NavDropdown title="Welcome!" id="nav-dropdown">
                    <NavDropdown.Item eventKey="4.4">Logout</NavDropdown.Item>
                </NavDropdown>
            </Nav>
        )
    }
}

export default NavHead;