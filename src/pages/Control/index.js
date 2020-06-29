import React, { useEffect, useState } from 'react';
import { useSelector } from "react-redux";
import { withNavigationFocus } from "react-navigation";
import firebase from "react-native-firebase";
import moment from "moment";
import { View, Text } from 'react-native';
import { VictoryPie } from "victory-native";
import Svg, { Circle } from 'react-native-svg'

import LoadData from "../../util/UserStats";
import Background from "../../components/background";
import { Top, Title, Container, SubContainer, SubTitle, Art, ContentContainer, ViewButton, SelectDateButton, ChartContainer, ChartView, Chart, TextChartView, Column, ChartText, ChartText2 } from './styles';
import Chartart from "../../assets/ChartArt/Chartart.png";

function Control({isFocused}) {

  const authId = useSelector(state => state.auth.uid);
  const [ totalDate, setTotalDate ] = useState([]);
  const [ activeButton, setActiveButton ] = useState(false);
  const [ activeButton2, setActiveButton2 ] = useState(false);

  async function loadNumber() {
    await firebase.firestore().collection('Posts').where('UserID', '==', authId).get()
    .then((querySnapshot) => {
      var arrays = [];
      querySnapshot.forEach(doc => {
        arrays.push(doc.data())
      });

      const arrange = arrays.map(item => item);
      const totalArray = new LoadData(arrange);
      setTotalDate(arrange);
      setData(totalArray.chartNumber());
      setChartData(totalArray.chartSub());
  })
  };

  useEffect(() => {
    if (isFocused) {
      loadNumber()
    }
}, [isFocused]);


  const [ chartData, setChartData ] = useState([]);
  const [ data, setData ] = useState([]);

  function handleSelect(type) {
    switch(type) {
      case "Week":
        if(!activeButton) {
          const arrayweek = totalDate.filter((el, id) => moment(el.datapost, "MM-DD-YYYY").week() == moment(new Date(), "MM-DD-YYYY").week());
          const weekFilter = new LoadData(arrayweek);
          setData(weekFilter.chartNumber());
          setChartData(weekFilter.chartSub());
          setActiveButton(!activeButton);
          } else {
            const TotalFilter = new LoadData(totalDate);
            setData(TotalFilter.chartNumber());
            setChartData(TotalFilter.chartSub());
            setActiveButton(!activeButton);
          }
        break;

      case  "Month":
        if(!activeButton2) {
          const arraymonth = totalDate.filter((el, id) => moment(el.datapost, "MM-DD-YYYY").month() == moment(new Date(), "MM-DD-YYYY").month());
          const monthFilter = new LoadData(arraymonth);
          setData(monthFilter.chartNumber());
          setChartData(monthFilter.chartSub());
          setActiveButton2(!activeButton2);
          } else {
            const TotalFilter = new LoadData(totalDate);
            setData(TotalFilter.chartNumber());
            setChartData(TotalFilter.chartSub());
            setActiveButton2(!activeButton2);
          }
        break;

      default:
        console.tron.log("Default")
    }
  }

  return (
    <Background>
      <Top>
        <Title>New SelfBack</Title>
      </Top>
      <Container>
      <SubContainer>
          <View style={{ marginRight: 5, alignItems: 'center', justifyContent: 'center', width: 240 }}>
          <SubTitle>Get week by week summaries and other stats.</SubTitle>
          </View>
          <Art source={Chartart} />
      </SubContainer>

      <ContentContainer>

        {/* Button Place */}
        <ViewButton>
          <SelectDateButton  active={activeButton ? activeButton : null} onPress={() => handleSelect("Week")}>
            <Text style={{color: 'rgba(0, 48, 73, .8)', fontSize: 20, fontWeight: '300'}}>Week</Text>
          </SelectDateButton>
          <SelectDateButton active={activeButton2 ? activeButton2 : null} onPress={() => handleSelect("Month")}>
            <Text style={{color: 'rgba(0, 48, 73, .8)', fontSize: 20, fontWeight: '300'}}>Month</Text>
          </SelectDateButton>
        </ViewButton>

        {/* Chart place */}
        <ChartContainer>
          <View style={{ alignItems: 'center', margin: 20 }}>
            <Text style={{color: '#003049', fontSize: 24, fontWeight: '300'}}>Time spent chart</Text>
          </View>

          <ChartView>
            <Chart>
              <View style={{ alignItems: 'center' }} >
                <Svg width={'auto'} height={230}>
                <Circle cx={175} cy={125} r={40} fill="#F8F9FF"/>
                <VictoryPie 
                data={data}
                height={250}
                width={350}
                // padding={90}
                innerRadius={55}
                style={{ labels: { display: 'none' }}}
                animate={{ duration: 1500 }}
                colorScale={["#6F52ED", "#FFB800", "#FF4C61", "#33D69F" ]}
                />
                </Svg>
              </View>
            </Chart>

            {/* Text chart */}
            <TextChartView>
              <Column>
                <View style={{ width: 15, height: 15, borderRadius: 7.5, backgroundColor: '#6F52ED' }}></View>
                <ChartText>Work hours</ChartText>
                <ChartText2>{chartData.y} (
                  {parseFloat((chartData.y/(chartData.y+chartData.z+chartData.k+chartData.n))*100).toFixed(1)}%)
                </ChartText2>
              </Column>

              <Column>
                <View style={{ width: 15, height: 15, borderRadius: 7.5, backgroundColor: '#FFB800' }}></View>
                <ChartText>Study hours</ChartText>
                <ChartText2>{chartData.k} (
                  {parseFloat((chartData.k/(chartData.y+chartData.z+chartData.z+chartData.n))*100).toFixed(1)}%)
                </ChartText2>
              </Column>

              <Column>
                <View style={{ width: 15, height: 15, borderRadius: 7.5, backgroundColor: '#FF4C61' }}></View>
                <ChartText>Leisure hours</ChartText>
                <ChartText2>{chartData.n} (
                  {parseFloat((chartData.n/(chartData.y+chartData.z+chartData.k+chartData.n))*100).toFixed(1)}%)
                </ChartText2>
              </Column>

              <Column>
                <View style={{ width: 15, height: 15, borderRadius: 7.5, backgroundColor: '#33D69F' }}></View>
                <ChartText>Sleep hours</ChartText>
                <ChartText2>{chartData.z} (
                  {parseFloat((chartData.z/(chartData.y+chartData.z+chartData.k+chartData.n))*100).toFixed(1)}%)
                </ChartText2>
              </Column>
            </TextChartView>

          </ChartView>

        </ChartContainer>

      </ContentContainer>
      </Container>
    </Background>
  )
}

export default withNavigationFocus(Control);