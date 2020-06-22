import React from 'react';
import { View, Text, Image } from 'react-native';
import { useDispatch, useSelector } from "react-redux";

import { signOut } from "../../store/modules/auth/actions";

import Background from "../../components/background";
import { ContainerTop, Title, Container, AvatarView, AvatarImg, FormView, Form, ButtomView, ChangeButtom, LogoutButtom } from './styles';
import Art2 from "../../assets/authFooter.png";
import avatar from "../../assets/tempAvatar.jpg"

export default function Profile() {

  const dispatch = useDispatch();

  function LogOut() {
    dispatch(signOut());
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
      <ContainerTop>
        <Title>Profile</Title>
      </ContainerTop>

      <Container>

        <AvatarView>
          <AvatarImg source={avatar} />
        </AvatarView>

        <FormView>
          <Form placeholder="Raphael Neves"></Form>
          <Form placeholder="Email"></Form>
          <Form placeholder="Data de nascimento"></Form>
          <Form placeholder="New password"></Form>

          <ButtomView>
            <ChangeButtom><Text style={{ color: "#FFF", fontWeight: "500" }}>Save Changes</Text></ChangeButtom>
            <LogoutButtom onPress={LogOut}><Text style={{ color: "#FFF", fontWeight: "500" }}>Logout</Text></LogoutButtom>
          </ButtomView>
        </FormView>
      </Container>
    </Background>
  )
}