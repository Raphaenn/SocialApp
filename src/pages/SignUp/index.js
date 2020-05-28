import React, { useState } from 'react';
import { View, Text, Image, StatusBar } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import { useDispatch } from "react-redux";

import { signUpRequest } from "../../store/modules/auth/actions";

import Art1 from "../../assets/authHeader.png";
import Art2 from "../../assets/authFooter.png";
import Logo from "../../assets/loginLogo.png";

import { Container, Title, BackButton, TopDiv, AvatarInput, Form, InputTitle, Space1, LogButton, LogButton2, Content } from './styles';

export default function SignUp({ navigation }) {

  const diapatch = useDispatch();
  const [ email, setEmail ] = useState('');
  const [ password, setPassword ] = useState('');

   function Register() {
    diapatch(signUpRequest(email, password))
    
  };

  return (
    <Container>
      <StatusBar barStyle="light-content"></StatusBar>
      <Image
        source={Art1}
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
        <AvatarInput>
          <Image style={{ position: "absolute", width: 100, height: 100, borderRadius: 50 }}/>
          <Icon name="ios-add" size={40} color="#fff" style={{marginTop: 6, marginLeft: 2}} />
        </AvatarInput>
      </TopDiv>
      
      <View style={{height: 72, alignItems: "center", justifyContent: "center", marginHorizontal: 30}}>
        <Text style={{color: "#E9446A", fontSize: 13, fontWeight: "600", textAlign: "center"}}></Text>
      </View>

        <Form>

        {/* <View>
          <InputTitle>Full Name</InputTitle>
              <Space1
              autoCapitalize="none"
              onChangeText={setEmail}
              value={email}
              ></Space1>
          </View> */}

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
                autoCapitalize="none"
                onChangeText={setPassword}
                value={password}
                ></Space1>
            </View>

            <LogButton onPress={() => Register()}>
              <Content style={{ color: "#FFF", fontWeight: "500" }}>Sign Up</Content>
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