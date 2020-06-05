//Responsável por receber o Component CardItem, passando os itens do feed como parametros. Depois de receber o CardItem, apenas o carrego dentro de uma view Transition, que é responsável por chamar ref e a transition animation para a flatlist

import React, { useRef } from 'react';
import { View, Text, FlatList, StatusBar } from "react-native";
import moment from "moment";
import { Transitioning, Transition } from 'react-native-reanimated';

import Background from "../../components/background";
import { Container, FlatConainer } from './styles';
import CardItens from "../../components/CardItens";

// Avatar, Name, TextTime, FeedText, ImagePost 

posts = [
  {
      id: "1",
      name: "Joe McKay",
      text:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      timestamp: 1569109273726,
      avatar: require("../../assets/tempAvatar.jpg"),
      image: require("../../assets/tempImage1.jpg")
  },
  {
      id: "2",
      name: "Karyn Kim",
      text:
          "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      timestamp: 1569109273726,
      avatar: require("../../assets/tempAvatar.jpg"),
      image: require("../../assets/tempImage2.jpg")
  },
  {
      id: "3",
      name: "Emerson Parsons",
      text:
          "Amet mattis vulputate enim nulla aliquet porttitor lacus luctus. Vel elit scelerisque mauris pellentesque pulvinar pellentesque habitant.",
      timestamp: 1569109273726,
      avatar: require("../../assets/tempAvatar.jpg"),
      image: require("../../assets/tempImage3.jpg")
  },
  {
      id: "4",
      name: "Kathie Malone",
      text:
          "At varius vel pharetra vel turpis nunc eget lorem. Lorem mollis aliquam ut porttitor leo a diam sollicitudin tempor. Adipiscing tristique risus nec feugiat in fermentum.",
      timestamp: 1569109273726,
      avatar: require("../../assets/tempAvatar.jpg"),
      image: require("../../assets/tempImage4.jpg")
  }
];

feed = [
  {
    id: "1",
    name: "Raphael Neves",
    Activ1: "Estudar desenvolvimento",
    Activ2: "Correr 3km na praia",
    Activ3: "Ficar o dia inteiro sem matar um inseto",
    Gratidao1: "Sou feliz porque tive o pão na mesa",
    Gratidao2: "Sou feliz por ter bons amigos",
    Gratidao3: "Sou grato por ter um cachorro legal",
    timestamp: 1569109273726,
    avatar: require("../../assets/tempAvatar.jpg"),
  },
  {
    id: "2",
    name: "Raphael Neves",
    Activ1: "Estudar desenvolvimento",
    Activ2: "Correr 3km na praia",
    Activ3: "Ficar o dia inteiro sem matar um inseto",
    Gratidao1: "Sou feliz porque tive o pão na mesa",
    Gratidao2: "Sou feliz por ter bons amigos",
    Gratidao3: "Sou grato por ter um cachorro legal",
    timestamp: 1569109273726,
    avatar: require("../../assets/tempAvatar.jpg"),
  },
  {
    id: "3",
    name: "Raphael Neves",
    Activ1: "Estudar desenvolvimento",
    Activ2: "Correr 3km na praia",
    Activ3: "Ficar o dia inteiro sem matar um inseto",
    Gratidao1: "Sou feliz porque tive o pão na mesa",
    Gratidao2: "Sou feliz por ter bons amigos",
    Gratidao3: "Sou grato por ter um cachorro legal",
    timestamp: 1569109273726,
    avatar: require("../../assets/tempAvatar.jpg"),
  },
  

]

export default function Home() {

  const transitionRef = useRef();
  const transition = <Transition.Together propagation='bottom'>
      <Transition.Change  durationMs={200}/>
  </Transition.Together>

  feed = [
      {
        id: "1",
        name: "Raphael Neves",
        Activ1: "Estudar desenvolvimento",
        Activ2: "Correr 3km na praia",
        Activ3: "Ficar o dia inteiro sem matar um inseto",
        Gratidao1: "Sou feliz porque tive o pão na mesa",
        Gratidao2: "Sou feliz por ter bons amigos",
        Gratidao3: "Sou grato por ter um cachorro legal",
        timestamp: 1569109273726,
        avatar: require("../../assets/tempAvatar.jpg"),
      },
      {
        id: "2",
        name: "Raphael Neves",
        Activ1: "Estudar desenvolvimento",
        Activ2: "Correr 3km na praia",
        Activ3: "Ficar o dia inteiro sem matar um inseto",
        Gratidao1: "Sou feliz porque tive o pão na mesa",
        Gratidao2: "Sou feliz por ter bons amigos",
        Gratidao3: "Sou grato por ter um cachorro legal",
        timestamp: 1569109273726,
        avatar: require("../../assets/tempAvatar.jpg"),
      },
      {
        id: "3",
        name: "Raphael Neves",
        Activ1: "Estudar desenvolvimento",
        Activ2: "Correr 3km na praia",
        Activ3: "Ficar o dia inteiro sem matar um inseto",
        Gratidao1: "Sou feliz porque tive o pão na mesa",
        Gratidao2: "Sou feliz por ter bons amigos",
        Gratidao3: "Sou grato por ter um cachorro legal",
        timestamp: 1569109273726,
        avatar: require("../../assets/tempAvatar.jpg"),
      },
    
    ]

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
        <Text style={{fontSize: 20, fontWeight: "500", color: "#fff"}}>Feed</Text>
      </Container>

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