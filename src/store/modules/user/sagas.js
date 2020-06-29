import { takeLatest, call, put, all } from 'redux-saga/effects';
import { Alert } from "react-native";
import firebase from "react-native-firebase";

import { updateProfileSuccess } from "./actions";
import PhotoUpload from "../../../services/PhotoUpload";

export function* updateProfile({ payload }) {
    
    const {email: newEmail, name, oldPassword, password, avatar} = payload.data;

      try {

        // Atualizar authentication
           function reauthenticate() {
            var user = firebase.auth().currentUser;
            var cred = firebase.auth.EmailAuthProvider.credential(
                user.email, oldPassword);
            return user.reauthenticateWithCredential(cred);
          }
        
          // preciso pegar o email e senhas atuais
        const changePassword = () => {
            reauthenticate(oldPassword).then(() => {
              var user = firebase.auth().currentUser;
              user.updatePassword(password).then(() => {
                console.tron.log("change password done")
              }).catch((error) => { Alert.alert("Error") });
            }).catch((error) => { Alert.alert("Error") });
        }

        const changeEmail = () => {
            reauthenticate(oldPassword).then(() => {
              var user = firebase.auth().currentUser;
              user.updateEmail(newEmail).then(() => {
                console.tron.log("change email done")
              }).catch((error) => { Alert.alert("Error") });
            }).catch((error) => { Alert.alert("Error") });
        }

        yield changeEmail();
        if( oldPassword != password) {
          yield changePassword()
        }
        

        const dados = yield firebase.auth().currentUser;        
        const { uid } = dados;

        // salvar no storage firebase através da função PhotoUpload, o que retorna a url para a const abaixo.
        const remoteUri = yield PhotoUpload(avatar, `avatars/${uid}`);
          
        // Atualizar DB Users
        let db = firebase.firestore().collection("Users").doc(uid);
        yield db.update({
        name: name,
        email: newEmail,
        avatar: remoteUri
        }); 

        const userData = {
            uid: uid,
            email: newEmail,
            name: name,
            avatar: avatar
        }
        
        yield put(updateProfileSuccess(userData))

        yield Alert.alert("Profile updated!");
        
      } catch(err) {
        Alert.alert("Erro ao atualizar usuário");
      }
};

export default all([
    takeLatest("@user/UPDATE_PROFILE_REQUEST", updateProfile)
]);