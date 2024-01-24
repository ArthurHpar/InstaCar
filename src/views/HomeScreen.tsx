import React from "react";
import { View, Text, StyleSheet, SafeAreaView, Button } from "react-native";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faBolt } from "@fortawesome/free-solid-svg-icons";
import { backgroundColor } from "../styles";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Card from "../components/card";

const Tab = createBottomTabNavigator();

const HomeScreen = () => {
  return (
    <>
      <Text>ola mundo 23456</Text>
      <Card />
    </>
  );
};

export default HomeScreen;
