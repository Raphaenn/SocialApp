//Responsável por receber o Component CardItem, passando os itens do feed como parametros. Depois de receber o CardItem, apenas o carrego dentro de uma view Transition, que é responsável por chamar ref e a transition animation para a flatlist

import React, { useRef, useEffect, useState } from 'react';
import { Text, FlatList, StatusBar, Image } from "react-native";
import { useSelector } from "react-redux";
import { withNavigationFocus } from "react-navigation";
import moment from "moment";
import firebase from "react-native-firebase";
import { Transitioning, Transition } from 'react-native-reanimated';

import Background from "../../components/background";
import { Container, FlatConainer, GifContainer } from './styles';
import DatePicket from "../../components/DateSlider";
import CardItens from "../../components/CardItens";
import Gif from "../../assets/thinking.gif";

function Home({isFocused}) {

  const authId = useSelector(state => state.auth.uid);
  const [ userData, setUserData ] = useState([]);
  const [ showFilter, setShowFilter ] = useState([]);

  async function loadData() {
    await firebase.firestore().collection('Posts').where('UserID', '==', authId).get()
    .then((querySnapshot) => {
      var arrays = [];
      querySnapshot.forEach(doc => {
        arrays.push(doc.data())
      })
      const arrange = arrays.sort((a, b) => {
        if(a.datapost > b.datapost) {
          return -1
        }
        if(a.datapost < b.datapost) {
          return 1
        }
        return 0
      })
      setUserData(arrange);
  })
  };

  useEffect(() => {
    if (isFocused) {
      loadData()
    }
}, [isFocused]);

  const transitionRef = useRef();
  const transition = <Transition.Together propagation='bottom'>
      <Transition.Change  durationMs={200}/>
  </Transition.Together>

    const onPress = () => {
      transitionRef.current.animateNextTransition();
    };

  const renderItem = ({item}) => {
      return (
        <CardItens dados={item} onPress={onPress}/>
      )
  };

  const filterdate = (datenum) => {
    setShowFilter(userData.filter((el, i) => moment(Date.parse(el.datapost)).format('D') == datenum))
  }

  return (
    <Background>
      <StatusBar barStyle="light-content"></StatusBar>
      <Container style={{ shadowColor: "#454D65", shadowOffset: { height: 5 }, shadowRadius: 15, 
      shadowOpacity: 0.2, zIndex: 10}}>
        <Text style={{fontSize: 22, fontWeight: "bold", color: "#fff"}}>Feed</Text>
      </Container>

      <DatePicket datafilter={filterdate}/>

      { userData.length > 0 ? 
        <FlatConainer>
          <Transitioning.View ref={transitionRef} transition={transition} 
          style={{ flex: 1 }}>
            <FlatList
            data={showFilter.length > 0 ? showFilter : userData}
            keyExtractor={(item, index) => `${item.id}${index}`}
            renderItem={renderItem}
            showsVerticalScrollIndicator={false}
            />
          </Transitioning.View>
        </FlatConainer> : 
        
        <GifContainer>
          <Text style={{fontSize: 22, fontWeight: "bold", color: "#2D4059"}}>There's nothing due.</Text>
          <Image style={{ height: 300, width: 400 }} source={Gif} ></Image>
        </GifContainer>
        
      }
      
    </Background>

)};

export default withNavigationFocus(Home);