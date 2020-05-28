import React, { Component } from "react";
import { PersistGate } from "redux-persist/integration/react";
import { Provider } from "react-redux";
import { StatusBar } from "react-native";

import "./config/reactotronConfig";
import { store, persistor } from "./store";
import App from "./app";

export default class Index extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Provider store={store}>
                <PersistGate persistor={persistor}>
                    <StatusBar barStyle="light-content"backgroundColor="#7159c1" />
                    <App />
                </PersistGate>
            </Provider>
        )

    }
}

