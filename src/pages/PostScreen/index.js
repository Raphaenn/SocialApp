import React from 'react';
import { View, Text } from 'react-native';

import Background from "../../components/background";
import { Container, Top, Title, SubContainer, SubTitle, Art, FormContainer, Form, ButtonView, EnterDay, FormContent, InputNote, FormContent2, HoursDiv, InputHours, FormContent3, FormContent4 } from './styles';
import Art1 from "../../assets/Illustrate/Art1.png"

function PostScreen() {
  return (
    <Background>
      <Top>
        <Title>New SelfBack</Title>
        <SubContainer>
          <View style={{ alignItems: 'center', justifyContent: 'center', width: 240 }}>
          <SubTitle>Another day has passed. It's time for your self-assessment!</SubTitle>
          </View>
          <Art source={Art1} />
        </SubContainer>
      </Top>

      <FormContainer>
        <Form>
          <ButtonView>
            <EnterDay><Text style={{color: 'rgba(255, 255, 255, .8)', fontSize: 20}} >Yesterday</Text></EnterDay>
            <EnterDay><Text style={{color: 'rgba(255, 255, 255, .8)', fontSize: 20}}>Today</Text></EnterDay>
          </ButtonView>

          <FormContent>
            <Text style={{ fontSize: 22, color: '#2D4059' }}>───  Gratitude Journal ───</Text>
            <InputNote placeholder={"I'm thankful for..."} 
            placeholderTextColor="rgba(45, 64, 80, .8)" />

            <InputNote placeholder={"I'm thankful for..."} 
            placeholderTextColor="rgba(45, 64, 80, .8)"/>

            <InputNote placeholder={"I'm thankful for..."} 
            placeholderTextColor="rgba(45, 64, 80, .8)"/>
          </FormContent>

          <FormContent2>
            <Text style={{ marginTop: 10, fontSize: 22, color: "#fff", fontWeight: '300' }} >Spend Hours</Text>
            <HoursDiv>
              <InputHours placeholder={"Working"} 
            placeholderTextColor="rgba(45, 64, 80, .8)"/>
              <InputHours placeholder={"Transport"} 
            placeholderTextColor="rgba(45, 64, 80, .8)"/>
              <InputHours placeholder={"Leisure"} 
            placeholderTextColor="rgba(45, 64, 80, .8)"/>
              <InputHours placeholder={"Sleeping"} 
            placeholderTextColor="rgba(45, 64, 80, .8)"/>
            </HoursDiv>
          </FormContent2>

          <FormContent3>
            <Text style={{ fontSize: 22, color: '#2D4059' }}>───  Top 3 Activities ───</Text>
              <InputNote placeholder={"I- Important task."} 
              placeholderTextColor="rgba(45, 64, 80, .8)" />

              <InputNote placeholder={"II- Important task."} 
              placeholderTextColor="rgba(45, 64, 80, .8)"/>

              <InputNote placeholder={"III- Important task."} 
              placeholderTextColor="rgba(45, 64, 80, .8)"/>
          </FormContent3>

          <FormContent4>
          <Text style={{ fontSize: 22, color: '#2D4059' }}>───  Rate your day ───</Text>
          </FormContent4>
        </Form>
      </FormContainer>
    </Background>
  )
}

export default PostScreen;