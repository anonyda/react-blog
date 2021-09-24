import React from 'react'
import { useSelector } from 'react-redux'
import { Redirect, Route } from 'react-router-dom'

export default function ProtectedRoute(props) {
    const isUserLoggedIn = useSelector(state => state.auth.isUserLoggedIn);
    console.log(isUserLoggedIn);
    if (!isUserLoggedIn) {
        return <Redirect to="/login" />;
    }
    return (
        <Route 
            path={props.path}> 
            {props.children}
        </Route>
    );
}
