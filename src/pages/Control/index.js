import React from 'react';
import { View, Text } from 'react-native';

import Background from "../../components/background";
import { Top, Title, SubContainer, SubTitle, Art, ContentContainer, ViewButton, SelectDateButton, ChartContainer, ChartView, Chart, ChartText } from './styles';
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
            <View>
              <ChartText>Work hours</ChartText>
              <ChartText>Study hours</ChartText>
              <ChartText>Leisure hours</ChartText>
              <ChartText>Sleep hours</ChartText>
            </View>

          </ChartView>

        </ChartContainer>

      </ContentContainer>
    </Background>
  )
}