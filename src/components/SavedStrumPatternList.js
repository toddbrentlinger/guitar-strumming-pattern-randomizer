import React from 'react';
import SavedStrumPatternListElement from './SavedStrumPatternListElement';
import './SavedStrumPatternList.css';
import ButtonRipple from './ButtonRipple';
import html2pdf from 'html2pdf.js';
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

    function saveListAsPDF() {
        const element = document.getElementById('saved-strumming-pattern-list');
        const opt = {
            margin: 20,
            filename: 'Saved Strumming Patterns.pdf',
            html2canvas: {
                onclone: null, // TODO: Callback func to add header and increase space between index and pattern
            },
            jsPDF: {
                format: 'letter',
            },
        };
        // New Promise-based usage
        //html2pdf().set(opt).from(element).save();
        // Old monolithic-style usage
        html2pdf(element, opt);
    }

    return (
        <div className="saved-list-container">
            <h2>Saved Strumming Patterns</h2>
            <ButtonRipple onClick={props.clearListFunc}>Clear List</ButtonRipple>
            <ButtonRipple onClick={saveListAsPDF}>Save as PDF</ButtonRipple>
            <ol
                id="saved-strumming-pattern-list"
                className="saved-strumming-pattern-list-container"
            >
                {strumPatternList}
            </ol>
        </div>
    );
}

export default SavedStrumPatternList;