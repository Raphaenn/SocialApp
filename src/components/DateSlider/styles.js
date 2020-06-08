import styled from 'styled-components/native';
import LinearGradient from "react-native-linear-gradient";
import { StyleSheet, Animated, TouchableOpacity } from "react-native";

export const CalendarContainer = styled.View`
`

export const DateSlider = styled.FlatList.attrs({
    showsHorizontalScrollIndicator: false
})`
    max-height: 80px;
`;

export const DateButtom = styled(TouchableOpacity)`
    padding: 5px;
    margin-left: 10px;
    height: 55px;
    width: 40px;
    border-radius: 40px;
    align-items: center;
`;

export const TextName = styled.Text`
    text-transform: uppercase;
    font-size: 12px;
    font-weight: 400;
    color: #fff;
`;

export const TextDay = styled.Text`
    color: #fff;
    font-weight: 500;
    font-size: 16px;
`;

export const Daymark = styled.View`
    margin-top: 2px;
    align-items: center;
    justify-content: center;
    width: 25px;
    height: 25px;
    border-radius: 12.5px;

    background: ${props => props.activeNow ? '#2D4059' : 'rgba(255, 255, 255, 0)'};

`;

