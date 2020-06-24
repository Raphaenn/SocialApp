import React, { useEffect, useState } from 'react';
import { useSelector } from "react-redux";
import { withNavigationFocus } from "react-navigation";
import firebase from "react-native-firebase";
import { Text, Image } from "react-native";

import Background from "../../components/background";
import { ContainerTop, Title, SubTitle, ContentContainer, GradeContainer, CardContent, QuarterContainer, GridContainer1, GridContainer2, GridContainer3, GridContainer4, Icon, GradeText, CatText } from './styles';

import TrophyIcon from "../../assets/trophyIcon/Trophy.png";
import CheckIcon from "../../assets/CheckIcon/Check.png";
import CalendarIcon from "../../assets/CalendarIcon/Calendar.png";
import TaskIcon from "../../assets/TaskIcon/Task.png";
import Art2 from "../../assets/authFooter.png";

function Dash({isFocused}) {

  const authId = useSelector(state => state.auth.uid);
  const [ jornals, setJornals ] = useState([]);
  const [ average, setAverage ] = useState('0');
  const [ tasks, setTasks ] = useState('0');
  const [ perfectDay, setPerfectDay ] = useState('0');
  const [ general, setGeneral ] = useState('0')

  async function loadData() {
      await firebase.firestore().collection('Posts').where('UserID', '==', authId).get()
      .then((querySnapshot) => {
      var arrays = [];
      querySnapshot.forEach(doc => {
        arrays.push(doc.data())
      })
      if(arrays.length > 0) {
      setAverage(arrays.map(item => item.dayrate).reduce((val, el) => (val + el))/arrays.length);
      setTasks(arrays.map(item => item.act1).length + arrays.map(item => item.act2).length + arrays.map(item => item.act3).length);
      setPerfectDay(arrays.filter((el, i) => el.dayrate == "10").length)
      setJornals(arrays.map(item => item.thanks1).length)
      }
  });
}

  async function loadAll() {
      await firebase.firestore().collection('Posts').get()
      .then((querySnapshot) => {
      var arrays = [];
      querySnapshot.forEach(doc => {
        arrays.push(doc.data())
      })
      setGeneral(arrays.map(item => item.dayrate).reduce((val, el) => (val + el))/arrays.length)
  });
}

  useEffect(() => {
    if (isFocused) {
      loadAll();
      loadData();
    }
}, [isFocused]);

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
            <Text style={{ fontSize: 35, color: '#2D4059', fontWeight: 'bold' }} >{parseFloat(average).toFixed(1)}</Text>
            <Text style={{ fontSize: 22, color: '#2D4059', fontWeight: '300', marginTop: 5 }}>Average Score</Text>
          </CardContent>
        </GradeContainer>

        <QuarterContainer>
          <GridContainer1>
            <Icon source={TrophyIcon} />
            <GradeText>{parseFloat(general).toFixed(1)}</GradeText>
            <CatText>GPA by age</CatText>
          </GridContainer1>

          <GridContainer2>
            <Icon source={CheckIcon} />
            <GradeText>{tasks}</GradeText>
            <CatText>Tasks done</CatText>
          </GridContainer2>

          <GridContainer3>
            <Icon source={CalendarIcon} />
            <GradeText>{perfectDay}</GradeText>
            <CatText>Perfect days</CatText>
          </GridContainer3>

          <GridContainer4>
            <Icon source={TaskIcon} />
            <GradeText>{jornals}</GradeText>
            <CatText>Jornals</CatText>
          </GridContainer4>
        </QuarterContainer>

        </ContentContainer>
    </Background>
  )
};

export default withNavigationFocus(Dash);