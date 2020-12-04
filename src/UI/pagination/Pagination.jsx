import React        from 'react';
import RcPagination   from 'rc-pagination';
//import style here!
import 'rc-pagination/assets/index.css';
import 'rc-pagination/assets/index.less';

import styles from './Pagination.module.scss'

// 通用分页组件
//defaultPageSize   : default items per page
//pageSize          : items per page
class Pagination extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        return (
            <div className={styles.paginationDiv}>
                <div>
                <RcPagination
                    showSizeChanger
                    {...this.props}
                />
                </div>
            </div>
        );
    }
}

export default Pagination;