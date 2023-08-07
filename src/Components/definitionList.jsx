import React, { useContext } from "react";
import { dictContext } from "../context/context";

const DefinitionList = ({ def = {} }) => {
    // console.log("symn", def.synonyms.length );
    // console.log(def.example);

    const { search, setSearch, push } = useContext(dictContext);
    const updateSearch = (word) => {
        push(search);
        setSearch(word.toLowerCase())
    }

    const renderSynoms = () => {
        return (
            <div className="synonym-container">
                {def.synonyms.map((syn) => {
                    return (
                        <button
                            onClick={()=>updateSearch(syn)}
                            className="synonym"
                            key={Math.random()}
                        >
                            {syn}
                        </button>
                    );
                })}
            </div>
        );
    };

    return (
        <div className="definition-list-item">
            <p>{def.definition}</p>

            {def.example !== undefined && (
                <div className="example">
                    <p><i className="fa-solid fa-caret-right"></i>{def.example}</p>
                </div>
            )}
            {def.synonyms.length !== 0 && renderSynoms()}
        </div>
    );
};

export default DefinitionList;
