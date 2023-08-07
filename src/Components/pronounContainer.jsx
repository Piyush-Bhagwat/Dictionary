import React from "react";
import "../styles/content.css";
import DefinitionList from "./definitionList";

const PronounContainer = ({ meaning = {} }) => {
    const renderDef = () => {
        if (meaning.definitions !== undefined) {
            // console.log(false);
            return (
                <ul className="def-list">
                    {meaning.definitions.map((def, id) => (
                        <li key={id+90}><DefinitionList def={def}/></li>
                    ))}
                </ul>
            );
        }
    };

    return (
        <div className="pronoun-meaning">
            <h2 className="title">{meaning.partOfSpeech}</h2>
            <div className="pronoun-body">
                {renderDef()}
            </div>
        </div>
    );
};

export default PronounContainer;
