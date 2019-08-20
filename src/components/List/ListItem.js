import React from 'react';
import Button from '../Button'



export default function ListItem({ data, classNameItem }) {

    return (
        <li>
            <a href="#">
                {data.title}
                <Button key={data._id} data={data} icon={'folder'} iconColor={data.color} ></Button>
            </a>
        </li>
    );
}
