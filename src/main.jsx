import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./global_css/globals.scss";
import "./global_css/typography.scss";
import "./global_css/utility.scss";

// redux
import { Provider } from "react-redux";
import { store } from "./redux/store.js";

ReactDOM.createRoot(document.getElementById("root")).render(
	<React.StrictMode>
		<Provider store={store}>
			<App />
		</Provider>
	</React.StrictMode>
);
