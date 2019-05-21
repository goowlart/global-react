import React, {Component} from 'react';
import { register } from "../../auth"
import "./style.css"

export default class Register extends Component {

    state = {
        name: '',
        email: '',
        password: '',
        password2: '',
        errors: []

    };

    auth = () => {
        const {name ,email, password, password2, errors} = this.state
        const user = {
            name,
            email,
            password
        }
        if (password === password2) {
            register(user)
            this.props.history.push("/home") 
        }else {
            this.setState({
                password:'',
                password2: ''
            }) 
            errors.push('Please enter the same password')
            console.log(errors, )
        }
    }

    redirect = () => {
        this.props.history.push("/") 
    }
    

    render() {

        return (

                <div className="container">
                        <h2> Create an account </h2>
                 
                        <input 
                        className="form-control"
                        required
                        type="text" placeholder="Your name (ex. Jhon Doe)" 
                        onChange={e => this.setState({name: e.target.value})}
                        />
           
                        <input 
                        required
                        className="form-control"
                        type="email" placeholder="Email" 
                        onChange={e => this.setState({email: e.target.value})}
                        />
               
                        <input 
                        required
                        className="form-control"
                        type="password" placeholder="Password" // 
                        onChange={e => this.setState({password: e.target.value}) }
                        />
        
                        <input 
                        required
                        className="form-control"
                        type="password" placeholder="Confirm your password" // 
                        onChange={e => this.setState({password2: e.target.value}) }
                        />
                               
                        <button  type="button" className="btn btn-primary btn-block" onClick={this.auth}>Create</button>
                        <p onClick={this.redirect}>Return to login screen</p>
                    </div>
    
        )
    }

}