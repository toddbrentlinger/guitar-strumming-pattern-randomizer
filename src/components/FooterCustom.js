import React from 'react';
import './FooterCustom.css';

function FooterCustom() {
    function getCopyrightString() {
        const currentYear = new Date().getFullYear();
        return currentYear === 2020
            ? 2020
            : `2020-${currentYear}`;
    }

    return (
        <footer className="App-footer">
            <p>
                <small>
                    Source Code &copy; <time id="copyright-current-year">{getCopyrightString()}</time> Todd Brentlinger, Santa Cruz, CA, USA. All Rights Reserved.
            </small>
            </p>
        </footer>
    );
}

export default FooterCustom;