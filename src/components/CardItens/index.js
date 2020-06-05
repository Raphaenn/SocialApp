//Recebe o parametro dados e onPress e ao clicar no botão, faz o carregamento dos container correspondente, caso o expanded esteja ativo ou não.

import React, { useState } from 'react';
import { View, Text, Image } from "react-native";
import moment from "moment";
import Icon from "react-native-vector-icons/Ionicons";

import {FeedItem, FeedContainer1, Left, TextID, TextDay, TextHour, Right, RightInside, ContentView, ColumnView, /* Expande */ FeedContainer2, Top, TextIDE, TextDayE, Avatar, ContentTop, ContentBottom, ContentViewE, ColumnViewE, Bottom, ColumnView2, ContentViewBottom} from './styles';

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
                  <ColumnView>
                    <Icon name="ios-radio-button-on" size={14} color="#F07B3F" />
                    <Text numberOfLines={1} style={{color: "#2D4059", marginLeft: 10}}>
                    {dados.Activ1}</Text>
                  </ColumnView>
                  <ColumnView>
                    <Icon name="ios-radio-button-on" size={14} color="#F07B3F" />
                    <Text numberOfLines={1} style={{color: "#2D4059", marginLeft: 10}}>
                    {dados.Activ2}</Text>
                  </ColumnView>
                  <ColumnView>
                    <Icon name="ios-radio-button-on" size={14} color="#F07B3F" />
                    <Text numberOfLines={1} style={{color: "#2D4059", marginLeft: 10}}>
                    {dados.Activ3}</Text>
                  </ColumnView>
                </ContentView>
              </RightInside>
            </View>
      </Right>
      </FeedContainer1> 
      :
      <FeedContainer2>
        <Top>
          <TextIDE>{dados.id}</TextIDE>
          <TextDayE>Today</TextDayE>
          <Avatar>
            <Image style={{width: 38, height: 38, borderRadius: 19}} source={dados.avatar} resizeMode="cover" />
          </Avatar>
      </Top>
      <Bottom>
          <ContentTop>
          <Text style={{fontSize: 20, fontWeight: "400", color: "#2D4059", marginLeft: 20, marginTop: 10}}>Most Important activities</Text>
              <ContentViewE>
                <ColumnViewE>
                    <Icon name="ios-radio-button-on" size={14} color="#F07B3F" />
                    <Text style={{color: "#2D4059", marginLeft: 10}}>
                    {dados.Activ1}</Text>
                  </ColumnViewE>
                  <ColumnViewE>
                    <Icon name="ios-radio-button-on" size={14} color="#F07B3F" />
                    <Text style={{color: "#2D4059", marginLeft: 10}}>
                    {dados.Activ2}</Text>
                  </ColumnViewE>
                  <ColumnViewE>
                    <Icon name="ios-radio-button-on" size={14} color="#F07B3F" />
                    <Text style={{color: "#2D4059", marginLeft: 10}}>
                    {dados.Activ3}</Text>
                  </ColumnViewE>    
              </ContentViewE>
          </ContentTop>

          <ContentBottom>
              <Text style={{fontSize: 20, fontWeight: "400", color: "#2D4059", marginLeft: 20, marginTop: 10}}>Gratitude journal</Text>
              <ContentViewBottom>
              <ColumnView2>
                    <Icon name="ios-radio-button-on" size={14} color="#F07B3F" />
                    <Text style={{color: "#2D4059", marginLeft: 10}}>
                    {dados.Gratidao1}
                    </Text>
                  </ColumnView2>
                  <ColumnView2>
                    <Icon name="ios-radio-button-on" size={14} color="#F07B3F" />
                    <Text style={{color: "#2D4059", marginLeft: 10}}>
                    {dados.Gratidao2}
                    </Text>
                  </ColumnView2>
                  <ColumnView2>
                    <Icon name="ios-radio-button-on" size={14} color="#F07B3F" />
                    <Text style={{color: "#2D4059", marginLeft: 10}}>
                    {dados.Gratidao3}
                    </Text>
                  </ColumnView2>
              </ContentViewBottom>
          </ContentBottom>
      </Bottom>
    </FeedContainer2>
      }
    </FeedItem>
    );
  }