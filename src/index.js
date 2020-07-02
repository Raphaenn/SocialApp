import React, { Component } from "react";
import { PersistGate } from "redux-persist/integration/react";
import { Provider } from "react-redux";
import { StatusBar } from "react-native";
import CodePush from "react-native-code-push";
import OneSignal from "react-native-onesignal";

import "./config/reactotronConfig";
import { store, persistor } from "./store";
import App from "./app";

class Index extends Component {
    constructor(props) {
        super(props);
        OneSignal.init("8a5c7f1e-e9e3-4fd7-90a3-bc64c664acfa");
        OneSignal.addEventListener('received', this.onReceived);
        OneSignal.addEventListener('opened', this.onOpened);
        OneSignal.addEventListener('ids', this.onIds);
    }

    componentDidMount() {
        OneSignal.removeEventListener('received', this.onReceived);
        OneSignal.removeEventListener('opened', this.onOpened);
        OneSignal.removeEventListener('ids', this.onIds)
    }

    onReceived = (data) => {};

    onOpened = (notification) => {};

    onIds = (id) => {};

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

export default CodePush({
    checkFrequency: CodePush.CheckFrequency.ON_APP_RESUME,
})(Index)

