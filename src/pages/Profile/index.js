import React, { useState, useEffect } from 'react';
import { Text, Image, Alert, ActivityIndicator } from 'react-native';
import { useDispatch, useSelector } from "react-redux";
import ImagePicker from 'react-native-image-picker';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view' //best kb lib

import { signOut } from "../../store/modules/auth/actions";
import { updateProfileRequest } from "../../store/modules/user/actions";

import Background from "../../components/background";
import { ContainerTop, Title, Container, AvatarView, AvatarImg, FormView, Form, ButtomView, ChangeButtom, LogoutButtom, LoadView } from './styles';
import Art2 from "../../assets/authFooter.png";

export default function Profile() {

  const userData = useSelector(state => state.user.profile);
  const loading = useSelector(state => state.user.loading);
  const dispatch = useDispatch();
  const [ name, setName ] = useState(userData.name);
  const [ email, setEmail ] = useState(userData.email);
  const [ avatar, setAvatar ] = useState(userData.avatar);
  const [ password, setPassword ] = useState('');
  const [ oldPassword, setOldPassword ] = useState('');

  const options = {
    Title: 'Select Avatar',
    storageOptions: {
      skipBackup: true,
      path: 'images',
    },
  };


  useEffect(() => {
    setOldPassword('');
    setPassword('');
  }, [userData]);

  function LogOut() {
    dispatch(signOut());
  }

  function handleSubmit() {
    if(email.length > 10 && password.length >= 6 && oldPassword.length >= 6 && name.length >= 0) {
      dispatch(updateProfileRequest({
        name,
        email,
        password,
        oldPassword,
        avatar
      }))
    } else {
      Alert.alert("Fill correctly")
    }
  };

  async function handlePickAvatar() {
    let result = ImagePicker.launchImageLibrary(options, (response) => {
      console.log('Response = ', response);

      if(response.didCancel) {
        console.tron.log('User cancelled image select');
      } else if(response.error) {
        console.tron.log('ImagePicker Error: ', response.error);
      } else {
        setAvatar(response.uri)
      }
      
    })
};

function LoadScreen() {
  return (
    <LoadView>
      <ActivityIndicator size="large" color="#EA5455" />
    </LoadView>
  )
}

  
  return (
    <Background>
      
      <Image
        source={Art2}
        style={{ position: "absolute", bottom: -325, right: -225 }}
        ></Image>
        <Image
        source={Art2}
        style={{ position: "absolute", bottom: -325, left: -225 }}
      ></Image>
      <KeyboardAwareScrollView>
      <ContainerTop>
        <Title>Profile</Title>
      </ContainerTop>

      <Container>
        { loading ? <LoadScreen /> : null }

        <AvatarView onPress={handlePickAvatar}>
          <AvatarImg source={{uri: avatar || 'https://api.adorable.io/avatars/200/abott@adorable.png'}} />
        </AvatarView>

        <FormView>
          <Form 
            value={name} 
            returnKeyType="next"
            onChangeText={setName} />
          <Form 
            value={email} 
            returnKeyType="next" 
            onChangeText={setEmail}/>
          <Form 
            value={oldPassword} 
            secureTextEntry 
            placeholder="Old password" 
            returnKeyType="next" 
            onChangeText={setOldPassword}/>
          <Form 
            value={password} 
            secureTextEntry 
            placeholder="New password" 
            returnKeyType="next" 
            onChangeText={setPassword}/>

          <ButtomView>
            <ChangeButtom onPress={handleSubmit}>
              <Text style={{ color: "#FFF", fontWeight: "500" }}>Save Changes</Text>
            </ChangeButtom>
            <LogoutButtom onPress={LogOut}>
              <Text style={{ color: "#FFF", fontWeight: "500" }}>Logout</Text></LogoutButtom>
            </ButtomView>
        </FormView>
      </Container>
      </KeyboardAwareScrollView>
    </Background>
  )
}