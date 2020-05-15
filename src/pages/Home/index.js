import React from 'react';
import { View, Text, StyleSheet, Image, FlatList } from "react-native";
import { withNavigationFocus } from 'react-navigation';

import Background from "../../components/background";
import { Container, PostList, FeedItem, Avatar, Name, TextTime, FeedText, ImagePost } from './styles';

posts = [
  {
      id: "1",
      name: "Joe McKay",
      text:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      timestamp: 1569109273726,
      avatar: require("../../assets/tempAvatar.jpg"),
      image: require("../../assets/tempImage1.jpg")
  },
  {
      id: "2",
      name: "Karyn Kim",
      text:
          "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      timestamp: 1569109273726,
      avatar: require("../../assets/tempAvatar.jpg"),
      image: require("../../assets/tempImage2.jpg")
  },
  {
      id: "3",
      name: "Emerson Parsons",
      text:
          "Amet mattis vulputate enim nulla aliquet porttitor lacus luctus. Vel elit scelerisque mauris pellentesque pulvinar pellentesque habitant.",
      timestamp: 1569109273726,
      avatar: require("../../assets/tempAvatar.jpg"),
      image: require("../../assets/tempImage3.jpg")
  },
  {
      id: "4",
      name: "Kathie Malone",
      text:
          "At varius vel pharetra vel turpis nunc eget lorem. Lorem mollis aliquam ut porttitor leo a diam sollicitudin tempor. Adipiscing tristique risus nec feugiat in fermentum.",
      timestamp: 1569109273726,
      avatar: require("../../assets/tempAvatar.jpg"),
      image: require("../../assets/tempImage4.jpg")
  }
];

export default function Home() {

  renderPost = post => {
    return (
    <FeedItem>
      <Avatar source={post.avatar}></Avatar>

      <View style={{ flex: 1 }}>
        <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center" }}>
          <View>
            <Name>{post.name}</Name>
            <TextTime>{post.timestamp}</TextTime>
          </View>
        </View>
      </View>
      
      <FeedText>{post.text}</FeedText>
      <ImagePost source={post.image} resizeMode="cover" />

    </FeedItem>
    );
  }

  return (
    <Background>
      <Container style={{ shadowColor: "#454D65", shadowOffset: { height: 5 }, shadowRadius: 15, 
      shadowOpacity: 0.2, zIndex: 10}}>
        <Text>Feed</Text>
      </Container>

      <PostList
        data={posts}
        renderItem={({ item }) => this.renderPost(item)}
        keyExtractor={item => item.id}
        showsVerticalScrollIndicator={false}
      ></PostList>
    </Background>

)};