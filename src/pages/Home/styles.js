import styled from 'styled-components/native';

export const Container = styled.View`
    padding-top: 64px;
    padding-bottom: 16px;
    background: #FFF;
    align-items: center;
    justify-content: center;
    border-bottom-width: 1px;
    border-bottom-color: #EBECF4;
`;

export const PostList = styled.FlatList`
    margin: 16px;
`;

export const FeedItem = styled.View`
    background: #FFF;
    border-radius: 5px;
    padding: 8px;
    flex-direction: row;
    margin: 8px;
`;

export const Avatar = styled.Image`
    width: 36px;
    height: 36px;
    border-radius: 18px;
    margin-right: 16px;
`;

export const Name = styled.Text`
    font-size: 15px;
    font-weight: 500;
    color: #454D65;
`;

export const TextTime = styled.Text`
    font-size: 11px;
    color: #C4C6CE;
    margin-top: 4px;
`;

export const FeedText = styled.Text`
    margin-top: 16px;
    font-size: 14px;
    color: #838899;
`;

export const ImagePost = styled.Image`
    /* width: undefined; */
    height: 150px;
    border-radius: 5px;
    margin: 16px;
`;
