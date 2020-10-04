"use strict";

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