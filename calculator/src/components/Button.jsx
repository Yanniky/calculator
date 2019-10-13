import React from 'react';
import './Button.css';

const isOperator = val => {
    // is not a number then return true
    return !isNaN(val) || val  === "." || val === "=";
}

export const Button = props =>(
    <div className={`button-wrapper ${
        isOperator(props.children) ? null : "operator"
    }`} onClick={() =>props.handleClick(props.children)}>
        
        {props.children}
    </div>
)
