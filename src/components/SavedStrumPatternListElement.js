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
                        onClick={() => props.moveListIndexFunc(props.listIndex, props.listIndex - 1)}
                    >
                        <FontAwesomeIcon
                            icon={faChevronUp}
                        />
                    </button>
                    <div className="saved-strum-pattern-list-element-index">
                        {props.listIndex + 1}
                    </div>
                    <button
                        onClick={() => props.moveListIndexFunc(props.listIndex, props.listIndex + 1)}
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
                    onClick={() => props.removeListIndexFunc(props.listIndex)}
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