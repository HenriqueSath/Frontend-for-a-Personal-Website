import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import Home from './pages/Home'
import About from './pages/About'
import SocialMedias from './pages/SocialMedias'
import Contact from './pages/Contact'

export default function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path='/' exact component={Home} />
                <Route path='/socialmedias' component={SocialMedias} />
                <Route path='/about' component={About} />
                <Route path='/contact' component={Contact} />
            </Switch>
        </BrowserRouter>
    )
}