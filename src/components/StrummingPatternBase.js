import React from 'react';
import './StrummingPatternBase.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLock, faLockOpen } from '@fortawesome/free-solid-svg-icons';

class StrummingPattern {
    /**
     * @constructor
     * @param {Boolean[]} strummingPatternBoolArr
     */
    constructor(strummingPatternBoolArr) {
        this.boolArr = strummingPatternBoolArr;
    }
    /**
     * Returns Number of strum on down strums or String "+" for up strums.
     * @param {Number} i
     * @returns {Number|String}
     */
    static getStrumValue(i) {
        return i % 2 ? "+" : i / 2 + 1;
    }
    /**
     * Returns String of "U" for up strums or "D" for down strums.
     * @param {Number} i
     * @returns {String}
     */
    static getStrumDirection(i) {
        return i % 2 ? "U" : "D";
    }

    /**
     * Returns true if both StrummingPattern objects are equal, else returns false.
     * @param {StrummingPattern} first
     * @param {StrummingPattern} second
     */
    static isEqual(first, second) {
        // Compare array lengths
        if (first.boolArr.length !== second.boolArr.length)
            return false;

        // Compare each array index value
        return first.boolArr.every(
            (boolVal, i) => boolVal === second.boolArr[i]
        );
    }
}

function Strum(props) {
    /* props.strumNum:
     * 1,3,5,7 – correspond to down (D) strums 1,2,3,4
     * 2,4,6,8 – correspond to up (U) strums '+'
     */
    return (
        <div className="strum-container">
            <FontAwesomeIcon icon={faLockOpen} style={{ color: "gray" }} />
            <div className="strum-num">{props.strumNum % 2 ? "+" : props.strumNum/2 + 1}</div>
            <div className="strum-direction">{props.strumNum % 2 ? "U" : "D"}</div>
        </div>
    );
}

function strummingPatternBase(props) {
    // Ex. D Du u D = [true, false, true, true, false, true, true, false]
    //const strummingPattern = props.strummingPattern;

    const strumList = props.strummingPattern.map((strumBool, i) => {
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