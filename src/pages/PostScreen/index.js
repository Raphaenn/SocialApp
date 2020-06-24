import React, { useState, useRef, useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import moment from "moment";
import { View, Text } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view' //best kb lib
import Slider from '@react-native-community/slider';

import { PostRequest } from "../../store/modules/posts/actions";

import Background from "../../components/background";
import Art1 from "../../assets/Illustrate/Art1.png"
import { Top, Title, Container, SubContainer, SubTitle, Art, Form, ButtonView, EnterDay, EnterDay2, FormContent, InputNote, FormContent2, HoursDiv, InputHours, FormContent3, FormContent4, ShowNote, SubmitButtom } from './styles';

export default function PostScreen({ navigation }) {

  const dispatch = useDispatch();
  const nowDate = moment().format('L');
  const YesDate = moment().subtract(1, 'days').format('L')
  const authId = useSelector(state => state.auth.uid);
  const [todaySel, setTodaySel] = useState(false); 
  const [yesterdaySel, setYesterdaySel] = useState(true); 
  const [ form, setForm ] = useState({
    UserID: authId,
    datapost: nowDate,
    act1: "",
    act2: "",
    act3: "",
    thanks1: "",
    thanks2: "",
    thanks3: "",
    dayrate: 0,
    worktime: "",
    leisuretime: "",
    sleeptime: "",
    studytime: "",
  });

  const thansk1ref = useRef();
  const thansk2ref = useRef();
  const thansk3ref = useRef();
  const act1ref = useRef();
  const act2ref = useRef();
  const act3ref = useRef();
  const leisureref = useRef();
  const workref = useRef();
  const studyref = useRef();
  const sleepref = useRef();


  function handleSend() {
    if(form.act1.length > 0 && form.studytime.length > 0) {
      dispatch(PostRequest(form, navigation));
      thansk1ref.current.clear()
      thansk2ref.current.clear()
      thansk3ref.current.clear()
      act1ref.current.clear()
      act2ref.current.clear()
      act3ref.current.clear()
      leisureref.current.clear()
      workref.current.clear()
      studyref.current.clear()
      sleepref.current.clear()
      
    }
  };

  function SelectToday(datapost) {

    if(yesterdaySel) {
      setForm({
        ...form,
        datapost
      });
    } else {
      setTodaySel(!todaySel);
      setYesterdaySel(!yesterdaySel);
      setForm({
        ...form,
        datapost
      });
    }
  }

  function SelectYesterday(datapost) {
    if(todaySel) {
      setForm({
        ...form,
        datapost
      });
    } else {
      setYesterdaySel(!yesterdaySel);
      setTodaySel(!todaySel);
      setForm({
        ...form,
        datapost
      });
    }
  }

  return (
    <Background>
      <Top>
        <Title>New SelfBack</Title>
      </Top>
      <KeyboardAwareScrollView>
      <Container>
      <SubContainer>
          <View style={{ alignItems: 'center', justifyContent: 'center', width: 220 }}>
          <SubTitle>Another day has passed. It's time for your self-assessment!</SubTitle>
          </View>
          <Art source={Art1} />
      </SubContainer>

        <Form>
          <ButtonView>
            <EnterDay ativoT={yesterdaySel ? yesterdaySel : null} onPress={() => SelectYesterday(YesDate)}><Text style={{color: 'rgba(255, 255, 255, .8)', fontSize: 20}}>Yesterday</Text></EnterDay>

            <EnterDay2 ativoY={todaySel ? todaySel : null} onPress={() => SelectToday(nowDate)}><Text style={{color: 'rgba(255, 255, 255, .8)', fontSize: 20}}>Today</Text></EnterDay2>
          </ButtonView>

          <FormContent>
            <Text style={{ fontSize: 22, color: '#2D4059' }}>──  Gratitude Journal ──</Text>
            <InputNote placeholder={"I'm thankful for..."} 
            ref={thansk1ref}
            placeholderTextColor="rgba(45, 64, 80, .8)" 
            onChangeText={thanks1 => setForm({ ...form, thanks1 })}
            value={form.thanks1}
            returnKeyType="next"
            onSubmitEditing={() => thansk2ref.current.focus() }
            maxLength={80}
            clearButtonMode="always"
            />

            <InputNote placeholder={"I'm thankful for..."} 
            placeholderTextColor="rgba(45, 64, 80, .8)"
            onChangeText={thanks2 => setForm({...form, thanks2 })}
            value={form.thanks2}
            returnKeyType="next"
            onSubmitEditing={() => thansk3ref.current.focus() }
            ref={thansk2ref}
            maxLength={80}
            clearButtonMode="always"
            />

            <InputNote placeholder={"I'm thankful for..."} 
            placeholderTextColor="rgba(45, 64, 80, .8)"
            onChangeText={thanks3 => setForm({ ...form, thanks3 })}
            value={form.thanks3}
            returnKeyType="next"
            onSubmitEditing={() => workref.current.focus() }
            ref={thansk3ref}
            maxLength={80}
            clearButtonMode="always"
            />
          </FormContent>

          <FormContent2>
            <Text style={{ marginTop: 10, fontSize: 22, color: "#fff", fontWeight: 'bold' }} >Spend Hours</Text>
            <HoursDiv>
              <InputHours placeholder={"Working"} 
              placeholderTextColor="rgba(45, 64, 80, .8)"
              onChangeText={worktime => setForm({ ...form, worktime })}
              value={form.worktime}
              returnKeyType="next"
              onSubmitEditing={() => studyref.current.focus() }
              ref={workref}
              maxLength={5}
              />

              <InputHours placeholder={"study"} 
              placeholderTextColor="rgba(45, 64, 80, .8)"
              onChangeText={studytime => setForm({ ...form, studytime })}
              value={form.studytime}
              returnKeyType="next"
              onSubmitEditing={() => leisureref.current.focus() }
              ref={studyref}
              maxLength={5}
              />

              <InputHours placeholder={"Leisure"} 
              placeholderTextColor="rgba(45, 64, 80, .8)"
              onChangeText={leisuretime => setForm({ ...form, leisuretime })}
              value={form.leisuretime}
              returnKeyType="next"
              onSubmitEditing={() => sleepref.current.focus() }
              ref={leisureref}
              maxLength={5}
            />

              <InputHours placeholder={"Sleeping"} 
              placeholderTextColor="rgba(45, 64, 80, .8)"
              onChangeText={sleeptime => setForm({ ...form, sleeptime })}
              value={form.sleeptime}
              returnKeyType="next"
              onSubmitEditing={() => act1ref.current.focus() }
              ref={sleepref}
              maxLength={5}
            />

            </HoursDiv>
          </FormContent2>

          <FormContent3>
            <Text style={{ fontSize: 22, color: '#2D4059' }}>──  Top 3 Activities ──</Text>
              <InputNote placeholder={"I- Important task."} 
              placeholderTextColor="rgba(45, 64, 80, .8)" 
              onChangeText={act1 => setForm({ ...form, act1 })}
              value={form.act1}
              returnKeyType="next"
              onSubmitEditing={() => act2ref.current.focus() }
              ref={act1ref}
              maxLength={80}
              clearButtonMode="always"
              />

              <InputNote placeholder={"II- Important task."} 
              placeholderTextColor="rgba(45, 64, 80, .8)"
              onChangeText={act2 => setForm({ ...form, act2 })}
              value={form.act2}
              returnKeyType="next"
              onSubmitEditing={() => act3ref.current.focus() }
              ref={act2ref}
              maxLength={80}
              clearButtonMode="always"
              />

              <InputNote placeholder={"III- Important task."} 
              placeholderTextColor="rgba(45, 64, 80, .8)"
              onChangeText={act3 => setForm({ ...form, act3 })}
              value={form.act3}
              returnKeyType="next"
              ref={act3ref}
              maxLength={80}
              clearButtonMode="always"
              />
          </FormContent3>

          <FormContent4>
          <Text style={{ fontSize: 22, color: '#2D4059' }}>Rate your day</Text>

          <View style={{ flexDirection: 'row', marginTop: 10 }}>
            {/* <ShowNote><Text style={{ fontSize: 20, fontWeight: 'bold', color: '#fff' }}>1</Text></ShowNote> */}
            <Slider 
              style={{width: 200, height: 40}}
              minimumValue={0}
              maximumValue={10}
              minimumTrackTintColor="rgba(255, 0, 89, .6)"
              maximumTrackTintColor="rgba(45, 64, 89, .6)"
              thumbTintColor="#fff"
              step={0.5}
              onValueChange={dayrate => setForm({ ...form, dayrate })}
            />
            <ShowNote>
              <Text style={{ fontSize: 20, fontWeight: 'bold', color: '#2D4059' }}>{form.dayrate}</Text>
            </ShowNote>
          </View>
          </FormContent4>
          <SubmitButtom onPress={handleSend}>
            <Text style={{ color: "#FFF", fontWeight: "500" }}>Post</Text>
          </SubmitButtom>
        </Form>
      </Container>
      </KeyboardAwareScrollView>
    </Background>
  )
}