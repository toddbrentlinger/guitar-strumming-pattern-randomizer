import React from 'react';
import './ButtonRipple.css';

function ButtonRipple(props) {
    function createRipple(e) {
        const button = e.currentTarget;
        const pos = button.getBoundingClientRect();
        const circle = document.createElement('span');
        const radius = Math.max(button.clientWidth, button.clientHeight) / 2;

        circle.style.width = circle.style.height = `${2 * radius}px`;
        //circle.style.left = `${e.clientX - button.offsetLeft - radius}px`;
        //circle.style.top = `${e.clientY - button.offsetTop - radius}px`;
        circle.style.left = `${e.clientX - pos.left - radius}px`;
        circle.style.top = `${e.clientY - pos.top - radius}px`;
        circle.classList.add('ripple');

        // Remove ripple element if already on button
        const ripple = button.getElementsByClassName('ripple')[0];
        if (ripple) {
            ripple.remove();
        }

        // Add ripple element to button
        button.appendChild(circle);
    }

    function handleClick(e) {
        createRipple(e);
        props.onClick();
    }

    return (
        <button
            className="button-ripple"
            type="button"
            onClick={handleClick}
        >
            {props.children}
        </button>
    );
}

export default ButtonRipple;