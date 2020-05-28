import styled from 'styled-components/native';
import { StyleSheet, Animated, TouchableOpacity } from "react-native";


export const Container = styled.View`
    flex: 1;
    width: 200px;
    height: 200px;
    align-items: center;
    justify-content: center;
`;

export const Out = styled(TouchableOpacity)`
    width: 100px;
    height: 40px;
    background: red;
`;
