import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

import StrumPattern from './StrumPattern';
import CustomStrumPattern from './components/CustomStrumPattern';
import SavedStrumPatternList from './components/SavedStrumPatternList';

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

    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <p>
                  Edit <code>src/App.js</code> and save to reload.
                </p>
                <a
                  className="App-link"
                  href="https://reactjs.org"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Learn React
                </a>
            </header>
            <CustomStrumPattern
                strummingPattern={new StrumPattern([true, false, true, true, false, true, true, false])}
                saveStrumPattern={saveStrumPattern}
            />
            <SavedStrumPatternList
                savedStrumList={savedStrumList}
                clearListFunc={clearSavedStrumList}
            />
        </div>
    );
}

export default App;
