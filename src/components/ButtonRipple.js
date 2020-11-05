import React, { useCallback, useRef } from 'react';
import './ButtonRipple.css';
import debounce from '../utilities/debounce.js';

function ButtonRipple(props) {
    const debouncedLog = useCallback(
        debounce(function () {
            //console.log("Debounce!");
            clearRipples();
        }, 3000)
        , []);

    const rippleContainerRef = useRef(null);

    function addRipple(e) {
        const button = e.currentTarget;
        const pos = button.getBoundingClientRect();
        const circle = document.createElement('span');
        const radius = Math.max(button.clientWidth, button.clientHeight) / 2;

        circle.style.width = circle.style.height = `${2 * radius}px`;
        circle.style.left = `${e.clientX - pos.left - radius}px`;
        circle.style.top = `${e.clientY - pos.top - radius}px`;
        circle.classList.add('ripple');

        // Add ripple element to ripple container
        rippleContainerRef.current.appendChild(circle);
    }

    function clearRipples() {
        const container = rippleContainerRef.current;
        while (container.firstChild) {
            container.removeChild(container.firstChild);
        }
    }
    /*
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
        rippleContainerRef.current.appendChild(circle);
    }
    */
    function handleClick(e) {
        //createRipple(e);
        addRipple(e);
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
            <div
                className="ripple-container"
                ref={rippleContainerRef}
            ></div>
        </button>
    );
}

export default ButtonRipple;