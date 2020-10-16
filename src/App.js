import React, { useState } from 'react';
//import logo from './logo.svg';
import './App.css';

import StrumPattern from './StrumPattern';
import CustomStrumPattern from './components/CustomStrumPattern';
import SavedStrumPatternList from './components/SavedStrumPatternList';

import FooterCustom from './components/FooterCustom';

function App(props) {
    const [savedStrumList, setSavedStrumList] = useState(props.savedStrumList);

    /**
     * Saves strumming pattern to list after checking if NOT already in saved list.
     * @param {StrumPattern} strumPattern
     */
    function saveStrumPattern(strumPattern) {
        // If strumPattern is already in saved list, return with message

        // Save strumPattern to saved list
        let newSavedStrumList = savedStrumList.slice();
        newSavedStrumList.push(strumPattern);
        setSavedStrumList(newSavedStrumList);
    }

    function clearSavedStrumList() {
        // Open message box asking User, "Are you sure? Y/N"

        if (savedStrumList.length) {
            setSavedStrumList([]);
        }
    }

    /**
     * Moves one element from savedStrumList from old index to new index.
     * @param {Number} oldIndex
     * @param {Number} newIndex
     */
    function moveSaveStrumListIndex(oldIndex, newIndex) {
        /* TODO:
         * Check indices and compare to array length
         * EX. If parameters (0, -1):
         *     move first element to last element
         * EX. If paramters (arr.length, arr.length+1):
         *     move last element to first element
         */

        let newArr = savedStrumList.slice();
        newArr.splice(newIndex, 0, newArr.splice(oldIndex, 1)[0]);
        setSavedStrumList(newArr);
    }

    /**
     * Removes provided index from savedStrumList.
     * @param {Number} indexToRemove
     */
    function removeSavedStrumListIndex(indexToRemove) {
        // Check index and compare to array length

        let newArr = savedStrumList.slice();
        newArr.splice(indexToRemove, 1);
        setSavedStrumList(newArr);
    }

    return (
        <div className="App">
            <header className="App-header">
                <h1>Guitar Strumming Pattern Randomizer</h1>
            </header>
            <CustomStrumPattern
                strummingPattern={new StrumPattern([true, false, true, true, false, true, true, false])}
                saveStrumPattern={saveStrumPattern}
            />
            <SavedStrumPatternList
                savedStrumList={savedStrumList}
                clearListFunc={clearSavedStrumList}
                moveListIndexFunc={moveSaveStrumListIndex}
                removeListIndexFunc={removeSavedStrumListIndex}
            />
            <FooterCustom />
        </div>
    );
}

export default App;
