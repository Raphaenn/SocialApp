import React from "react";
import { createAppContainer, createSwitchNavigator } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import { createBottomTabNavigator } from "react-navigation-tabs";

import Home from "./pages/Home";
import Dash from "./pages/Dash";

import SignIn from "./pages/SignIn";

export default createAppContainer(
    createSwitchNavigator({
        Sign: createSwitchNavigator({
            SignIn,
        }),
        App: createBottomTabNavigator({
            Home,
            Dash,
        },
        {
            resetOnBlur: true,
            tabBarOptions: {
                keyboardHidesTabBar: true,
                activeTintColor: '#fff',
                inactiveTintColor: 'rgba(255, 255, 255, 0.8)',
                style: {
                    backgroundColor: '#68b6ef',
                }
            }
        })
    })
);
