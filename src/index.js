import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";

import "bootstrap/dist/css/bootstrap.css"; ///This is how we import bootstap css into out application.
///Bootstrap is a css library that gives the app a modern look and feel.

///ReactDOM.render(<App />, document.getElementById("root")); ///Insted of "App" we use "Counter"
ReactDOM.render(<App />, document.getElementById("root")); ///

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
