import React  from 'react';
import { useDrag } from 'react-dnd'
import { Container } from './styles'
import CardHeader from './CardHeader'
import CardBodyText from './CardBodyText'
import CardBodyImage from './CardBodyImage'

export default function Card ({data}){

        return (
            <Container>
            <CardHeader data={data} ></CardHeader>
            <CardBodyText data={data}></CardBodyText>
            <CardBodyImage data={data}></CardBodyImage>
            </Container>
        );
    }


