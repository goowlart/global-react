import React from 'react';
import Button from '../Button'

export default function ListHearder ({data}) {

        return (
            <header>
            <h2>{data.title}</h2>
            {data.creatable ? <Button icon={'add_circle'} ></Button> : null}
            </header>      
    
        );
    
}
