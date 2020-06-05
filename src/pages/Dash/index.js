//Responsável por receber o Component CardItem, passando os itens do feed como parametros. Depois de receber o CardItem, apenas o carrego dentro de uma view Transition, que é responsável por chamar ref e a transition animation para a flatlist

import React, { useRef } from 'react';
import { FlatList } from 'react-native';
import { Transitioning, Transition } from 'react-native-reanimated';

import { Container } from './styles';

export default function Dash() {

    return (
        <Container>
        </Container>
    )
};