import { Component } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";
import Layout from './component/Layout/Layout'
import Home from './page/home/Home'
import Login from './page/login/Login'
import ProductRouter from './page/product/ProductRouter'
import UserList from './page/user/UserList'
import OrderRouter from './page/order/OrderRouter'
import CategoryRouter from './page/category/CategoryRouter'
// import styles from './App.module.scss'

class App extends Component {
  state = {
    selectedNav: null
  }
  selectSideNav = (navName) => {
    this.setState({
      selectedNav: navName
    })
  }
  render() {
    let LayoutRouter = (
      <Layout selectedNav={this.state.selectedNav}> 
          <Switch>
              <Route exact path="/" render={props => (
                  <Home selectSideNav={this.selectSideNav}/>
                )}/>
              <Route path="/product" component={ProductRouter}/>
              <Route path="/category" component={CategoryRouter}/>
              <Route path="/user/index" component={UserList}/>
              <Route path="/order" component={OrderRouter}/>
              <Redirect exact from="/user" to="/user/index"/>
          </Switch>
      </Layout>
  );
  return (
      <Router>
          <Switch>
              <Route path="/login" component={Login}/>
              <Route path="/" render={ props => LayoutRouter}/>
          </Switch>
      </Router>
  )
  }
}

export default App;
