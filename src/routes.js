import React from "react";
import { createAppContainer, createSwitchNavigator } from "react-navigation";
// import { createStackNavigator } from "react-navigation-stack";
import { createBottomTabNavigator } from "react-navigation-tabs";
import Icon from "react-native-vector-icons/Ionicons";

import Home from "./pages/Home";
import Dash from "./pages/Dash";
import Notifications from "./pages/Notifications";
import Profile from "./pages/Profile";
import PostScreen from "./pages/PostScreen";

import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";

export default createAppContainer(
    createSwitchNavigator({
        Sign: createSwitchNavigator({
            SignIn,
            SignUp
        }),
        App: createBottomTabNavigator({
            Home: {
              screen: Home,
              navigationOptions: {
              tabBarIcon: ({ tintColor }) => <Icon name="ios-home" size={24} color={tintColor} />
              },
            },
            Dash: {
                screen: Dash,
                navigationOptions: {
                    tabBarIcon: ({ tintColor }) => <Icon name="ios-chatboxes" size={24} color={tintColor} />
                }
            },
            Post: {
                screen: PostScreen,
                navigationOptions: {
                    tabBarIcon: ({ tintColor }) => (
                        <Icon
                            name="ios-add-circle"
                            size={48}
                            color="#E9446A"
                            style={{
                                shadowColor: "#E9446A",
                                shadowOffset: { width: 0, height: 10 },
                                shadowRadius: 10,
                                shadowOpacity: 0.3
                            }}
                        />
                    )
                }
            },
            Notifications: {
                screen: Notifications,
                navigationOptions: {
                  tabBarIcon: ({ tintColor }) => <Icon name="ios-notifications" size={24} color={tintColor} />
                  }
            },
            Profile: {
                screen: Profile,
                navigationOptions: {
                    tabBarIcon: ({ tintColor }) => <Icon name="ios-person" size={24} color={tintColor} />
                }
            }
        },
        {
            resetOnBlur: true,
            tabBarOptions: {
                showLabel: false,
                keyboardHidesTabBar: true,
                activeTintColor: '#161F3D',
                inactiveTintColor: '#B8BBC4',
                style: {
                    backgroundColor: '#EBECF4',
                }
            }
        })
    })
);
