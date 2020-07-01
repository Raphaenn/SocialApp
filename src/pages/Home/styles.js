import styled from 'styled-components/native';
import LinearGradient from "react-native-linear-gradient";
import { TouchableOpacity } from "react-native";

export const Container = styled(LinearGradient).attrs({
    colors: ['#F07B3F', '#EA5455'],
    start: { x: 0, y: 1 },
    end: { x: 1, y: 1 }
})`
    margin-top: 12%;
    padding-bottom: 16px;
    align-items: center;
    justify-content: center;
    border-bottom-color: #EBECF4;
`;

export const ModalContainer  = styled.Modal``;

export const ModalView = styled.View`
    align-items: center;
    flex: 1;
    padding-top: 12%;
    background: #fff;
`;

export const SubContainer = styled.View`
    flex-direction: row;
    align-items: center;
    justify-content: center;
`;

export const SubTitle = styled.Text`
    text-align: left;
    margin-left: 5px;
    font-size: 16px;
    font-weight: 300;
    color: #2D4059;
    margin-top: -20px;
`;

export const Img = styled.Image``;

export const Art = styled.Image`
    height: 160px;
    opacity: 0.8;
    margin-left: 20px;
`;

export const ModalButton = styled(TouchableOpacity)``;

export const FlatConainer = styled.View`
    flex: 1;
    margin-top: 10px;
    align-items: center;
`;

export const GifContainer = styled.View`
    align-items: center;
    flex: 1;
    padding-top: 80px;
`;