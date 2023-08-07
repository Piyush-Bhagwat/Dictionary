import React, { useContext } from "react";
import wnfLight from "../assets/wnf_light.svg";
import wnfDark from "../assets/wnf_dark.svg";
import { dictContext } from "../context/context";

const WordNotFound = () => {
    const { search, setSearch, historyIsEmpty, pop, setError, darkMode } = useContext(dictContext);

    const goBack = () => {
        setError(false);
        if (!historyIsEmpty()) {
            let prevSearch = pop();
            setSearch(prevSearch);
        }
    };
    return (
        <div className="wnf-container">
            <img src={darkMode ? wnfDark : wnfLight} alt="WordNotFound" />
            <h2>404</h2>
            <p>Word "{search}" Not Found</p>
            <button onClick={goBack}>Go Back</button>
        </div>
    );
};

export default WordNotFound;
