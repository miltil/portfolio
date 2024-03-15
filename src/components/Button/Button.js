import React from 'react';
import './Button.css';

const Button = ({ children, onClick }) => {
    return (
        <div onClick={onClick} className='button'>
            <label>{children}</label>
        </div>
    );
};

export default Button;