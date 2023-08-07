import React from "react";
import "../styles/content.css";
import PronounContainer from "./pronounContainer";

const MeaningContainer = ({ meanings=[{}] }) => {
    const renderMeanings = () => {
        // console.log("meanings: ",meanings);
        return (
            <>
                {meanings.map((mean, id) => {
                    return <PronounContainer meaning={mean} key={id+9} />;
                })}
            </>
        );
    };

    return (
        <div className="meanings">
            {renderMeanings()}
        </div>
    );
};

export default MeaningContainer;
