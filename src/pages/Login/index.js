import React, {Component} from 'react';
import { login } from "../../auth"
import "./style.css"

export default class Login extends Component {

    state = {
        email: '',
        password: ''
    };

    auth = () => {
        const {email, password} = this.state
        const user = {
            email,
            password
        }
        login(user)   

        this.props.history.push("/home") 
    }

    redirect = () => {
        this.props.history.push("/register") 
    }

    render() {

        return (

                <div className="container">
                        <h2> Sign In  </h2>
                        <div className="form-group">
                        <input 
                        required
                        className="form-control"
                        type="email" placeholder="Email" 
                        onChange={e => this.setState({email: e.target.value})}
                        />
                        </div>

                        <div className="form-group">
                        <input 
                        required
                        className="form-control"
                        type="password" placeholder="Password" // 
                        onChange={e => this.setState({password: e.target.value}) }
                        />
                        </div>
            

                        <button  type="button" className="btn btn-primary btn-block" onClick={this.auth}>Login</button>
                        <p>Forgot your or password?</p>
                        <p onClick={this.redirect}>Don't have an compte? Create one now.</p>
                    </div>
    
        )
    }

}