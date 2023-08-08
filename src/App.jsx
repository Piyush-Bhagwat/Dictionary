import react, { useContext, useEffect, useState } from "react";
import axios from "axios";
import "./styles/App.css";
import NavBar from "./Components/navbar";
import WordDisplay from "./Components/wordDisplay";
import MeaningContainer from "./Components/meaning";
import { dictContext } from "./context/context";
import WordNotFound from "./Components/wordNotFound";

function App() {
    const [data, setData] = useState({ loaded: false, sourceUrls: [] });
    const { search, error, setError, darkMode } = useContext(dictContext);

    const getData = async () => {
        axios
            .get(`https://api.dictionaryapi.dev/api/v2/entries/en/${search}`)
            .then((d) => {
                setData(d.data[0]);
            })
            .catch((er) => {
                if (er.response.status === 404) {
                    setError(true);
                }
            });
    };

    useEffect(() => getData, []);

    useEffect(() => {
        getData();
        console.log("search Updated: ", search);
    }, [search]);

    return (
        <div className={`body ${darkMode ? "dark-mode" : "light-mode"}`}>
            <div className="background"></div>
            <NavBar />
            {error ? (
                <WordNotFound />
            ) : (
                <div className="content">
                    <WordDisplay
                        word={data.word}
                        phonetic={data.phonetic}
                        url={data.sourceUrls[0]}
                    />

                    <MeaningContainer meanings={data.meanings} />
                </div>
            )}
            
        </div>
    );
}

export default App;
