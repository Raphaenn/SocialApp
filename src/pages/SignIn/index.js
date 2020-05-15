import React from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Image, StatusBar, LayoutAnimation } from "react-native";

import Art1 from "../../assets/authHeader.png";
import Art2 from "../../assets/authFooter.png";
import Logo from "../../assets/loginLogo.png";

import { Container, Title, Form, InputTitle, Space1, LogButton, LogButton2, Content } from './styles';

export default function SignIn({ navigation }) {

  return (
    <Container>
      <Image
        source={Art1}
        style={{ marginTop: -176, marginLeft: -50 }}
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
                // autoCapitalize="none"
                // onChangeText={email => this.setState({ email })}
                // value={this.state.email}
                ></Space1>
            </View>

            <View style={{ marginTop: 32 }}>
            <InputTitle>Passaword</InputTitle>
                <Space1
                // autoCapitalize="none"
                // onChangeText={email => this.setState({ email })}
                // value={this.state.email}
                ></Space1>
            </View>

            <LogButton onPress={() => navigation.navigate("Home")}>
              <Content style={{ color: "#FFF", fontWeight: "500" }}>Sign in</Content>
             </LogButton>

            <LogButton2
            style={{ alignSelf: "center", marginTop: 32 }}
            onPress={() => navigation.navigate("Dash")}
            >
              <Content style={{ color: "#414959", fontSize: 13 }}> New to SocialApp? 
              <Content style={{ fontWeight: "500", color: "#E9446A" }}> Sign up</Content>
              </Content>
            </LogButton2>

        </Form>

    </Container>
)};