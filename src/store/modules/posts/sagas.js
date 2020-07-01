import { takeLatest, put, all } from "redux-saga/effects";
import firebase from "react-native-firebase";
import { Alert } from "react-native";

import { PostSuccess } from "./actions";

export function* postIn({ payload, payload2 }) {
    const { form } = payload
    const { navigation } = payload2

    try {

        const db = firebase.firestore().collection("Posts").doc();
        yield db.set(form);

        yield put(PostSuccess(form));

        navigation.navigate('Home')
        
    } catch(err) {
        Alert.alert("Erro ao cadastrar usuário");
    }
}

export function* Delete({ payload }) {

    const element = payload.item

    try {
        
        yield firebase.firestore().collection("Posts").where("datapost", '==', element).get().then((querySnapshot) => {querySnapshot.forEach((doc) => doc.ref.delete())});
        
        yield Alert.alert("Post exclude")

    } catch(err) {
        Alert.alert("Delete error")
    }
}

export default all([
    takeLatest('@post/POST_REQUEST', postIn),
    takeLatest("@post/POST_DELETE", Delete)
]);