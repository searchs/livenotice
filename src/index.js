import React from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

const noticesData = [
    { id: "notice-0", name: "Men of Valour", completed: true },
    { id: "notice-1", name: "Praise Night", completed: true },
    { id: "notice-2", name: "Bowling Team - Juniors", completed: true },
    { id: "notice-3", name: "Fast Tennis", completed: false },
    { id: "notice-4", name: "Fishing on land", completed: false },
];

const container = document.getElementById("root");
const root = createRoot(container);

root.render(
    <React.StrictMode>
        <App notices={noticesData} />
    </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
