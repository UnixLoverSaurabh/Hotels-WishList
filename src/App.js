import React, { Component } from 'react';
import './hoc/Layout/Layout'
import Layout from './hoc/Layout/Layout';
import Authentication from './containers/Authentication/Authentication';
import Orders from './containers/Orders/Orders';
import { Switch, Route } from 'react-router-dom';
import AllOrders from './containers/AllOrders/AllOrders';

class App extends Component {
  render() {
    return (
      <div>
        <Layout>
          <Switch>
            <Route path="/auth" component={Authentication} />
            <Route path="/orders" component={AllOrders} />
            <Route path="/" component={Orders} />
          </Switch>
        </Layout>
      </div>
    );
  }
}

export default App;