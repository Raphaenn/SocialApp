import styled from 'styled-components/native';
import { TouchableOpacity } from "react-native";


export const Top = styled.View`
    margin-top: 12%;
    align-items: center;
    justify-content: center;
    border-bottom-color: #EBECF4;
`;

export const Title = styled.Text`
    font-size: 22px;
    font-weight: bold;
    color: #fff;
`;

export const Container = styled.ScrollView.attrs({
    showsVerticalScrollIndicator: false,
})``;

export const SubContainer = styled.View`
    flex-direction: row;
`;

export const SubTitle = styled.Text`
    text-align: center;
    margin-left: 15px;
    font-size: 21px;
    font-weight: 300;
    color: #fff;
`;

export const Art = styled.Image`
    height: 160px;
    opacity: 0.6;
`;

export const ContentContainer = styled.View`
    flex: 1;
    /* margin: 40px 40px 20px 40px; */
    margin-top: 20px;
    margin-left: 30px;
    margin-right: 30px;
    margin-bottom: 20px;
`;

export const ViewButton = styled.View`
    /* margin: 0 20px 0 20px; */
    flex-direction: row;
    justify-content: space-between;
`;

export const SelectDateButton = styled(TouchableOpacity)`
    width: 47%;
    height: 40px;
    background: #fff;
    border-radius: 5px;
    align-items: center;
    justify-content: center;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
`;

export const ChartContainer = styled.View`
    margin-top: 20px;
    background: #fff;
    flex: 1;
    border-radius: 10px;
`;

export const ChartView = styled.View`
    flex: 1;
    border-top-width: 1px;
    border-top-color: #EBECF4;
`;

export const Chart = styled.View`
    flex: 1;
    align-content: center;
    justify-content: center;
`;

export const TextChartView = styled.View`
    margin: 10px 10px 10px 10px;
    align-self: center;
`;

export const Column = styled.View`
    flex-direction: row;
    align-items: center;
    margin: 5px 0px 10px 0px;
    max-height: 30px;
    /* max-width: 200px; */
    opacity: .8;
`;

export const ChartText = styled.Text`
    font-size: 18px;
    color: #003049;
    font-weight: 300;
    margin-left: 10px;
    width: 58%;
`;

export const ChartText2 = styled.Text`
    font-size: 17px;
    color: #003049;
    font-weight: 500;
`;