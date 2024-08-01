/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
import React from "react";
import './Button.css';

function Button({type , title , disable , onClick}) {
    return (
        <Button className ={`btn ${
          type === 'add' && 'add' || type === 'remove' && 'remove' || type === 'checkout'  && 'checkout'
        }`}
        disabled = {disable}
        onClick={onClick}
        >
     {title}
        </Button>
    )
}

export default Button;