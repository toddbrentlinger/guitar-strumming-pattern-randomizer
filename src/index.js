import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

import StrumPattern from './StrumPattern';

// Check localStorage for saved strum pattern list
const SAVED_STRUM_PATTERN_LIST = [
    new StrumPattern([true, false, true, true, false, true, true, false]),
    new StrumPattern([true, false, true, false, true, true, true, false]),
    new StrumPattern([true, false, true, false, true, false, true, false]),
];

ReactDOM.render(
    <React.StrictMode>
        <App savedStrumList={SAVED_STRUM_PATTERN_LIST} />
    </React.StrictMode>,
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
