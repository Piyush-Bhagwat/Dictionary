import React, { useContext, useState } from "react";
import "../styles/navBar.css";
import { dictContext } from "../context/context";

function NavBar() {
    const { search, setSearch, push, pop, setError, historyIsEmpty, toggleDarkMode, darkMode } =
        useContext(dictContext);

    const [searchInput, setInput] = useState("");

    const changeInput = (e) => {
        setInput(e.target.value);
    };

    const updateSearch = () => {
        push(search);
        setSearch(searchInput.toLowerCase());
    };

    const handleEnter = (e) => {
        if (e.key === "Enter") {
            updateSearch();
        }
    };

    const goBack = () => {
        if (!historyIsEmpty()) {
            let prevSearch = pop();
            setError(false);
            setInput(prevSearch);
            setSearch(prevSearch);
        }
    };

    return (
        <div className="nav">
            <div className="upper-nav">
                <div className="brand-name">Dictionary</div>

                <div className="creditantial">
                    made by{" "}
                    <a
                        href="https://piyush-bhagwat.github.io/PortfolioWebsite/"
                        target="blank"
                    >
                        abNORMAL
                    </a>
                </div>
            </div>

            <div className="lower-nav">
                <button onClick={goBack} className="back-btn">
                    <i className="fa-solid fa-arrow-left"></i>
                </button>
                <div className="search-box">
                    <input
                        type="text"
                        placeholder="Search"
                        value={searchInput}
                        onChange={changeInput}
                        onKeyPress={handleEnter}
                    />
                    <button className="search-btn" onClick={updateSearch}>
                        <i className="fa-solid fa-magnifying-glass"></i>
                    </button>
                </div>
                
                <button onClick={toggleDarkMode} className="dark-btn">
                    {darkMode ? (
                        <i class="fa-regular fa-moon"></i>
                    ) : (
                        <i class="fa-regular fa-sun"></i>
                    )}
                </button>
            </div>
        </div>
    );
}

export default NavBar;
