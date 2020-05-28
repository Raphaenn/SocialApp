import React from 'react';
import { View, TouchableOpacity } from 'react-native';
import { useDispatch, useSelector } from "react-redux";

import { signOut } from "../../store/modules/auth/actions";

import { Container, Out } from './styles';

export default function Profile() {

  const dispatch = useDispatch();

  function LogOut() {
    dispatch(signOut());
  }

  return (
    <Container>
      <Out onPress={() => LogOut()}></Out>
    </Container>
  )
}