import React, { Component } from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import UserService from '../../service/UserService'
import Util from '../../util/Util'
import styles from './Login.module.scss'

const _util = new Util();
const _user = new UserService();

class Login extends Component {
    state = {
        username: '',
        password: '',
        showErrMsg: false
    }
    inputHandler = (key, e) => {
        this.setState({[key]: e.target.value})
    }
    submitHandler= () => {
        const params = {
            username: this.state.username,
            password: this.state.password
        }
        _user.login(params).then(res => {
            _util.setStorage('userInfo', res.data.data);
            this.props.history.push('/');
        }).catch(err => {
            console.log('err: ',err)
            this.setState({
                showErrMsg: true
            })
        })
    }
    render() {
        return (
            <div className={styles.loginDiv}>
                <div className={styles.content}>
                    <Form>
                        <Form.Group controlId="formBasicEmail">
                            <Form.Label>Username</Form.Label>
                            <Form.Control 
                                onChange={e => this.inputHandler('username', e)}
                                placeholder="Enter username" />                           
                        </Form.Group>

                        <Form.Group controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control 
                                onChange={e => this.inputHandler('password', e)}
                                type="password" placeholder="Password" />
                            {
                                this.state.showErrMsg ?
                                    <Form.Text className={styles.errMsg}>
                                    Wrong username or password.
                                </Form.Text> : null
                            }
                        </Form.Group>

                        <Button onClick={this.submitHandler} 
                            variant="primary" 
                            className={styles.button}>
                            Login
                        </Button>
                    </Form>
                </div>
            </div>
        )
    }
}

export default Login;