import React, { useCallback, useState } from 'react';
import './ButtonRipple.css';
import debounce from '../utilities/debounce.js';

function ButtonRipple(props) {
    const debouncedLog = useCallback(
        debounce(function () { console.log("Debounce!"); }, 3000)
        , []);

    const [rippleList, setRippleList] = useState([]);

    function addRipple(e) {

    }

    function clearRippleContainer() {

    }

    function createRipple(e) {
        const button = e.currentTarget;
        const pos = button.getBoundingClientRect();
        const circle = document.createElement('span');
        const radius = Math.max(button.clientWidth, button.clientHeight) / 2;

        circle.style.width = circle.style.height = `${2 * radius}px`;
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
            onMouseUp={debouncedLog}
        >
            {props.children}
            <div className="ripple-container"></div>
        </button>
    );
}

export default ButtonRipple;