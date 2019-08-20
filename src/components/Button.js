import React from 'react';

export default function Button({ placeholder, type, className, disabled, icon, iconColor, onClick }) {

    const styleColorIcon = {
        color: iconColor
    }

    return (
        <button
            type={(type ? type : "button")}
            className={(className ? className : "null")}
            disabled={false || disabled}
            onClick={onClick}

        >
            {placeholder}
            {<i className="material-icons" style={styleColorIcon}>
                {icon}
            </i>}

        </button>

    );

}

