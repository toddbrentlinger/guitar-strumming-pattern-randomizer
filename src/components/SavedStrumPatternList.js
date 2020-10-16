import React from 'react';
import SavedStrumPatternListElement from './SavedStrumPatternListElement';
import './SavedStrumPatternList.css';
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
            <button
                type="button"
                onClick={() => props.clearListFunc()}
            >
                Clear List
            </button>
            <button>Save as PDF</button>
            <ol className="saved-strumming-pattern-list-container">
                {strumPatternList}
            </ol>
        </div>
    );
}

export default SavedStrumPatternList;