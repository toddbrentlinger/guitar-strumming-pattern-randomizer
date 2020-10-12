import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronUp, faChevronDown } from '@fortawesome/free-solid-svg-icons';
import SavedStrumPattern from './SavedStrumPattern';
import './SavedStrumPatternListElement.css';

function SavedStrumPatternListElement(props) {
    return (
        <section className="saved-strum-pattern-list-element-container">
            <div className="saved-strum-pattern-list-element-button-container">
                <button>
                    <FontAwesomeIcon
                        icon={faChevronUp}
                    />
                </button>
                <div className="saved-strum-pattern-list-element-index">
                    {props.listIndex}
                </div>
                <button>
                    <FontAwesomeIcon
                        icon={faChevronDown}
                    />
                </button>
            </div>
            <SavedStrumPattern
                strumPattern={props.strumPattern}
            />
        </section>
    );
}

export default SavedStrumPatternListElement;