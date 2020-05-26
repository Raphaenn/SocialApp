import { takeLatest, call, put, all } from "redux-saga/effects";
import { Alert } from "react-native";

export function* SignIn({payload}) {
    console.tron.log("testando saga")
};

export default all([
    takeLatest('@auth/SIGN_IN_REQUEST', SignIn),
]);