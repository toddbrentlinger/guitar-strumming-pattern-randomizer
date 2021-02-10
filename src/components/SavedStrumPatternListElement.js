import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronUp, faChevronDown, faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import SavedStrumPattern from './SavedStrumPattern';
import './SavedStrumPatternListElement.css';

function SavedStrumPatternListElement(props) {
    return (
        <section className="saved-strum-pattern-list-element-container">
            <div className="flex-container">
                <div className="saved-strum-pattern-list-element-button-container">
                    <button
                        //data-html2canvas-ignore
                        onClick={() => props.moveListIndexFunc(props.listIndex, props.listIndex - 1)}
                        aria-label={`Move list item ${props.listIndex} up`}
                        className="button-ripple"
                        type="button"
                    >
                        <FontAwesomeIcon
                            icon={faChevronUp}
                        />
                    </button>
                    <div className="saved-strum-pattern-list-element-index">
                        {props.listIndex + 1}
                    </div>
                    <button
                        //data-html2canvas-ignore
                        onClick={() => props.moveListIndexFunc(props.listIndex, props.listIndex + 1)}
                        aria-label={`Move list item ${props.listIndex} down`}
                        className="button-ripple"
                        type="button"
                    >
                        <FontAwesomeIcon
                            icon={faChevronDown}
                        />
                    </button>
                </div>
                <SavedStrumPattern
                    strumPattern={props.strumPattern}
                />
                <button
                    data-html2canvas-ignore
                    onClick={() => props.removeListIndexFunc(props.listIndex)}
                    aria-label={`Remove list item ${props.listIndex}`}
                    className="button-ripple"
                    type="button"
                >
                    <FontAwesomeIcon
                        icon={faTrashAlt}
                    />
                </button>
            </div>
        </section>
    );
}

export default SavedStrumPatternListElement;