import styled from 'styled-components/native';
import LinearGradient from "react-native-linear-gradient";
import { TouchableWithoutFeedback, TouchableOpacity } from "react-native";

export const Container = styled(LinearGradient).attrs({
    colors: ['#F07B3F', '#EA5455'],
    start: { x: 0, y: 1 },
    end: { x: 1, y: 1 }
})`
    padding-top: 64px;
    padding-bottom: 16px;
    background: #F07B3F;
    align-items: center;
    justify-content: center;
    /* border-bottom-width: 1px; */
    border-bottom-color: #EBECF4;
`;

export const FeedItem = styled(TouchableWithoutFeedback)`
`;

export const FeedContainer1 = styled.View`
    background: #fff;
    border-radius: 10px;
    flex-direction: row;
    margin: 8px;
    height: 130px;
    width: 350px;
`

export const Left = styled.View`
    flex: 1.5;
    background: #2D4059;
    border-top-left-radius: 10px;
    border-bottom-left-radius: 10px;
`;

export const TextID = styled.Text`
    color: #fff;
    font-size: 24px;
`;

export const TextDay = styled.Text`
    margin-left: -5px;
    color: #CBBBBB;
    font-size: 16px;
    width: 80px;
`;

export const TextHour = styled.Text`
    margin-left: -10px;
    color: #fff;
    font-size: 18px;
`;

export const Right = styled.View`
    flex: 3;
    background: #fff;
    border-radius: 10px;
`;

export const RightInside = styled.View`
    flex: 1;
    margin: 10px;
    align-items: center;
`;

export const ContentView = styled.View`
    flex-direction: column;
    margin-top: 10px;
    max-width: 100%;
`;

export const ColumnView = styled.View`
    flex-direction: row;
    align-items: center;
    margin: 0px 0px 10px 0px;
    max-height: 30px;
    width: 200px;
    max-width: 200px;
`;

// Expanded 

export const FeedContainer2 = styled.View`
    background: #fff;
    border-radius: 10px;
    flex-direction: column;
    margin: 8px;
    height: 390px;
    width: 350px;
`

export const Top = styled.View`
    flex: 0.16;
    flex-direction: row;
    justify-content: space-between;
    background: #2D4059;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
    padding: 10px 20px 0px 20px;
`;

export const TextIDE = styled.Text`
    color: #CBBBBB;
    font-size: 18px;
    margin-top: 10px;
`;

export const ExcludButton = styled(TouchableOpacity)`
    justify-content: center;
`;

export const TextDayE = styled.Text`
    color: #fff;
    font-size: 20px;
    margin-top: 10px;
`;

export const Avatar = styled.View`
    background: #F07B3F;
    align-items: center;
    justify-content: center;
    width: 40px;
    height: 40px;
    border-radius: 20px;
`;

export const Bottom = styled.View`
    flex: 1;
    flex-direction: column;
`;

export const ContentTop = styled.View`
    flex: 2;
`;

export const ContentViewE = styled.View`
    margin-left: 10px;
    flex-direction: column;
    margin-top: 15px;
    max-width: 100%;
`;

export const ColumnViewE = styled.View`
    flex-direction: row;
    align-items: center;
    margin: 0px 0px 10px 10px;
    max-height: 50px;
    max-width: 90%;
`;

export const ContentBottom = styled.View`
    flex: 3;
    margin-top: 10px;
`;

export const ColumnView2 = styled.View`
    flex-direction: row;
    align-items: center;
    margin: 0px 0px 20px 10px;
    max-height: 30px;
`;

export const ContentViewBottom = styled.View`
    flex-direction: column;
    margin-top: 15px;
    width: 90%;
    margin-left: 10px;
`;