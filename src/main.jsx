import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./global_css/globals.scss";
import "./global_css/typography.scss";

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);
