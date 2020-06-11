import styled from 'styled-components/native';
import { StyleSheet, Animated, TouchableOpacity } from "react-native";

export const Container = styled.View`
    flex: 1;
`;

export const Top = styled.View`
    padding-top: 64px;
    align-items: center;
    justify-content: center;
    border-bottom-color: #EBECF4;
`;

export const Title = styled.Text`
    font-size: 22px;
    font-weight: bold;
    color: #fff;
`;

export const SubContainer = styled.View`
    flex-direction: row;
`;

export const SubTitle = styled.Text`
    text-align: center;
    margin-left: 15px;
    font-size: 22px;
    font-weight: 300;
    color: #fff;
`;

export const Art = styled.Image`
    height: 180px;
`;

export const FormContainer = styled.ScrollView.attrs({
    showsVerticalScrollIndicator: false,
})`
    flex: 1;

`;

export const Form = styled.View`
    margin: 20px;
    background: rgba(255, 255, 255, .1);
    border-radius: 10px;
    align-content: center;
    padding-bottom: 20px;
`;

export const ButtonView = styled.View`
    margin: 20px 20px 0 20px;
    flex-direction: row;
    justify-content: space-between;
`;

export const EnterDay = styled(TouchableOpacity)`
    width: 160px;
    height: 45px;
    background: #003049;
    border-radius: 5px;
    align-items: center;
    justify-content: center;
`;

export const FormContent = styled.View`
    margin: 20px 20px 0 20px;
    align-items: center;
`;

export const InputNote = styled.TextInput`
    width: 300px;
    height: 45px;
    background: #fff;
    margin-top: 20px;
    padding-left: 20px;
    border-radius: 5px;
    font-size: 18px;
`;

export const FormContent2 = styled.View`
    height: 150px;
    margin: 20px 20px 0 20px;
    align-items: center;
    background: #003049;
    border-radius: 5px;
`;

export const HoursDiv = styled.View`
    flex-direction: column;
    margin-top: 15px;
    flex-wrap: wrap;
    max-height: 85px;
    justify-content: space-between;
    align-items: center;
`;

export const InputHours = styled.TextInput`
    width: 80px;
    height: 35px;
    margin-left: 20px;
    background: #fff;
    border-radius: 5px;
    padding-left: 10px;
    font-weight: 400;
`;

export const FormContent3 = styled.View`
    margin: 20px 20px 0 20px;
    align-items: center;
`;

export const FormContent4 = styled.View`
    margin: 20px 20px 0 20px;
    align-items: center;
`