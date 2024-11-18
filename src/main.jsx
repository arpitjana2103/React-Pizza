// import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
// import React from "react";
import { Provider } from "react-redux";
import store from "./store.js";

// createRoot(document.getElementById("root")).render(
//     <React.StrictMode>
//         <Provider store={store}>
//             <App />
//         </Provider>
//     </React.StrictMode>,
// );

createRoot(document.getElementById("root")).render(
    <Provider store={store}>
        <App />
    </Provider>,
);
