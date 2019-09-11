import React, {Component}from 'react';
import { connect } from 'react-redux'
import axios from 'axios'
import {setAuthorizationToken} from '../../utils/setAuthorizationToken'
import { TextInput } from '../../components/Form'
import { Button } from '../../components'
import  * as Action from '../../store/actions.js'
import "./style.css"

class LoginPage extends Component {
  
    constructor(props ) {
        super(props);   
        this.state = {
            email: null,
            password: null,
            errors: null,
        };
    }


    login = async () => {
        const { email, password } = this.state
       
        return axios.post('http://localhost:3001/api/auth', {email, password}).then(response =>{
            

            const { token, user } = response.data
            const isAthenticated = true
            localStorage.setItem('jwtToken', token)
            localStorage.setItem('isAthenticated', true)
            

            this.props.dispatch(Action.UPDATE_AUTH(token, isAthenticated ))
            this.props.dispatch(Action.UPDATE_USER(user))
            setAuthorizationToken(token) 
            console.log(this.props);
  
        
            //this.redirect('/')
            //this.props.history.push("/")
          
         
            
        }).catch (error => {
            console.log(this.props);
            let {response} = error
            localStorage.setItem('erros', JSON.stringify(response))
        })
    
       
       // auth(user)

     //   setTimeout(() => { JSON.parse(localStorage.getItem('isAthenticated')) ? this.props.history.push("/home") : this.errorServer() }, 1000);
    }

    redirect = (root) => {        
        this.props.history.push(root)
    }


    errorServer = () => {
        let error = JSON.parse(localStorage.getItem('erros'));
        this.setState({ errors: error.data })
        setTimeout(() => { this.setState({ errors: null }) }, 6000);
    }


    render() {


        const { errors } = this.state

        return (

            <div className="container">
                
                <h2> Sign In </h2>
                <TextInput
                    placeholder="Email"
                    onChange={e => this.setState({ email: e.target.value })} >
                </TextInput>
                <TextInput placeholder="Password"
                    type="password"
                    onChange={e => this.setState({ password: e.target.value })} >
                </TextInput>
                <Button
                    placeholder="Login"
                    onClick={this.login} >
                </Button>      

                {errors !== null ? (<div className="alert alert-danger" role="alert"> {this.state.errors.error} </div>) : (null)}
                <p>Forgot your or password?</p>

                <p onClick={() => {this.redirect('/register')}}>Don't have an compte? Create one now.</p>
            </div>

        )
    }

}

export default connect(state => ({
    store: state,
}))(LoginPage)

//<Button  placeholder="store" onClick={()=> this.props.dispatch(this.toggleLesson(auth))} ></Button>