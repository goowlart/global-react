import React from 'react';
import  ListItem  from '../List/ListItem'
import { Container } from './styles'

export default function Menu ({data}) {
        return (
            <Container>
                <ul>
                    {data.map(i => <ListItem key={i._id} data={i}></ListItem>) || []}
                </ul>
            </Container>
        );
    }

