import React from "react";
import "../styles/content.css";

const WordDisplay = ({ word, phonetic, url}) => {
    return (
        <div className="word-display">
            <div className="main">
                <h1>{word}</h1>
                <a href={url} target="blank" className="url-btn"><i className="fa-solid fa-link"></i></a>
            </div>
            <p className="phonetic">{phonetic}</p>
        </div>
    );
};

export default WordDisplay;
