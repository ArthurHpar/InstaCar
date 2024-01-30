import React from "react";
import { StyleSheet } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import {
  faBolt,
  faHouse,
  faMagnifyingGlass,
  faUser
} from "@fortawesome/free-solid-svg-icons";
import HomeScreen from "../views/HomeScreen";
import BoltScreen from "../views/BoltScreen";
import SearchScreen from "../views/SearchScreen";
import ProfileScreen from "../views/ProfileScreen";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";

const Tab = createBottomTabNavigator();

const TabBar = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarStyle: styles.tabNavigator,
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
        <Tab.Screen
          name='Home'
          component={HomeScreen}
          options={{ headerShown: false }}
        />
        <Tab.Screen
          name='Bolt'
          component={BoltScreen}
          options={{ headerShown: false }}
        />
        <Tab.Screen
          name='Search'
          component={SearchScreen}
          options={{ headerShown: false }}
        />
        <Tab.Screen
          name='Profile'
          component={ProfileScreen}
          options={{ headerShown: false }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  tabNavigator: {
    paddingLeft: 32,
    paddingRight: 32,
    alignItems: "center",
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    borderRadius: 9999,
    margin: 8,
    height: 64,
    backgroundColor: "#e5e7eb",
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0
  }
});

export default TabBar;
