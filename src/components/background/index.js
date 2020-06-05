import LinearGradient from "react-native-linear-gradient";
import styled from "styled-components/native";

export default styled(LinearGradient).attrs({
    colors: ['#F07B3F', '#EA5455'],
    start: { x: 0, y: 1 },
    end: { x: 1, y: 1 }
})`
    flex: 1;
`;