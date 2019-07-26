import React from 'react';
import {BrowserRouter, Switch, Route, Redirect} from 'react-router-dom'
import Login from './pages/Login'
import Register from './pages/Register'
import Home from './pages/Home'


const PrivatedRoute =  ({component: Component, ...rest}) => (
    <Route {...rest} render={props => (
        localStorage.isAthenticated ? (
            <Component {...props} /> 
        ):
        (
            <Redirect to={{pathname:'/', state: {from : props.location}}}/>
        )

    )} />
)
    

const Routes = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path="/" component={Login}></Route>
            <Route exact path="/register" component={Register}></Route>
            <PrivatedRoute path="/home"  component={Home} />
        </Switch>
    </BrowserRouter>
);

export default Routes;