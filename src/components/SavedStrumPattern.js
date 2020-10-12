import React from 'react';
import StrumPattern from '../StrumPattern.js';
import './SavedStrumPattern.css';

function SavedStrum(props) {
    return (
        <div className="custom-strum-container">
            <div className="strum-num">
                {StrumPattern.getStrumValue(props.strumNum)}
            </div>
            <div className="strum-direction">
                {StrumPattern.getStrumDirection(props.strumNum, props.selected)}
            </div>
        </div>
    );
}

function SavedStrumPattern(props) {
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
        <div className="saved-strumming-pattern-container">
            <div className="strumming-pattern">{strumList}</div>
        </div>
    );
}

export default SavedStrumPattern;