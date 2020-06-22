import React from 'react';
import { View, Text } from 'react-native';
import { VictoryBar, VictoryChart, VictoryTheme, VictoryPie } from "victory-native";
import Svg, { Circle } from 'react-native-svg'

import Background from "../../components/background";
import { Top, Title, Container, SubContainer, SubTitle, Art, ContentContainer, ViewButton, SelectDateButton, ChartContainer, ChartView, Chart, TextChartView, Column, ChartText, ChartText2 } from './styles';
import Chartart from "../../assets/ChartArt/Chartart.png";

export default function Control() {

  const data = [
    { x: 'work', y: 8 },
    { x: 'study', y: 5 },
    { x: 'leisure', y: 3 },
    { x: 'sleep', y: 8 }
  ];
  
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
          <SelectDateButton><Text style={{color: 'rgba(0, 48, 73, .8)', fontSize: 20, fontWeight: '300'}}>Week</Text></SelectDateButton>
          <SelectDateButton><Text style={{color: 'rgba(0, 48, 73, .8)', fontSize: 20, fontWeight: '300'}}>Month</Text></SelectDateButton>
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
                <ChartText2>20 (30%)</ChartText2>
              </Column>

              <Column>
                <View style={{ width: 15, height: 15, borderRadius: 7.5, backgroundColor: '#FFB800' }}></View>
                <ChartText>Study hours</ChartText>
                <ChartText2>20 (30%)</ChartText2>
              </Column>

              <Column>
                <View style={{ width: 15, height: 15, borderRadius: 7.5, backgroundColor: '#FF4C61' }}></View>
                <ChartText>Leisure hours</ChartText>
                <ChartText2>20 (30%)</ChartText2>
              </Column>

              <Column>
                <View style={{ width: 15, height: 15, borderRadius: 7.5, backgroundColor: '#33D69F' }}></View>
                <ChartText>Sleep hours</ChartText>
                <ChartText2>20 (30%)</ChartText2>
              </Column>
            </TextChartView>

          </ChartView>

        </ChartContainer>

      </ContentContainer>
      </Container>
    </Background>
  )
}