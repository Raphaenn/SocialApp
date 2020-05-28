import styled from 'styled-components/native';
import { StyleSheet, Animated, TouchableOpacity } from "react-native";

export const Container = styled.View`
    flex: 1;
`;

export const Title = styled.Text`
    margin-top: -32px;
    font-size: 22px;
    font-weight: 400;
    text-align: center;
    color: #666666;
`;

export const Form = styled.View`
    margin-bottom: 48px;
    margin: 30px;
`;

export const InputTitle = styled.Text`
    color: #8A8F9E;
    font-size: 12px;
    text-transform: uppercase;
`;

export const Space1 = styled.TextInput`
    border-bottom-color: #8A8F9E;
    border-bottom-width: ${StyleSheet.hairlineWidth}px;
    height: 40px;
    font-size: 15px;
    color: #161F3D;
`;

export const LogButton = styled(TouchableOpacity)`
    margin: 30px;
    background: #E9446A;
    border-radius: 4px;
    height: 52px;
    align-items: center;
    justify-content: center;
`;

export const LogButton2 = styled(TouchableOpacity)``;

export const Content = styled.Text``;

