import React, { Component } from 'react';
import { login } from "../../auth"
import "./style.css"

export default class Login extends Component {


    constructor () {
        super();
        this.state = {
            email: null,
            password: null,
            errors: null
        };

    }

    auth = () => {
        const { email, password } = this.state
        const user = {
            email,
            password
        }
        login(user)

        setTimeout(() => { JSON.parse(localStorage.getItem('isAthenticated')) ? this.props.history.push("/home") :  this.errorServer() }, 1000);

    }

    redirect = () => {
        this.props.history.push("/register")
    }


    errorServer = () => {
        let error = JSON.parse(localStorage.getItem('erros'));
        this.setState({ errors: error.data })

    }


    render() {
        const { email, password, errors } = this.state


        return (
            <div className="container">
                <h2> Sign In </h2>
                <div className="form-group">
                    <input
                        required
                        className="form-control"
                        type="email" placeholder="Email"
                        onChange={e => this.setState({ email: e.target.value })}
                    />
                </div>

                <div className="form-group">
                    <input
                        required
                        className="form-control"
                        type="password" placeholder="Password" // 
                        onChange={e => this.setState({ password: e.target.value })}
                    />
                </div>

                {errors !== null ? ( <div className="alert alert-danger" role="alert"> {this.state.errors.error} </div> ) : ( null )}

                {email && password !== null ? ( <button type="button" className="btn btn-primary btn-block" onClick={this.auth}>Login</button> ) : ( <button type="button" disabled className="btn btn-primary btn-block">Login</button> )}
                <p>Forgot your or password?</p>
                <p onClick={this.redirect}>Don't have an compte? Create one now.</p>
            </div>

        )
    }

}