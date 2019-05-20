import { HashRouter as Router, Route, Switch, Redirect } from 'react-router-dom'
import React, { Component } from 'react'
import Login from './pages/login'
import App from './App'
import Admin from './Admin'
import NoMatch from './pages/noMatch'
import Home from './pages/home'
import Buttons from './pages/ui/buttons'
import Modals from './pages/ui/modals'
import Loadings from './pages/ui/loadings'
import Notices from './pages/ui/notices'
import Tabs from './pages/ui/tabs'
import Gallery from './pages/ui/gallery'
import Carousel from './pages/ui/carousel'
import FormLogin from './pages/form/login'
import Register from './pages/form/register'
import BasicTable from './pages/table/basicTable'
import AdvancedTable from './pages/table/advancedTable'
import City from './pages/city'
import Common from './common'



export default class BaseRouter extends Component {


    render() {

        return (
            <Router>
                <App>
                    <Switch>
                        <Route path='/login' component={Login} />
                        <Route path='/common' render={() => {
                            return <Common>
                                {/* <Route path='/order/detail' component={Login} /> */}
                            </Common>
                        }} />

                        <Route path='/admin' component={() =>
                            <Admin>
                                <Switch>
                                    <Route path='/admin/home' component={Home} />
                                    <Route path='/admin/ui/buttons' component={Buttons} />
                                    <Route path='/admin/ui/modals' component={Modals} />
                                    <Route path='/admin/ui/loadings' component={Loadings} />
                                    <Route path='/admin/ui/notification' component={Notices} />
                                    <Route path='/admin/ui/tabs' component={Tabs} />
                                    <Route path='/admin/ui/gallery' component={Gallery} />
                                    <Route path='/admin/ui/carousel' component={Carousel} />
                                    <Route path='/admin/form/login' component={FormLogin} />
                                    <Route path='/admin/form/reg' component={Register} />
                                    <Route path='/admin/table/basic' component={BasicTable} />
                                    <Route path='/admin/table/high' component={AdvancedTable} />
                                    <Route path='/admin/city' component={City} />

                                    <Redirect to="/admin/home" />

                                    <Route component={NoMatch} />

                                </Switch>
                            </Admin>
                        } />

                    </Switch>
                </App>

            </Router>

        )
    }
}
