import React, { Component } from 'react';
import './hoc/Layout/Layout'
import Layout from './hoc/Layout/Layout';
import Authentication from './containers/Authentication/Authentication';
import Orders from './containers/Orders/Orders';
import Hotels from './containers/Hotels/Hotels';
import { Switch, Route } from 'react-router-dom';
import Wishlist from './containers/Wishlist/Wishlist';

class App extends Component {
  render() {
    return (
      <div>
        <Layout>
          <Switch>
            <Route path="/hotels" component={Hotels} />
            <Route path="/auth" component={Authentication} />
            <Route path="/wishlist" component={Wishlist} />
            <Route path="/" component={Orders} />
          </Switch>
        </Layout>
      </div>
    );
  }
}

export default App;