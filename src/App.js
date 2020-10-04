import React from 'react';
import logo from './logo.svg';
import './App.css';

import StrummingPatternBase from './components/StrummingPatternBase';

function App() {
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
            <StrummingPatternBase
                strummingPattern={[true, false, true, true, false, true, true, false]}
            />
            <div className="button-container">
                <button>Randomize</button>
                <button>Save</button>
            </div>
            <div className="saved-list-container">
                <h2>Saved Strumming Patterns</h2>
            </div>
        </div>
    );
}

export default App;
