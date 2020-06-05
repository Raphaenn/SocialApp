import styled from 'styled-components/native';
import LinearGradient from "react-native-linear-gradient";
import { TouchableOpacity, TouchableWithoutFeedback } from "react-native";
import { FlatList } from 'react-native-gesture-handler';

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

export const PostList = styled(FlatList)`
    margin: 16px;
    align-self: center;
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
    margin-left: -50px;
    color: #CBBBBB;
    font-size: 16px;
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
    flex-direction: row;
    margin-top: 10px;
    height: 70%;
    width: 75%;
    margin-left: -30%;
    max-width: 100%;
`;

export const IconView = styled.View`
    flex: 0.8;
    align-items: center;
`;

export const TextView = styled.View`
    flex: 3;
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

export const TextDayE = styled.Text`
    color: #fff;
    font-size: 20px;
    margin-top: 10px;
`;

export const Avatar = styled.View`
    background: #F07B3F;
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
    flex-direction: row;
    margin-top: 15px;
    height: 70%;
    width: 75%;
    max-width: 100%;
`;

export const IconViewE = styled.View`
    flex: 0.8;
    align-items: center;
`;

export const TextViewE = styled.View`
    flex: 3;
    margin-left: -10px;
`;

export const ContentBottom = styled.View`
    flex: 3;
`;

export const ContentViewBottom = styled.View`
    flex-direction: row;
    margin-top: 15px;
    height: 70%;
    width: 90%;
`;