import React, { Component } from 'react';
import { TextInput } from '../../components/Form' 
import { Button } from '../../components'
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
        setTimeout(() =>{this.setState({ errors: null}) }, 6000);
    }



    render() {

        const { email, password, errors } = this.state


        return (
        
 
            <div className="container">
           
                <h2> Sign In </h2>
     
                <TextInput placeholder="Email"  
                onChange={e => this.setState({ email: e.target.value })} ></TextInput>

                <TextInput placeholder="Password" type="password"
                onChange={e => this.setState({ password: e.target.value })} ></TextInput>

                {errors !== null ? ( <div className="alert alert-danger" role="alert"> {this.state.errors.error} </div> ) : ( null )}

                {email && password !== null ? (<div> <Button placeholder="Login" onClick={this.auth}  > </Button></div>) : (<Button placeholder="Login" disabled  ></Button>)}

                <p>Forgot your or password?</p>

                <p onClick={this.redirect}>Don't have an compte? Create one now.</p>
            </div>
            
        )
    }

}