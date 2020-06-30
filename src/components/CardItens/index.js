//Recebe o parametro dados e onPress e ao clicar no botão, faz o carregamento dos container correspondente, caso o expanded esteja ativo ou não.

import React, { useState } from 'react';
import { View, Text, Image } from "react-native";
import { useSelector, useDispatch } from "react-redux";
import moment from "moment";
import Icon from "react-native-vector-icons/Ionicons";

import { PostDelete } from "../../store/modules/posts/actions";

import {FeedItem, FeedContainer1, Left, TextID, TextDay, TextHour, Right, RightInside, ContentView, ColumnView, /* Expande */ FeedContainer2, Top, ExcludButton, TextIDE, TextDayE, Avatar, ContentTop, ContentBottom, ContentViewE, ColumnViewE, Bottom, ColumnView2, ContentViewBottom} from './styles';

export default function CardItens({dados, onPress}) {

  const dispatch = useDispatch()
  const userData = useSelector(state => state.user.profile)
  const [ avatar, setAvatart ] = useState(userData.avatar)
  const [expanded, setExpanded] = useState(true);

  const onItemPress = () => {
    onPress();
    setExpanded(!expanded);
  }

  function handleDelete(i) {
    dispatch(PostDelete(i))
  }

    return (
    <FeedItem onPress={onItemPress}>   
      {expanded ? 
      <FeedContainer1>
      <Left>
        <View style={{ flex: 1 }}>
          <View style={{ flexDirection: "column", justifyContent: "space-between", alignItems: "center" }}>
            <View style={{ marginBottom: 25, marginTop: 20 }}>
              <TextID>1</TextID>
            </View>

            <TextDay>{moment(Date.parse(dados.datapost)).fromNow(true)}</TextDay>
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
                    {dados.act1}</Text>
                  </ColumnView>
                  <ColumnView>
                    <Icon name="ios-radio-button-on" size={14} color="#F07B3F" />
                    <Text numberOfLines={1} style={{color: "#2D4059", marginLeft: 10}}>
                    {dados.act2}</Text>
                  </ColumnView>
                  <ColumnView>
                    <Icon name="ios-radio-button-on" size={14} color="#F07B3F" />
                    <Text numberOfLines={1} style={{color: "#2D4059", marginLeft: 10}}>
                    {dados.act3}</Text>
                  </ColumnView>
                </ContentView>
              </RightInside>
            </View>
      </Right>
      </FeedContainer1> 
      :
      <FeedContainer2>
        <Top>
          <ExcludButton onPress={() => handleDelete(dados.datapost)}>
            <Icon name="ios-remove-circle" size={30} color="#ff595e" />
          </ExcludButton>
          <TextDayE>Today</TextDayE>
          <Avatar>
            <Image style={{width: 38, height: 38, borderRadius: 19}} source={{uri: avatar || 'https://api.adorable.io/avatars/200/abott@adorable.png'}} resizeMode="cover" />
          </Avatar>
      </Top>
      <Bottom>
          <ContentTop>
          <Text style={{fontSize: 20, fontWeight: "400", color: "#2D4059", marginLeft: 20, marginTop: 10}}>Most Important activities</Text>
              <ContentViewE>
                <ColumnViewE>
                    <Icon name="ios-radio-button-on" size={14} color="#F07B3F" />
                    <Text style={{color: "#2D4059", marginLeft: 10}}>
                    {dados.act1}</Text>
                  </ColumnViewE>
                  <ColumnViewE>
                    <Icon name="ios-radio-button-on" size={14} color="#F07B3F" />
                    <Text style={{color: "#2D4059", marginLeft: 10}}>
                    {dados.act2}</Text>
                  </ColumnViewE>
                  <ColumnViewE>
                    <Icon name="ios-radio-button-on" size={14} color="#F07B3F" />
                    <Text style={{color: "#2D4059", marginLeft: 10}}>
                    {dados.act3}</Text>
                  </ColumnViewE>    
              </ContentViewE>
          </ContentTop>

          <ContentBottom>
              <Text style={{fontSize: 20, fontWeight: "400", color: "#2D4059", marginLeft: 20, marginTop: 10}}>Gratitude journal</Text>
              <ContentViewBottom>
              <ColumnView2>
                    <Icon name="ios-radio-button-on" size={14} color="#F07B3F" />
                    <Text style={{color: "#2D4059", marginLeft: 10}}>
                    {dados.thanks1}
                    </Text>
                  </ColumnView2>
                  <ColumnView2>
                    <Icon name="ios-radio-button-on" size={14} color="#F07B3F" />
                    <Text style={{color: "#2D4059", marginLeft: 10}}>
                    {dados.thanks2}
                    </Text>
                  </ColumnView2>
                  <ColumnView2>
                    <Icon name="ios-radio-button-on" size={14} color="#F07B3F" />
                    <Text style={{color: "#2D4059", marginLeft: 10}}>
                    {dados.thanks3}
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