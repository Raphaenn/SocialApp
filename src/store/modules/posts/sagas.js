import { takeLatest, put, all } from "redux-saga/effects";
import firebase from "react-native-firebase";
import { Alert } from "react-native";

// import { PostRequest, PostSuccess } from "./actions";

export function* postIn({ payload, payload2 }) {
    const { form } = payload
    const { navigation } = payload2

    try {

        const db = firebase.firestore().collection("Posts").doc();
        yield db.set(form);

        navigation.navigate('Home')
        
    } catch(err) {
        Alert.alert("Erro ao cadastrar usuário");
    }
}

export default all([
    takeLatest('@post/POST_REQUEST', postIn)
]);