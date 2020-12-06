import React, { Component } from 'react'
import Statistics from '../../service/StatisticsService'
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faList, faCheckSquare, faUser } from "@fortawesome/free-solid-svg-icons";
import styles from './Home.module.scss'
const _statistics = new Statistics();

class Home extends Component {
    state = {
        userCount: 0,
        productCount: 0,
        orderCount: 0
    }
    componentDidMount() {
        this.getData();
    }
    getData = () => {
        _statistics.getBaseCount().then(res => {
            const data = res.data.data;
            this.setState({
                userCount: data.userCount,
                orderCount: data.orderCount,
                productCount: data.productCount
            })
        })
    }
    render() {
        const {selectSideNav} = this.props;
        return (
            <React.Fragment>
                <div className={styles.homeTitle}>
                    <h1>Home</h1>
                </div>
                <div className='row'>
                    <div className='col-md-4'>
                        <NavLink to='/user' className={styles.link}
                            onClick={() => selectSideNav('user')}>
                            <div className={[styles.cardDiv, styles.userDiv].join(' ')}>
                                <p className={styles.count}>{this.state.userCount}</p>
                                <p className={styles.title}>
                                    <span className={styles.fa}><FontAwesomeIcon icon={faUser} /></span>
                                Total User Count
                            </p>
                            </div>
                        </NavLink>
                    </div>
                    <div className='col-md-4'>
                        <NavLink to='/product' className={styles.link}
                            onClick={() => selectSideNav('product')}>
                            <div className={[styles.cardDiv, styles.productDiv].join(' ')}>
                                <p className={styles.count}>{this.state.productCount}</p>
                                <p className={styles.title}>
                                    <span className={styles.fa}><FontAwesomeIcon icon={faList} /></span>
                                Total Product Count
                            </p>
                            </div>
                        </NavLink>
                    </div>
                    <div className='col-md-4'>
                        <NavLink to='/order' className={styles.link}
                            onClick={() => selectSideNav('order')}>
                            <div className={[styles.cardDiv, styles.orderDiv].join(' ')}>
                                <p className={styles.count}>{this.state.orderCount}</p>
                                <p className={styles.title}>
                                    <span className={styles.fa}><FontAwesomeIcon icon={faCheckSquare} /></span>
                                Total Order Count
                            </p>
                            </div>
                        </NavLink>
                    </div>
                </div>
            </React.Fragment>

        )
    }
}

export default Home;