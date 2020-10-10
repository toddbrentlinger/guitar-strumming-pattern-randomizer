import React, { useState } from 'react';
import './CustomStrummingPatternComponent.css';
import StrummingPattern from '../StrummingPattern.js';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLock, faLockOpen } from '@fortawesome/free-solid-svg-icons';

function Strum(props) {
    return (
        <div className="custom-strum-container">
            <div className="lock-icon-container" onClick={props.lockedOnClick}>
                <FontAwesomeIcon
                    icon={props.locked ? faLock : faLockOpen}
                    style={props.locked ? { color: "red" } : { color: "gray" }}
                />
            </div>
            <hr/>
            <div className="strum-container" onClick={props.strumOnClick}>
                <div className="strum-num">
                    {StrummingPattern.getStrumValue(props.strumNum)}
                </div>
                <div className="strum-direction">
                    {StrummingPattern.getStrumDirection(props.strumNum, props.selected)}
                </div>
            </div>
        </div>
    );
}

function CustomStrummingPatternComponent(props) {
    // Ex. D Du u D = [true, false, true, true, false, true, true, false]
    const [currentStrumPattern, setCurrentStrumPattern] = useState(props.strummingPattern);
    const [lockedStrums, setLockedStrums] = useState(new Array(8).fill(false));

    function toggleStrum(i) {
        const newStrumPatternBoolArr = currentStrumPattern.strums.slice();
        newStrumPatternBoolArr[i] = !newStrumPatternBoolArr[i];
        setCurrentStrumPattern(new StrummingPattern(newStrumPatternBoolArr));
    }

    function toggleLockedStrum(i) {
        const newLockedStrums = lockedStrums.slice();
        newLockedStrums[i] = !newLockedStrums[i];
        setLockedStrums(newLockedStrums);
    }

    /* Randomizes strumming pattern while keeping selected strums the same.*/
    function randomize() {
        const newStrumPatternBoolArr = currentStrumPattern.strums
            .map((strum, i) => {
                if (!lockedStrums[i]) {
                    return Boolean(Math.random() < 0.5);
                }
                return strum;
            });
        setCurrentStrumPattern(new StrummingPattern(newStrumPatternBoolArr));
    }

    const strumList = currentStrumPattern.strums.map((strumBool, i) => {
        return (
            <Strum
                strumNum={i}
                selected={strumBool}
                locked={lockedStrums[i]}
                lockedOnClick={() => toggleLockedStrum(i)}
                strumOnClick={() => toggleStrum(i)}
                key={i}
            />
        );
    });

    return (
        <div className="custom-strumming-pattern-component">
            <div className="strumming-pattern-container">
                <div className="strumming-pattern">{strumList}</div>
            </div>
            <div className="button-container">
                <button
                    type="button"
                    onClick={() => randomize()}
                >
                    Randomize
                </button>
                <button
                    type="button"
                    onClick={() => props.saveStrumPattern(currentStrumPattern)}
                >
                    Save
                </button>
                <button
                    type="button"
                >
                    Reset
                </button>
            </div>
        </div>
    );
}

export default CustomStrummingPatternComponent;