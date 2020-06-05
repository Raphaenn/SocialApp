import styled from 'styled-components/native';
import LinearGradient from "react-native-linear-gradient";

export const Container = styled(LinearGradient).attrs({
    colors: ['#F07B3F', '#EA5455'],
    start: { x: 0, y: 1 },
    end: { x: 1, y: 1 }
})`
    padding-top: 64px;
    padding-bottom: 16px;
    align-items: center;
    justify-content: center;
    border-bottom-color: #EBECF4;
`;

export const FlatConainer = styled.View`
    flex: 1;
    align-items: center;
`;