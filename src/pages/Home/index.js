//Responsável por receber o Component CardItem, passando os itens do feed como parametros. Depois de receber o CardItem, apenas o carrego dentro de uma view Transition, que é responsável por chamar ref e a transition animation para a flatlist

import React, { useRef } from 'react';
import { View, Text, FlatList, StatusBar } from "react-native";
import moment from "moment";
import { Transitioning, Transition } from 'react-native-reanimated';

import Background from "../../components/background";
import { Container, FlatConainer } from './styles';
import DatePicket from "../../components/DateSlider";
import CardItens from "../../components/CardItens";

export default function Home() {

  feed = [
    {
      id: "1",
      name: "Raphael Neves",
      Activ1: "Estudei desenvolvimento",
      Activ2: "Corri 3km na praia",
      Activ3: "Fiquei o dia inteiro sem matar um inseto",
      Gratidao1: "Sou feliz porque tive o pão na mesa",
      Gratidao2: "Sou feliz por ter bons amigos",
      Gratidao3: "Sou grato por ter um cachorro legal",
      timestamp: 1569109273726,
      avatar: require("../../assets/tempAvatar.jpg"),
    },
    {
      id: "2",
      name: "Raphael Neves",
      Activ1: "Aprendi tecnicas novas no react",
      Activ2: "Melhorei minha jogabilidade no Cod",
      Activ3: "Fui passear com Maggie",
      Gratidao1: "Sou feliz porque tive o pão na mesa",
      Gratidao2: "Sou feliz por ter bons amigos",
      Gratidao3: "Sou grato por ter um cachorro legal",
      timestamp: 1569109273726,
      avatar: require("../../assets/tempAvatar.jpg"),
    },
    {
      id: "3",
      name: "Raphael Neves",
      Activ1: "Fiquei o dia inteiro sem ler globo e entrar no insta",
      Activ2: "Corri na praia - 10km",
      Activ3: "Terminei de ler um livro da biblia",
      Gratidao1: "Sou feliz porque tive o pão na mesa",
      Gratidao2: "Sou feliz por ter bons amigos",
      Gratidao3: "Sou grato por ter um cachorro legal",
      timestamp: 1569109273726,
      avatar: require("../../assets/tempAvatar.jpg"),
    },
  ]

  const transitionRef = useRef();
  const transition = <Transition.Together propagation='bottom'>
      <Transition.Change  durationMs={200}/>
  </Transition.Together>

    const onPress = () => {
      transitionRef.current.animateNextTransition();
    }

  const renderItem = ({item}) => {
      return (
          <CardItens dados={item} onPress={onPress}/>
      )
  }
  

  return (
    <Background>
      <StatusBar barStyle="light-content"></StatusBar>
      <Container style={{ shadowColor: "#454D65", shadowOffset: { height: 5 }, shadowRadius: 15, 
      shadowOpacity: 0.2, zIndex: 10}}>
        <Text style={{fontSize: 22, fontWeight: "400", color: "#fff"}}>Feed</Text>
      </Container>

      <DatePicket />

      <FlatConainer>
        <Transitioning.View ref={transitionRef} transition={transition} 
        style={{ flex: 1 }}>
          <FlatList
          data={feed}
          keyExtractor={(item, index) => `${item.id}${index}`}
          renderItem={renderItem}
          showsVerticalScrollIndicator={false}
          />
        </Transitioning.View>
      </FlatConainer>
    </Background>

)};