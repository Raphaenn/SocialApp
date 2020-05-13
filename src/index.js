import React, { Component } from "react";
import { StatusBar } from "react-native";

import "./config/reactotronConfig";

import App from "./app";

export default class Index extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <>
                <StatusBar barStyle="light-content"backgroundColor="#7159c1" />
                <App />
            </>
        )

    }
}

