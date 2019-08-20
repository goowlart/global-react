import React, { Component } from 'react';
import {Board, Header, Menu} from '../../components'
import api from '../../services/api';

import { Container } from './styles';



export default class Register extends Component {

    constructor() {
        super();
        this.state = {
            data: null,
        };

    }

    componentDidMount() {
        this.getProjects()
    }

    getProjects() {
        api.get('/projects').then((response) => {
         this.setState({ data: response.data})
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
        const { data } = this.state
        
        if (data  !==  null) {
            return (
                <Container>
                  
      
                  <Header  />
           
                  <Menu  data={data.projects} ></Menu>
                  <Board data={data.tasks}></Board>
      
                </Container>
            )
        }else{
            return (
               <p>error</p>
            )

        }
    }

}