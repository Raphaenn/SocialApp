import React, { useState, useEffect } from 'react';
import { View, Text, Image, ActivityIndicator } from "react-native";
import { useDispatch, useSelector } from "react-redux";

import { signInRequest } from "../../store/modules/auth/actions";


import Art1 from "../../assets/authHeader.png";
import Art2 from "../../assets/authFooter.png";
import Logo from "../../assets/loginLogo.png";
import Back from "../../assets/back.png";

import { Container, Title, Form, InputTitle, Space1, LogButton, LogButton2, Content } from './styles';

export default function SignIn({ navigation }) {

  const [ email, setEmail ] = useState('');
  const [ password, setPassword ] = useState('');
  const loading = useSelector(state => state.auth.loading);
  const dispatch = useDispatch();

  function login() {
    dispatch(signInRequest(email, password));
  };

  return (
    <Container>
      <Image
        source={Back}
        style={{ marginTop: -176, marginLeft: -50, opacity: 0.8 }}
      ></Image>
      <Image
        source={Art2}
        style={{ position: "absolute", bottom: -325, right: -225 }}
      ></Image>
      <Image
        source={Logo}
        style={{ marginTop: -110, alignSelf: "center" }}
      ></Image>
      <Title>{`Hello Again.\nWelcome Back`}</Title>

        <Form>
          <View>
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

            <LogButton onPress={() => login()}>
              {
                loading ? <ActivityIndicator size="small" color="#FFF" /> : 
                <Content style={{ color: "#FFF", fontWeight: "500" }}>Sign in</Content>
              }
             </LogButton>

            <LogButton2
            style={{ alignSelf: "center", marginTop: 32 }}
            onPress={() => navigation.navigate("SignUp")}
            >
              <Content style={{ color: "#414959", fontSize: 13 }}> New to SocialApp? 
              <Content style={{ fontWeight: "500", color: "#E9446A" }}> Sign up</Content>
              </Content>
            </LogButton2>

        </Form>

    </Container>
)};