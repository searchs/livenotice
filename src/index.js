import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

const DATA = [
  { id: "notice-0", name: "Men of Valour", completed: true },
  { id: "notice-1", name: "Praise Night", completed: true },
  { id: "notice-2", name: "Bowling Team - Juniors", completed: true },
  { id: "notice-3", name: "Fast Tennis", completed: false }
];

ReactDOM.render(
  <React.StrictMode>
    <App notices={DATA} />
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
