import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

import StrummingPattern from './StrummingPattern';
import CustomStrummingPatternComponent from './components/CustomStrummingPatternComponent';
import SavedStrummingPatternListComponent from './components/SavedStrummingPatternListComponent';

function App(props) {
    const [savedStrumList, setSavedStrumList] = useState(props.savedStrumList);

    /**
     * Saves strumming pattern to list after checking if NOT already in saved list.
     * @param {StrummingPattern} strumPattern
     */
    function saveStrumPattern(strumPattern) {
        console.log(`Strum Pattern \n[${strumPattern.strums}]\nsaved to list`);
        // If strumPattern is already in saved list, return with message

        // Save strumPattern to saved list
        let newSavedStrumList = savedStrumList.slice();
        newSavedStrumList.push(strumPattern);
        setSavedStrumList(newSavedStrumList);
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
            <CustomStrummingPatternComponent
                strummingPattern={new StrummingPattern([true, false, true, true, false, true, true, false])}
                saveStrumPattern={saveStrumPattern}
            />
            <SavedStrummingPatternListComponent
                savedStrumList={props.savedStrumList}
            />
        </div>
    );
}

export default App;
