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