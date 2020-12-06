import { Component } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Layout from './component/Layout/Layout'
import Home from './page/home/Home'
import Login from './page/login/Login'
import ProductRouter from './page/product/ProductRouter'
import styles from './App.module.scss'

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
              {/* <Route path="/product-category" component={ProductRouter}/>
              <Route path="/order/index" component={OrderList}/>
              <Route path="/order/detail/:orderNumber" component={OrderDetail}/>
              <Route path="/user/index" component={UserList}/>
              <Redirect exact from="/order" to="/order/index"/>
              <Redirect exact from="/user" to="/user/index"/>
              <Route component={ErrorPage}/> */}
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
