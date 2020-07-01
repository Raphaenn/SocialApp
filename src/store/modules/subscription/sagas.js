import { takeLatest, call, put, all } from 'redux-saga/effects';
import { Alert } from "react-native";

import { subscriptionSuccess } from "./actions";

export function* subscription({ payload }) {
    
    try {
        Alert.alert("This functionality is not yet available")
    } catch(err) {
        Alert.alert("Error")
    }
};

export default all([
    takeLatest('@subs/SUBSCRIPTION_REQUEST', subscription)
])