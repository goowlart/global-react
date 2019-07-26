import React, { Component } from 'react';


export default class TextInput extends Component {

    constructor(props) {
        super(props);
        this.state = {
            placeholder: props.placeholder,
            type: props.type,
            className: props.className,
            required: props.required
        };

    }

    render() {
        const { placeholder, type, className, required } = this.state

        return (
            <div className="form-group">
                <input
                    type={type}
                    required = {  required || false }
                    className={( className ? className : "form-control")}
                    placeholder={placeholder}
                    onChange={this.props.onChange}
                />
            </div>
        );
    }
}

