import styled from 'styled-components/native';
import LinearGradient from "react-native-linear-gradient";
import { StyleSheet, Animated, TouchableOpacity } from "react-native";

export const Container = styled(LinearGradient).attrs({
    colors: ['#F07B3F', '#EA5455'],
    start: { x: 0, y: 1 },
    end: { x: 1, y: 1 }
})`
    flex: 1;
    padding-top: 64px;
    padding-bottom: 16px;
    background: #F07B3F;
    align-items: center;
    justify-content: center;
    /* border-bottom-width: 1px; */
    border-bottom-color: #EBECF4;
`;

export const FeedItem = styled.View`
    background: #fff;
    border-radius: 10px;
    flex-direction: column;
    margin: 8px;
    height: 390px;
    width: 350px;
`;

export const Top = styled.View`
    flex: 0.16;
    flex-direction: row;
    justify-content: space-between;
    background: #2D4059;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
    padding: 10px 20px 0px 20px;
`;

export const TextID = styled.Text`
    color: #CBBBBB;
    font-size: 18px;
    margin-top: 10px;
`;

export const TextDay = styled.Text`
    color: #fff;
    font-size: 20px;
    margin-top: 10px;
`;

export const Avatar = styled.View`
    background: #F07B3F;
    width: 40px;
    height: 40px;
    border-radius: 20px;
`;

export const Bottom = styled.View`
    flex: 1;
    flex-direction: column;
`;

export const ContentTop = styled.View`
    flex: 2;
`;

export const ContentView = styled.View`
    flex-direction: row;
    margin-top: 15px;
    height: 70%;
    width: 75%;
    max-width: 100%;
`;

export const IconView = styled.View`
    flex: 0.8;
    align-items: center;
`;

export const TextView = styled.View`
    flex: 3;
    margin-left: -10px;
`;

export const ContentBottom = styled.View`
    flex: 3;
`;

export const ContentViewBottom = styled.View`
    flex-direction: row;
    margin-top: 15px;
    height: 70%;
    width: 90%;
`;

