import { takeLatest, call, put, all, take } from "redux-saga/effects";
import firebase from "react-native-firebase";
import { Alert } from "react-native";
// import FirebaseKeys from "../../../config/FireConfig";

import { signInSuccess } from "./actions";

export function* SignIn({ payload }) {
  const { email, password } = payload;

  try {
      const response = yield firebase.auth().signInWithEmailAndPassword(email, password);

      const { uid } = response.user

      yield put(signInSuccess(email, uid))

    } catch(err) {
      Alert.alert(err.message)
    }
};

export function* signUp({ payload }) {
  const { email, password } = payload;

  try {
    const response = yield firebase.auth().createUserWithEmailAndPassword(email, password);

    let db = firebase.firestore().collection("users").doc('Data');
    console.tron.log(db)

    db.set({
      name: 'Usuario',
      email: email,
      password: password
    })

  } catch(err) {
    Alert.alert("Erro ao cadastrar usuário");
  };
}

export function* signOut() {
  firebase.auth().signOut();
}

export default all([
    takeLatest('@auth/SIGN_IN_REQUEST', SignIn),
    takeLatest('@auth/SIGN_OUT', signOut),
    takeLatest('@auth/SIGN_UP_REQUEST', signUp)
]);