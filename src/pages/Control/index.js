import React from 'react';
import { View, Text } from 'react-native';

import Background from "../../components/background";
import { Top, Title, SubContainer, SubTitle, Art, ContentContainer, ViewButton, SelectDateButton, ChartContainer, ChartView, Chart, TextChartView, Column, ChartText, ChartText2 } from './styles';
import Chartart from "../../assets/ChartArt/Chartart.png";

export default function Control() {
  return (
    <Background>
      <Top>
        <Title>New SelfBack</Title>
        <SubContainer>
          <View style={{ marginRight: 5, alignItems: 'center', justifyContent: 'center', width: 240 }}>
          <SubTitle>Get week by week summaries and other stats.</SubTitle>
          </View>
          <Art source={Chartart} />
        </SubContainer>
      </Top>

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
    </Background>
  )
}