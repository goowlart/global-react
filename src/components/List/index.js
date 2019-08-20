import React from 'react';
import ListHearder from './ListHearder'
import Card  from '../Card'
import { Container } from './styles'


export default function List ({data}) {

        return (
            <Container done={data.completed} >
               <ListHearder data={data}></ListHearder>
               { data.tasks.map((item, index) => <Card data={item} key={index}></Card>)}
            </Container>
        );
    }

