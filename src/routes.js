import React from 'react';
import {BrowserRouter, Switch, Route, Redirect} from 'react-router-dom'
import LoginPage from './pages/LoginPage'
import SignupPage from './pages/SignupPage'
import Home from './pages/Home'


const PrivatedRoute =  ({component: Component, ...rest}) => (
    <Route {...rest} render={props => (
        localStorage.isAthenticated ? (
           <Component {...props} /> 
        ):
        (
            <Redirect to={{pathname:'/login', state: {from : props.location}}}/>
        )

    )} />
)
    

const Routes = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path="/login" component={LoginPage}></Route>
            <Route exact path="/register" component={SignupPage}></Route>
            <PrivatedRoute path="/"  component={Home} />
        </Switch>
    </BrowserRouter>
);

export default Routes;