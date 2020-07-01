import styled from 'styled-components/native';
import { TouchableOpacity, TouchableWithoutFeedback } from "react-native";

export const ModalView = styled.ScrollView.attrs({
    showsVerticalScrollIndicator: false,
})`
    flex: 1;
    flex-direction: column;
    align-content: center;
    padding-top: 12%;
    background: #fff;
`;

export const ViewScroll = styled.ScrollView`
    flex: 1;
    align-content: center;
`;

export const ModalTitle = styled.Text`
    color: #2D4059;
    font-size: 24px;
    font-weight: bold;
    align-self: center;
`; 

export const TopView = styled.View`
    flex-direction: row;
    justify-content: space-between;
    width: 100%;
    padding: 0px 20px 10px 20px;
`; 

export const Title = styled.Text`
    font-size: 24px;
    font-weight: bold;
    color: #FB5607;
    text-align: center;
    width: 65%;
    margin-top: 110px;
`; 

export const Img = styled.Image`
    margin-top: 20px;
`; 

export const PlansContainer = styled.View`
    width: 100%;
`; 

export const PlanCards = styled.FlatList.attrs({
    showsHorizontalScrollIndicator: false,
})`
    margin-top: 40px;
    margin-bottom: 30px;
`; 

export const CardContainer = styled.View`
    justify-content: center;
    align-items: center;
`;

export const SelectButton = styled(TouchableWithoutFeedback)``;

export const Card = styled.View`
    background: #2D4059;
    border-radius: 5px;
    margin: 8px;
    height: 140px;
    width: 105px;
    justify-content: center;

    border: ${props => props.click == props.ind ? "3px solid #FD9A12" : null};
`;

export const TextCards = styled.Text`
    font-size: 16px;
    text-align: center;
    font-weight: bold;
    color: #fff;
    align-self: center;
`;

export const JoinButton = styled(TouchableOpacity)`
    margin: 10px 30px 0 30px;
    background: #FD9A12;
    border-radius: 10px;
    height: 52px;
    align-items: center;
    justify-content: center;
`;

export const FooterView = styled.View`
    flex: 1;
    width: 100%;
    align-content: center;
    padding-left: 40px;
    padding-right: 40px;
`; 