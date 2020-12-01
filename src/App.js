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

class App extends Component {
  render() {
    let LayoutRouter = (
      <Layout> 
          <Switch>
              <Route exact path="/" component={Home}/>
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
