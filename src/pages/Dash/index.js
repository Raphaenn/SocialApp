//Responsável por receber o Component CardItem, passando os itens do feed como parametros. Depois de receber o CardItem, apenas o carrego dentro de uma view Transition, que é responsável por chamar ref e a transition animation para a flatlist

import React, { useRef } from 'react';
import { FlatList } from 'react-native';
import { Transitioning, Transition } from 'react-native-reanimated';

import { Container } from './styles';
import CardItens from "../../components/CardItens";

export default function Dash() {

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
        <Container>
            <Transitioning.View ref={transitionRef} transition={transition} style={{ flex: 1 }}>
                <FlatList
                data={feed}
                keyExtractor={(item, index) => `${item.id}${index}`}
                renderItem={renderItem}
                />
            </Transitioning.View>
        </Container>
    )
};