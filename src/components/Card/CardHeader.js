import React from 'react';
import { Label } from './styles'


export default function CardHeader ({data}) {

        return (
           <header>
           <Label color={ data.color}></Label>
           </header>
        );
    
}

