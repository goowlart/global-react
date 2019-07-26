import React, { Component } from 'react';
import ListItem from './ListItem'


export default class List extends Component {

    constructor(props) {
        super(props);
        this.state = {
            data: props.data,
            className: props.className,
            classNameItem: props.classNameItem
        };
    }

  

    render() {
        const {data, className, classNameItem} = this.state

        return (
            <ul  className={( className ? className : "list-group")}>
            <ListItem data={data} classNameItem={classNameItem}></ListItem>
            </ul>
        );
    }
}
