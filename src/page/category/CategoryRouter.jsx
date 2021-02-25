import React from 'react';
import { BrowserRouter as Router, Switch, Redirect, Route } from 'react-router-dom'

import CategoryList from './category/CategoryList';

class CategoryRouter extends React.Component {
    render(){
        return (
            <Switch>
                <Route path="/category/index" component={CategoryList}/>
                <Redirect exact from="/category" to="/category/index"/>
            </Switch>
        )
    }
}
export default CategoryRouter;