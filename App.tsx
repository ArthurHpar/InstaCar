import React from "react";
import { View, Text, StyleSheet, SafeAreaView } from "react-native";
import { backgroundColor, position, topRightBottomLeft, width, height } from "./styles";
import TabBar from "./src/layout/TabBar";

const App = () => {
  return (
    <SafeAreaView style={[width.wfull, height.hfull]}>
      <TabBar></TabBar>
      <Text>ola mundo</Text>
    </SafeAreaView>
  );
};

export default App;
