class StrumPattern {
    /**
     * @constructor
     * @param {Boolean[]} strummingPatternBoolArr
     */
    constructor(strummingPatternBoolArr) {
        this.strums = strummingPatternBoolArr;
    }

    /**
     * Randomizes strumming pattern while keeping selected strums the same.
     * @param {Boolean[]} isStrumLockedBoolArr
     */
    randomize(isStrumLockedBoolArr) {

    }

    /**
     * Returns Number of strum on down strums or String "+" for up strums.
     * 1,3,5,7 – correspond to down (D) strums 1,2,3,4
     * 2,4,6,8 – correspond to up (U) strums '+'
     * @param {Number} i
     * @returns {Number|String}
     */
    static getStrumValue(i) {
        return i % 2 ? "+" : i / 2 + 1;
    }

    /**
     * Returns String of "U" for up strums or "D" for down strums.
     * 1,3,5,7 – correspond to down (D) strums 1,2,3,4
     * 2,4,6,8 – correspond to up (U) strums '+'
     * @param {Number} strumIndex
     * @param {Boolean} selectedBool
     * @returns {String}
     */
    static getStrumDirection(strumIndex, selectedBool = true) {
        return selectedBool
            ? strumIndex % 2 ? "U" : "D"
            : "-";
    }

    /**
     * Returns true if both StrummingPattern objects are equal, else returns false.
     * @param {StrummingPattern} first
     * @param {StrummingPattern} second
     */
    static isEqual(first, second) {
        // Compare array lengths
        if (first.strums.length !== second.strums.length)
            return false;

        // Compare each array index value
        return first.strums.every(
            (boolVal, i) => boolVal === second.strums[i]
        );
    }
}

export default StrumPattern;