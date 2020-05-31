import { takeLatest, call, put, all, take } from "redux-saga/effects";
import firebase from "react-native-firebase";
import { Alert } from "react-native";

import PhotoUpload from "../../../services/PhotoUpload";
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
  const { name, email, password, avatar } = payload;
  let remoteUri = null;

  try {
    // Criar usuário com email e password
    const response = yield firebase.auth().createUserWithEmailAndPassword(email, password);
    const { uid } = response.user;

    // Adiciona um doc com o uid do usuário e os dados de nome, email e seu avatar
    let db = firebase.firestore().collection("Users").doc(uid);
    db.set({
      name: name,
      email: email,
      avatar: null
    });

    // // Adicionar avatar
    // if(avatar) {
    //   remoteUri = yield PhotoUpload(avatar, `avatars/${uid}`);
    //   db.set({ avatar: remoteUri }, { merge: true });
    // }

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