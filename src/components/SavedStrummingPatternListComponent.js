import React, { useState } from 'react';
import SavedStrummingPatternComponent from './SavedStrummingPatternComponent';
import './SavedStrummingPatternListComponent.css';

/**
 * @param {Object} props
 * props:
 * - savedStrumList: {StrummingPatterm[]}
 */
function SavedStrummingPatternListComponent(props) {
    const [savedStrumList, setSavedStrumList] = useState(props.savedStrumList);

    const strumPatternList = savedStrumList.map((strumPattern, i) => {
        return (
            <SavedStrummingPatternComponent
                strumPattern={strumPattern}
                key={i}
            />
        );
    });

    return (
        <div className="saved-list-container">
            <h2>Saved Strumming Patterns</h2>
            <button>Clear List</button>
            <button>Save as PDF</button>
            <ol className="saved-strumming-pattern-list-container">
                {strumPatternList}
            </ol>
        </div>
    );
}

export default SavedStrummingPatternListComponent;