import React from 'react';
import { Container } from './styles'
import List from '../List'


export default function Board ({data}) {
        
        return (
            <Container>
            { data.map((item, index) => <List data={item} key={index}></List>)}
            </Container>
        );
    
}

