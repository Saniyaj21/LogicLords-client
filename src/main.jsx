import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./global_css/globals.scss";
import "./global_css/typography.scss";
import "./global_css/utility.scss";

// redux
import { Provider } from "react-redux";
import { store } from "./redux/store.js";

import { GoogleOAuthProvider } from "@react-oauth/google";

ReactDOM.createRoot(document.getElementById("root")).render(
	
		<Provider store={store}>
			<GoogleOAuthProvider clientId='181727105626-ivaehbp4q8o6vuj0pjkfnunqqh15dkcl.apps.googleusercontent.com'>
				<App />
			</GoogleOAuthProvider>
		</Provider>
	
);

// heelow
// in local setup use this
export const base_url = "http://localhost:8080";


// in production code push this
//  export const base_url = 'https://logiclords-server.onrender.com';
