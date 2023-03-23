import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";

import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js";
import { Provider } from "react-redux";
import { persistor, store } from "./app/store.js";
import { BrowserRouter } from "react-router-dom";
import { PersistGate } from "redux-persist/integration/react";

ReactDOM.createRoot(document.getElementById("root")).render(
    <Provider store={store}>
        <BrowserRouter>
            <PersistGate loading={'loading'} persistor={persistor}>
                <App />
            </PersistGate>
        </BrowserRouter>
    </Provider>
);
