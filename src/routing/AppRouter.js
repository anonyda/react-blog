import React from 'react';
import { Switch, Route } from 'react-router';

import Home from '../pages/Home/Home';
import Blog from '../pages/Blog/Blog';
import LoginForm from '../components/LoginForm/LoginForm';
import ProtectedRoute from '../components/ProtectedRoute/ProtectedRoute';
import SignUpForm from '../components/SignUpForm/SignUp';

export default function AppRouter() {
    return (
        <div>
            <Switch>
                <Route exact path='/login'>
                    <LoginForm />
                </Route>
                <Route exact path='/signup'>
                    <SignUpForm />
                </Route>  
                <ProtectedRoute path='/:blogId'>
                    <Blog />
                </ProtectedRoute>
                <ProtectedRoute path='/'>
                    <Home />
                </ProtectedRoute>
                
            </Switch>
            

        </div>
    )
}
