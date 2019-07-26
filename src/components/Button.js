import React, { Component } from 'react';


export default class Button extends Component {

    constructor(props) {
        super(props);
        this.state = {
            placeholder: props.placeholder,
            type: props.type,
            className: props.className,
            disabled: props.disabled
        };

    }

    render() {
        const { type, className, placeholder, disabled } = this.state

        return (
            <div className="form-group">
                <button
                    type={type}
                    className={( className ? className : "btn btn-primary btn-block")}
                    disabled = { false || disabled }
                    onClick={this.props.onClick}
                  
                >
                 { placeholder || "Button" }
                </button>
            </div>
        );
    }
}

