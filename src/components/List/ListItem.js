import React, { Component } from 'react';

export default class ListItem extends Component {

    constructor(props) {
        super(props);
        this.state = {
            data: props.data,
            classNameItem: props.classNameItem
        };

    }

    render() {
        const { data, classNameItem } = this.state

        return (
            data.map((valor, _id) => {
                return (
                    <div>
                        <li key={_id} className={(classNameItem ? classNameItem : "list-group-item")}> {valor.title}</li>
                    </div>
                )
            })
        );
    }
}
