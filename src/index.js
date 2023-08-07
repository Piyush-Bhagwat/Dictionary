import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import DictContextProvider from "./context/context.jsx";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <React.StrictMode>
        <DictContextProvider>
            <App />
        </DictContextProvider>
    </React.StrictMode>
);
