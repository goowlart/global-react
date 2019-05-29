import React, {Component} from 'react';
import { register } from "../../auth"
import "./style.css"

export default class Register extends Component {

    constructor () {
        super();
        this.state = {
            name: null,
            email: null,
            password: null,
            password2: null,
            errors: null,
            nameError:null,
            emailError:null,
            passwordError: null,
            passwordError2: null,
            test: false 
        };
    }

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

    validate = () => {
   
      const {name, email, password, password2 } = this.state
      

   

      if (name === null) {
        this.setState({ nameError:"Required field" })
      }else{
        this.setState({ test:true })
      }

      if (email === null ||  /.+@.+/.test(email) === false){
            this.setState({ emailError:"Please enter a valid email address" })
      }else {
        this.setState({ test:true })
      }

      if (password === null ){
        this.setState({ passwordError:"Required field" })
      } else {
        this.setState({ test:true })
      }
      if (password2 === null ){
        this.setState({ passwordError2:"Required field" })
      } else {
        this.setState({ test:true })
      }

      if (password !== password2 ){
        this.setState({ password:"" })
        this.setState({ password2:"" })
        this.setState({ passwordError:"Hold the field with the same password" })
        this.setState({ passwordError2:"Hold the field with the same password" })
      } else {
        this.setState({ test:true })
      }

   

      if (this.state.test === true) {
        this.auth ()
      } else {
          setTimeout(() => {
            this.setState({ nameError:null })
            this.setState({ emailError:null })
            this.setState({ passwordError:null })
            this.setState({ passwordError2:null })
          }, 7000);
          
      }

    

    }


    redirect = () => {
        this.props.history.push("/") 
    }
    

    render() {
        const {name, email, password, password2, nameError, emailError, passwordError, passwordError2} = this.state

        return (

                <div className="container">
                        <h2> Create an account</h2>
                    
                 
                        <input 
                        className="form-control"
                        required
                        type="text" placeholder="Your name (ex. Jhon Doe)" 
                        onChange={e => this.setState({name: e.target.value})}
                        />
                        <div className="small text-danger form-text">{nameError}</div>
           
                        <input 
                        required
                        className="form-control"
                        type="email" placeholder="Email" 
                        onChange={e => this.setState({email: e.target.value})}
                        />
                        <div className="small text-danger form-text">{emailError}</div>
               
                        <input 
                        required
                        className="form-control"
                        type="password" placeholder="Password" // 
                        onChange={e => this.setState({password: e.target.value}) }
                        />
                        <div className="small text-danger form-text">{passwordError}</div>
        
                        <input 
                        required
                        className="form-control"
                        type="password" placeholder="Confirm your password" // 
                        onChange={e => this.setState({password2: e.target.value}) }
                        />
                        <div className="small text-danger form-text">{passwordError2}</div>
    
    
                        {email && password && name && password2 !== null  ? ( <button type="button" className="btn btn-primary btn-block" onClick={this.validate}>Sign up</button> ) : ( <button type="button" disabled className="btn btn-primary btn-block"> Sign up</button> )}
                        
                               
                        <p onClick={this.redirect}>Return to login screen</p>
                    </div>
    
        )
    }

}