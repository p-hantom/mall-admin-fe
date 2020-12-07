import React            from 'react';
import { BrowserRouter as Router, Switch, Redirect, Route, Link } from 'react-router-dom'

// 页面
import OrderList      from './content/OrderList';
import OrderDetail    from './content/OrderDetail'

class OrderRouter extends React.Component{
    render(){
        return (
            <Switch>
                <Route path="/order/index" component={OrderList}/>
                <Redirect exact from="/order" to="/order/index"/>
                <Route path="/order/detail/:orderNo" component={OrderDetail}/>
            </Switch>
        )
    }
}
export default OrderRouter;