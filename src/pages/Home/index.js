import React, { Component } from 'react';
import { connect } from 'react-redux'
import { Board, Header, Menu } from '../../components'
import api from '../../services/api';

import { Container } from './styles';



 class Register extends Component{
    constructor(store) {
        super();
        this.state = {
            store,
            data: null,
        }

    }

    componentDidMount() {   
        this.getProjects()
        console.log();
    
        
      
    }

    getProjects() {
        api.get('/projects').then((response) => {
            this.setState({ data: response.data })
        })
            .catch((error) => {
                if (error.response) {
                    console.log(error.response.data);
                    console.log(error.response.status);
                    console.log(error.response.headers);
                } else if (error.request) {
                    console.log(error.request);
                } else {
                    console.log('Error', error.message);
                }
                console.log(error.config);
            });
    }

    render() {
        const { data, modules } = this.state
        
   
        
    
        if (!data) 
        return <div> Loading ... </div>

        return (
            <Container>
                <Header />
                <h1>Alex Vieirea Goulart e Silva </h1>
                <Menu data={data.projects} ></Menu>
                <Board data={data.tasks}></Board>
            </Container>
        );
    }
  
}

export default connect(state => ({store: state}))(Register)

