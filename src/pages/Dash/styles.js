import styled from 'styled-components/native';
import LinearGradient from "react-native-linear-gradient";
import { StyleSheet, Animated, TouchableOpacity } from "react-native";

export const ContainerTop = styled.View`
    padding-top: 64px;
    padding-bottom: 16px;
    align-items: center;
    justify-content: center;
    border-bottom-color: #EBECF4;
`;

export const Title = styled.Text`
    font-size: 22px;
    font-weight: bold;
    color: #fff;
`;

export const SubTitle = styled.Text`
    text-align: center;
    margin-top: 30px;
    font-size: 22px;
    font-weight: 300;
    color: #fff;
`;

export const ContentContainer = styled.View`
    flex: 1;
    flex-direction: column;
`;

export const GradeContainer = styled.View`
    flex: 1.5;
    align-content: center;
    justify-content: center;
`;

export const CardContent = styled.View`
    flex: 1;
    margin: 35px 40px 35px 40px;
    background: rgba(255, 255, 255, .4);
    border-radius: 10px;
    align-items: center;
    justify-content: center;
`;

export const QuarterContainer = styled.View`
    flex: 3;
    flex-direction: column;
    flex-wrap: wrap;
    align-content: center;
    /* justify-content: center; */
`;

export const GridContainer1 = styled.View`
    /* background:red; */
    align-items: center;
    width: 150px;
    height: 150px;  
    margin: 10px;
`;

export const GridContainer2 = styled.View`
    /* background:red;   */
    align-items: center;
    width: 150px;
    height: 150px;  
    margin: 10px;
`;

export const GridContainer3 = styled.View`
    /* background:red; */
    align-items: center;
    width: 150px;
    height: 150px;  
    margin: 10px;
`;

export const GridContainer4 = styled.View`
    /* background:red; */
    align-items: center;
    width: 150px;
    height: 150px;  
    margin: 10px;
`;

export const Icon = styled.Image`
    width: 50px;
    height: 50px;
`;

export const GradeText = styled.Text`
    font-size: 30px;
    font-weight: bold;
    color: #fff;
`; 

export const CatText = styled.Text`
    margin-top: 5px;
    font-size: 20px;
    text-align: center;
    font-weight: 300;
    color: #fff;
`;