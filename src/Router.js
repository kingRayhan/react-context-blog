import React from 'react'

import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Home from './pages/Home'
import Create from './pages/Create'
import Single from './pages/Single'
import Edit from './pages/Edit'
import Layout from './conponents/Layout'

export default () => (
    <BrowserRouter>
        <Layout>
            <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/add" component={Create} />
                <Route exact path="/:postid" component={Single} />
                <Route exact path="/edit/:postid" component={Edit} />
            </Switch>
        </Layout>
    </BrowserRouter>
)
