import React, { Component } from 'react';
import { Header } from '../../components/Header'
import API from '../../API'



export default class Register extends Component {

    constructor () {
        super();
        this.state = {
            projects: null,
          
        };

    }

    async componentDidMount() {
        const response = await API.get('/projects');
        this.setState({ projects: response.data.projects});
      }
    




    render() {
        const { projects } = this.state

        return (
            <div>
            {projects !== null ? (  <Header data={projects}/>  ) : ( null )}
        
             
            </div>
        )
    }

}