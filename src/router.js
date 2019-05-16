import { HashRouter as Router, Route, Link, Switch, Redirect } from 'react-router-dom'
import React, { Component } from 'react'
import Login from './pages/login'
import App from './App'
import Admin from './Admin'
import NoMatch from './pages/noMatch'
import Buttons from './pages/ui/buttons'
import Home from './pages/home'

export default class BaseRouter extends Component {
    render() {
        return (
            <Router>
                <App>
                    <Switch>
                        <Route path='/login' component={Login} />
                        <Route path='/admin' component={() =>
                            <Admin>
                                <Switch>
                                    <Route path='/admin/home' component={Home} />
                                    <Route path='/admin/ui/buttons' component={Buttons} />
                                    <Route component={NoMatch} />
                                </Switch>
                            </Admin>
                        } />
                        <Route path='/order/detail' component={Login} />

                    </Switch>
                </App>

            </Router>

        )
    }
}
