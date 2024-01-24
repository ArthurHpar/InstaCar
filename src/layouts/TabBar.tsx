import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import {
  faBolt,
  faHouse,
  faMagnifyingGlass,
  faUser
} from "@fortawesome/free-solid-svg-icons";
import {
  backgroundColor,
  position,
  topRightBottomLeft,
  height,
  padding,
  margin,
  borderRadius,
  display,
  flexDirection,
  justifyContent,
  alignItems
} from "../styles";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "../views/HomeScreen";
import BoltScreen from "../views/BoltScreen";
import SearchScreen from "../views/SearchScreen";
import ProfileScreen from "../views/ProfileScreen";
import { NavigationContainer } from "@react-navigation/native";

const Tab = createBottomTabNavigator();

const TabBar = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarStyle: {
            ...padding.px8,
            ...alignItems.itemsCenter,
            ...display.flex,
            ...flexDirection.flexRow,
            ...justifyContent.justifyBetween,
            ...borderRadius.roundedfull,
            ...margin.m2,
            ...height.h16,
            ...backgroundColor.gray200,
            ...position.absolute,
            ...topRightBottomLeft.bottom0,
            ...topRightBottomLeft.insetX0
          },
          tabBarInactiveTintColor: "#4b5563",
          tabBarActiveTintColor: "#2563eb",
          tabBarIcon: ({ focused, color, size }) => {
            let icon;

            switch (route.name) {
              case "Home":
                icon = faHouse;
                break;
              case "Bolt":
                icon = faBolt;
                break;
              case "Search":
                icon = faMagnifyingGlass;
                break;
              case "Profile":
                icon = faUser;
                break;
              default:
                icon = faHouse;
            }

            return <FontAwesomeIcon icon={icon} size={24} color={color} />;
          },
          tabBarLabel: () => null
        })}>
        <Tab.Screen name='Home' component={HomeScreen} />
        <Tab.Screen name='Bolt' component={BoltScreen} />
        <Tab.Screen name='Search' component={SearchScreen} />
        <Tab.Screen name='Profile' component={ProfileScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default TabBar;
