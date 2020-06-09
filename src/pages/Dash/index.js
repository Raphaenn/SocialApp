import React from 'react';
import { View, Text, Image } from "react-native";

import Background from "../../components/background";
import { ContainerTop, Title, SubTitle, ContentContainer, GradeContainer, CardContent, QuarterContainer, GridContainer1, GridContainer2, GridContainer3, GridContainer4, Icon, GradeText, CatText } from './styles';

import TrophyIcon from "../../assets/trophyIcon/Trophy.png";
import CheckIcon from "../../assets/CheckIcon/Check.png";
import CalendarIcon from "../../assets/CalendarIcon/Calendar.png";
import TaskIcon from "../../assets/TaskIcon/Task.png";
import Art2 from "../../assets/authFooter.png";

export default function Dash() {

    return (
      <Background>
        <Image
        source={Art2}
        style={{ position: "absolute", bottom: -325, right: -225 }}
        ></Image>
        <Image
        source={Art2}
        style={{ position: "absolute", bottom: -325, left: -225 }}
      ></Image>
        <ContainerTop>
          <Title>Statistics</Title>
          <SubTitle>Complete your avaliations to build your longest streackof perfect days!</SubTitle>
        </ContainerTop>

          <ContentContainer>

          <GradeContainer>
            <CardContent>
              <Text style={{ fontSize: 35, color: '#2D4059', fontWeight: 'bold' }} >8.5</Text>
              <Text style={{ fontSize: 22, color: '#2D4059', fontWeight: '300', marginTop: 5 }}>Average Score</Text>
            </CardContent>
          </GradeContainer>

          <QuarterContainer>
            <GridContainer1>
              <Icon source={TrophyIcon} />
              <GradeText>7.5</GradeText>
              <CatText>GPA by age</CatText>
            </GridContainer1>

            <GridContainer2>
              <Icon source={CheckIcon} />
              <GradeText>20</GradeText>
              <CatText>Tasks done</CatText>
            </GridContainer2>

            <GridContainer3>
              <Icon source={CalendarIcon} />
              <GradeText>12</GradeText>
              <CatText>Perfect days</CatText>
            </GridContainer3>

            <GridContainer4>
              <Icon source={TaskIcon} />
              <GradeText>50</GradeText>
              <CatText>Tasks/month</CatText>
            </GridContainer4>
          </QuarterContainer>

          </ContentContainer>
      </Background>
    )
};

/* style={{ shadowColor: "#454D65", shadowOffset: { height: 5 }, shadowRadius: 15, 
      shadowOpacity: 0.2, zIndex: 10}} */