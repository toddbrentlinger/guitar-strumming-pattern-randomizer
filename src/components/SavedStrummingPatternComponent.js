import React from 'react';
import StrummingPattern from '../StrummingPattern.js';
import './SavedStrummingPatternComponent.css';

function SavedStrum(props) {
    return (
        <div className="strum-container">
            <div className="strum-num">
                {StrummingPattern.getStrumValue(props.strumNum)}
            </div>
            <div className="strum-direction">
                {StrummingPattern.getStrumDirection(props.strumNum, props.selected)}
            </div>
        </div>
    );
}

function SavedStrummingPatternComponent(props) {
    const strumList = props.strumPattern.strums.map((strumBool, i) => {
        return (
            <SavedStrum
                strumNum={i}
                selected={strumBool}
                key={i}
            />
        );
    });

    return (
        <li>
            <div className="saved-strumming-pattern-container">
                <div className="strumming-pattern">{strumList}</div>
            </div>
        </li>
    );
}

export default SavedStrummingPatternComponent;