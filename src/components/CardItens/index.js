//Recebe o parametro dados e onPress e ao clicar no botão, faz o carregamento dos container correspondente, caso o expanded esteja ativo ou não.

import React, { useState } from 'react';
import { View, Text } from "react-native";
import moment from "moment";
import Icon from "react-native-vector-icons/Ionicons";

import {FeedItem, FeedContainer1, Left, TextID, TextDay, TextHour, Right, RightInside, ContentView, IconView, TextView, /* Expande */ FeedContainer2,Top, TextIDE, TextDayE, Avatar, ContentTop, ContentBottom, ContentViewE, IconViewE, TextViewE, Bottom, ContentViewBottom} from './styles';

export default function CardItens({dados, onPress}) {

  const [expanded, setExpanded] = useState(true);

  const onItemPress = () => {
    onPress();
    setExpanded(!expanded);
  }

    return (
    <FeedItem onPress={onItemPress}>   
      {expanded ? 
      <FeedContainer1>
      <Left>
        <View style={{ flex: 1 }}>
          <View style={{ flexDirection: "column", justifyContent: "space-between", alignItems: "center" }}>
            <View style={{ marginBottom: 25, marginTop: 20 }}>
              <TextID>{dados.id}</TextID>
            </View>

            <TextDay>Today</TextDay>
            <TextHour>06:00 PM</TextHour>
          </View>
        </View>
      </Left>

      <Right>
          <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center" }}>
              <RightInside>
                <Text style={{fontSize: 20, fontWeight: "500", color: "#2D4059"}}>Top activities</Text>
                <ContentView>
                  <IconView>
                    <Icon name="ios-radio-button-on" size={14} color="#F07B3F" />
                    <Icon name="ios-remove" size={12} color="#C4C4C4" style={{ transform: [{ rotate: '90deg' }] }} />
                    <Icon name="ios-radio-button-on" size={14} color="#F07B3F" />
                    <Icon name="ios-remove" size={12} color="#C4C4C4" style={{ transform: [{ rotate: '90deg' }] }} />
                    <Icon name="ios-radio-button-on" size={14} color="#F07B3F" />
                  </IconView>
                  <TextView>
                    <Text style={{color: "#2D4059" }}>Dev time app</Text>
                    <Text style={{marginTop: 10, color: "#2D4059" }} >Gym for 2 hours</Text>
                    <Text style={{marginTop: 10, color: "#2D4059" }} >Study english</Text>
                  </TextView>
                </ContentView>
              </RightInside>
            </View>
      </Right></FeedContainer1> 
      :
      <FeedContainer2>
        <Top>
          <TextIDE>1</TextIDE>
          <TextDayE>Today</TextDayE>
          <Avatar></Avatar>
      </Top>
      <Bottom>
          <ContentTop>
          <Text style={{fontSize: 20, fontWeight: "400", color: "#2D4059", marginLeft: 20, marginTop: 10}}>Most Important activities</Text>
              <ContentViewE>
                  <IconViewE>
                      <Icon name="ios-radio-button-on" size={14} color="#F07B3F" />
                      <Icon name="ios-remove" size={12} color="#C4C4C4" style={{ transform: [{ rotate: '90deg' }] }} />
                      <Icon name="ios-radio-button-on" size={14} color="#F07B3F" />
                      <Icon name="ios-remove" size={12} color="#C4C4C4" style={{ transform: [{ rotate: '90deg' }] }} />
                      <Icon name="ios-radio-button-on" size={14} color="#F07B3F" />
                  </IconViewE>
                  <TextViewE>
                      <Text style={{color: "#2D4059" }}>Dev time app</Text>
                      <Text style={{marginTop: 10, color: "#2D4059" }} >Gym for 2 hours</Text>
                      <Text style={{marginTop: 10, color: "#2D4059" }} >Study english</Text>
                  </TextViewE>
                  </ContentViewE>
          </ContentTop>

          <ContentBottom>
              <Text style={{fontSize: 20, fontWeight: "400", color: "#2D4059", marginLeft: 20, marginTop: 10}}>Gratitude journal</Text>
              <ContentViewBottom>
              <IconView>
                      <Icon name="ios-radio-button-on" size={14} color="#F07B3F" />
                      <Icon name="ios-remove" size={30} color="#C4C4C4" style={{ transform: [{ rotate: '90deg' }] }} />
                      <Icon name="ios-radio-button-on" size={14} color="#F07B3F" />
                      <Icon name="ios-remove" size={30} color="#C4C4C4" style={{ transform: [{ rotate: '90deg' }] }} />
                      <Icon name="ios-radio-button-on" size={14} color="#F07B3F" />
                  </IconView>
                  <TextView>
                      <Text style={{marginTop: -5, color: "#2D4059"}}>Sou grato por ter aprendido novas técnicas no react native</Text>
                      <Text style={{marginTop: 15, color: "#2D4059" }} >Sou grato porque tive boas coisas para comer hoje.</Text>
                      <Text style={{marginTop: 15, color: "#2D4059" }} >Sou agradecido por ter conseguido correr hoje</Text>
                  </TextView>
              </ContentViewBottom>
          </ContentBottom>
      </Bottom>
    </FeedContainer2>
      }
    </FeedItem>
    );
  }