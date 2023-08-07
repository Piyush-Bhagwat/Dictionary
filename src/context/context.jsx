import React, { useEffect, useState } from "react";
import Stack from "../extra/stack";

export const dictContext = React.createContext(null);

export default function DictContextProvider(props) {

    const [search, setSearch] = useState("hello");
    const [error, setError] = useState(false);
    const [darkMode, setDarkMode] = useState(true);
    const [history, setHistory] = useState([]);

    useEffect(()=>console.log("history: ", getStack()), [history]);
    useEffect(()=> setError(false), [search]);

    const toggleDarkMode = ()=>{
        setDarkMode((prev)=>!prev);
    }

    function push(element) {
        if (history[history.length - 1] !== element) {
            setHistory((prev) => [...prev, element]);
        }
    }

    function pop() {
        if (historyIsEmpty()) {
            return false;
        }
        let pser = history[history.length - 1];
        setHistory((prev) => {
            var array = [...prev]; // make a separate copy of the array
            var index = history.length - 1;
            array.splice(index, 1);
            return array;
        });
        return pser;
    }

    function historyIsEmpty() {
        return history.length == 0;
    }

    function getStack() {
        let str = "";
        history.map((his) => (str += `, ${his}`));
        return str;
    }

    const contextValue = {
        search,
        history,
        error,
        darkMode,
        setSearch,
        push,
        pop,
        getStack,
        historyIsEmpty,
        setError,
        toggleDarkMode
    };

    return (
        <dictContext.Provider value={contextValue}>
            {props.children}
        </dictContext.Provider>
    );
}
