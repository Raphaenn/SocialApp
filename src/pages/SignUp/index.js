import React, { useState } from 'react';
import { View, Text, Image, StatusBar, ActivityIndicator } from "react-native";
import ImagePicker from 'react-native-image-picker';
import Icon from "react-native-vector-icons/Ionicons";
import { useDispatch, useSelector } from "react-redux";

import { signUpRequest } from "../../store/modules/auth/actions";

import Art1 from "../../assets/authHeader.png";
import Art2 from "../../assets/authFooter.png";
import Back from "../../assets/back.png";

import { Container, Title, BackButton, TopDiv, AvatarInput, Form, InputTitle, Space1, LogButton, LogButton2, Content } from './styles';

export default function SignUp({ navigation }) {

  const diapatch = useDispatch();
  const loading = useSelector(state => state.auth.loading)
  const [ name, setName ] = useState('');
  const [ email, setEmail ] = useState('');
  const [ password, setPassword ] = useState('');
  const [ avatar, setAvatar ] = useState(null);
  const options = {
    Title: 'Select Avatar',
    storageOptions: {
      skipBackup: true,
      path: 'images',
    },
  };

   function Register() {
    diapatch(signUpRequest(name, email, password, avatar))
  };

  async function handlePickAvatar() {
    let result = ImagePicker.launchImageLibrary(options, (response) => {
      console.tron.log('Response = ', response);
      if(response.didCancel) {
        console.tron.log('User cancelled image select');
      } else if(response.error) {
        console.tron.log('ImagePicker Error: ', response.error);
      } else {
        setAvatar(response.uri)
      }
      
    })
};

  return (
    <Container>
      <StatusBar barStyle="light-content"></StatusBar>
      <Image
        source={Back}
        style={{ marginTop: -116, marginLeft: -50 }}
      ></Image>
      <Image
        source={Art2}
        style={{ position: "absolute", bottom: -325, right: -225 }}
      ></Image>
      <BackButton onPress={() => navigation.navigate('SignIn')}>
        <Icon name="ios-arrow-round-back" size={32} color="#FFF"/>
      </BackButton>
      
      <TopDiv>
        <Title>{`Hello!\n Sign up to get started.`}</Title>
        <AvatarInput onPress={handlePickAvatar}>
          <Image source={{ uri: avatar || 'https://api.adorable.io/avatars/200/abott@adorable.png' }} style={{ position: "absolute", width: 100, height: 100, borderRadius: 50 }}/>
          <Icon name="ios-add" size={40} color="#fff" style={{marginTop: 6, marginLeft: 2}} />
        </AvatarInput>
      </TopDiv>
      
      <View style={{height: 72, alignItems: "center", justifyContent: "center", marginHorizontal: 30}}>
        <Text style={{color: "#E9446A", fontSize: 13, fontWeight: "600", textAlign: "center"}}></Text>
      </View>

        <Form>

        <View>
          <InputTitle>Full Name</InputTitle>
              <Space1
              autoCapitalize="none"
              onChangeText={setName}
              value={name}
              ></Space1>
          </View>

          <View style={{ marginTop: 32 }}>
            <InputTitle>Email Address</InputTitle>
                <Space1
                autoCapitalize="none"
                onChangeText={setEmail}
                value={email}
                ></Space1>
            </View>

            <View style={{ marginTop: 32 }}>
            <InputTitle>Passaword</InputTitle>
                <Space1
                secureTextEntry
                autoCapitalize="none"
                onChangeText={setPassword}
                value={password}
                ></Space1>
            </View>

            <LogButton onPress={() => Register()}>
              {loading ? <ActivityIndicator size="small" color="#FFF" /> : 
              <Content style={{ color: "#FFF", fontWeight: "500" }}>Sign Up</Content>}
             </LogButton>

            <LogButton2
            style={{ alignSelf: "center", marginTop: 32 }}
            onPress={() => navigation.navigate("SignIn")}
            >
              <Content style={{ color: "#414959", fontSize: 13 }}> Already have an account?
              <Content style={{ fontWeight: "500", color: "#E9446A" }}> Sign in</Content>
              </Content>
            </LogButton2>

        </Form>
    </Container>
)};