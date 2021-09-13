import React from 'react';
import { Switch, Route } from 'react-router';

import Home from '../pages/Home/Home';
import Blog from '../pages/Blog/Blog';

export default function AppRouter() {
    return (
        <div>
            <Switch>
                
                <Route path='/:blogId'>
                    <Blog />
                </Route>
                <Route exact path='/'>
                    <Home />
                </Route>
                
            </Switch>
            

        </div>
    )
}
