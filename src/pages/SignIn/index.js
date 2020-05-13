import React from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Image, StatusBar, LayoutAnimation } from "react-native";

import Art1 from "../../assets/authHeader.png";
import Art2 from "../../assets/authFooter.png";
import Logo from "../../assets/loginLogo.png";

import { Container, Title, Form, InputTitle, Space1, Space2 } from './styles';

export default function SignIn() {

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
        </Form>

    </Container>
)};