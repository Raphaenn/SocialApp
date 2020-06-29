import styled from 'styled-components/native';
import { StyleSheet, TouchableOpacity } from "react-native";


export const ContainerTop = styled.View`
    margin-top: 12%;
    padding-bottom: 16px;
    align-items: center;
    justify-content: center;
    border-bottom-color: rgba(255, 255, 255, 0.3);
    border-bottom-width: 1px;
`;

export const Title = styled.Text`
    font-size: 22px;
    font-weight: bold;
    color: #fff;
`;

export const Container = styled.View`
    flex: 1;
    /* justify-content: center; */
`;

export const AvatarView = styled(TouchableOpacity)`
    align-self: center;
    margin-top: 5%;
    align-items: center;
    justify-content: center;
    width: 120px;
    height: 120px;
    border-radius: 60px;
    background: #fff;
`;

export const AvatarImg = styled.Image`
    width: 110px;
    height: 110px;
    border-radius: 55px;
`;


export const FormView = styled.View`
    flex: 1;
    align-items: center;
`;

export const Form = styled.TextInput`
    width: 300px;
    height: 45px;
    background: #fff;
    margin-top: 20px;
    padding-left: 20px;
    border-radius: 5px;
    font-size: 18px;
`;

export const ButtomView = styled.View`
    margin-top: 30px;
    flex-direction: row;
    justify-content: space-between;
    width: 300px;
`

export const ChangeButtom = styled(TouchableOpacity)`
    background: #33D69F;
    margin-left: 20px;
    border-radius: 4px;
    width: 40%;
    height: 52px;
    align-items: center;
    justify-content: center;
`;

export const LogoutButtom = styled(TouchableOpacity)`
    background: #F5374E;
    margin-right: 20px;
    border-radius: 4px;
    width: 40%;
    height: 52px;
    align-items: center;
    justify-content: center;
`;

export const Out = styled(TouchableOpacity)`
    width: 100px;
    height: 40px;
    background: red;
`;

export const LoadView = styled.View`
    height: 200%;
    width: 100%;
    align-items: center;
    justify-content: center;
    position: absolute;
    background: rgba(255, 255, 255, .4);
    z-index: 100;
`;
