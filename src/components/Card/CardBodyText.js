import React from 'react';

export default function CardBodyText ({data}) {

        return (

            <p> { data.text || '' }</p>

        );
    
}

