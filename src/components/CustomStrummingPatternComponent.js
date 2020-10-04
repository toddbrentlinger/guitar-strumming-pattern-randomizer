import React from 'react';
import './CustomStrummingPatternComponent.css';
import StrummingPattern from '../StrummingPattern.js';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLock, faLockOpen } from '@fortawesome/free-solid-svg-icons';

function Strum(props) {
    /* props.strumNum:
     * 1,3,5,7 – correspond to down (D) strums 1,2,3,4
     * 2,4,6,8 – correspond to up (U) strums '+'
     */
    return (
        <div className="strum-container">
            <FontAwesomeIcon icon={faLockOpen} style={{ color: "gray" }} />
            <div className="strum-num">
                {StrummingPattern.getStrumValue(props.strumNum)}
            </div>
            <div className="strum-direction">
                {StrummingPattern.getStrumDirection(props.strumNum)}
            </div>
        </div>
    );
}

function strummingPatternBase(props) {
    // Ex. D Du u D = [true, false, true, true, false, true, true, false]
    //const strummingPattern = props.strummingPattern;

    const strumList = props.strummingPattern.boolArr.map((strumBool, i) => {
        return (
            <Strum
                strumNum={i}
                selected={strumBool}
                key={i}
            />
        );
    });

    return (
        <div className="strumming-pattern-container">
            <div className="strumming-pattern">{strumList}</div>
        </div>
    );
}

export default strummingPatternBase;