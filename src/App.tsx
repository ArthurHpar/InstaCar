import React from "react";
import { View, Text, StyleSheet, SafeAreaView } from "react-native";
import {
  backgroundColor,
  position,
  topRightBottomLeft,
  width,
  height
} from "./styles";
import { NavigationContainer } from "@react-navigation/native";
import TabBar from "./layouts/TabBar";

const App = () => {
  return (
    <SafeAreaView style={[width.wfull, height.hfull]}>

        <TabBar/>

    </SafeAreaView>
  );
};

export default App;
