import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { bg } from "./styles";

const App = () => {
  return (
    <View style={[bg.gray950]}>
      <Text>Olá, mundo!</Text>
    </View>
  );
};

export default App;
