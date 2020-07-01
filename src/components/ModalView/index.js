import React, { useState} from 'react';
import { View, Text } from 'react-native';
import { useDispatch, useSelector } from "react-redux";
import Icon from "react-native-vector-icons/Ionicons";

import Plans from "../../assets/Plans/time.png"
import { ModalView, ModalTitle, TopView, Title, Img, PlansContainer, PlanCards, CardContainer, SelectButton, Card, TextCards, FooterView, JoinButton} from './styles';

import { subscriptionRequest } from "../../store/modules/subscription/actions";

export default function ModalV() {

  const Allplans = [
    {
        id: "1",
        name: "Month",
        text: "1 month",
        value: "$4,99",
        timestamp: 1569109273726,
        monthVal: "$4,99/mo"
    },
    {
      id: "2",
      name: "Year",
      text: "1      year",
      value: "$33,90",
      timestamp: 1569109273726,
      monthVal: "$2,82/mo"
    },
    {
      id: "3",
      name: "Tri",
      text: "3 months",
      value: "$11,90",
      timestamp: 1569109273726,
      monthVal: "$3,96/mo"
  }];

  const dispatch = useDispatch();
  const [ selectB, setSelectB ] = useState(2);
  const [ planSelect, setPlanSelect ] = useState([]);

  function handleSelect(item) {
    setSelectB(item.id);
    setPlanSelect(item);
  };

  // criar a função handleJoin e fazer o dispatch do item selecionado
  function handleJoin() {
    dispatch(subscriptionRequest(planSelect))
  }

  return (
    <ModalView>
    <ModalTitle>Plans</ModalTitle>

    <TopView>
      <Title>Track the time spent on key activities</Title>
      <Img source={Plans} />
    </TopView>

    <PlansContainer>
      <PlanCards
      horizontal={true}
      contentContainerStyle={{flexGrow: 1, justifyContent: 'center'}}
      data={Allplans}
      keyExtractor={item => item.id}
      renderItem={({item}) => {
        return (
          <CardContainer>
            <SelectButton onPress={() => handleSelect(item)}>
              <Card click={selectB} ind={item.id}>
                <TextCards style={{ width: 60 }}>{item.text}</TextCards>
                <TextCards style={{ marginTop: 35 }}>{item.value}</TextCards>
              </Card>
            </SelectButton>
            <Text style={{ fontSize: 12, color: "#A6ACBE", fontWeight: "bold" }}>{item.monthVal}</Text>
          </CardContainer>
        )
      }}
      />
    </PlansContainer>

    <FooterView>
      <JoinButton onPress={handleJoin}>
        <Text style={{ fontSize: 20, color: "#2D4059", fontWeight: "bold" }}>Join</Text>
      </JoinButton>
      <View>
        <Text style={{ fontSize: 12, color: "#2D4059", marginTop: 20 }} >This trial automatically renews into a paid subscription adn will continue to automatically renew until you cancel.</Text>
        <Text style={{ fontSize: 12, color: "#2D4059" }} >Please see oru Provacy Policy and EULA.</Text>
      </View>
    </FooterView>

  </ModalView>

)
};