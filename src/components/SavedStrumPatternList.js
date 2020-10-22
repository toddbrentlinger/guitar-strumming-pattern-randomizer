import React from 'react';
import SavedStrumPatternListElement from './SavedStrumPatternListElement';
import './SavedStrumPatternList.css';
import ButtonRipple from './ButtonRipple';
/**
 * @param {Object} props
 * props = {
 *     savedStrumList: {StrumPattern[]}
 * }
 */
function SavedStrumPatternList(props) {
    const strumPatternList = props.savedStrumList.map((strumPattern, i) => {
        return (
            <li key={i}>
                <SavedStrumPatternListElement
                    strumPattern={strumPattern}
                    listIndex={i}
                    moveListIndexFunc={props.moveListIndexFunc}
                    removeListIndexFunc={props.removeListIndexFunc}
                />
            </li>
        );
    });

    return (
        <div className="saved-list-container">
            <h2>Saved Strumming Patterns</h2>
            <ButtonRipple onClick={props.clearListFunc}>Clear List</ButtonRipple>
            <ButtonRipple>Save as PDF</ButtonRipple>
            <ol className="saved-strumming-pattern-list-container">
                {strumPatternList}
            </ol>
        </div>
    );
}

export default SavedStrumPatternList;