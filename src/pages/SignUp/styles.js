import styled from 'styled-components/native';
import { StyleSheet, Animated, TouchableOpacity } from "react-native"

export const Container = styled.View`
    flex: 1;
`;

export const BackButton = styled(TouchableOpacity)`
    position: absolute;
    margin-top: 48px;
    margin-left: 32px;
    width: 32px;
    height: 32px;
    border-radius: 16px;
    background: rgba(21, 22, 48, 0.1);
    align-items: center;
    justify-content: center;
`;

export const TopDiv = styled.View`
    position: absolute;
    margin-top: 64px;
    align-items: center;
    width: 100%;
`;

export const Title = styled.Text`
    margin-top: 32px;
    font-size: 18px;
    font-weight: 500;
    text-align: center;
    color: black;
`;

export const AvatarInput = styled(TouchableOpacity)`
    width: 100px;
    height: 100px;
    background: #E1E2E6;
    border-radius: 50px;
    margin-top: 48px;
    justify-content: center;
    align-items: center;
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

