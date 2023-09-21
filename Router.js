import React from 'react'
import { Switch, Route } from 'react-router'
import Home from './containers/Home'
import Login from './containers/Dashboard'
import Listing from './components/About'

const Router = () => {
    return (
        <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/listings" component={Home} />
            <Route path="/listings/:id" component={Listing} />
            <Route path="/login" component={Login} />
        </Switch>
    );
};

export default Router;