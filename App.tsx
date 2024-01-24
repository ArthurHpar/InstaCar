import React from "react";
import { View, Text, StyleSheet, SafeAreaView, TouchableOpacity } from "react-native";
import { backgroundColor, position, topRightBottomLeft, width, height } from "./styles";
import TabBar from "./src/layout/TabBar";
import api from "./fetchData.js";
import Card from "./src/components/card.tsx";

  function Search() {
    api.get('/supercars').then(
      response => {
        console.log(response.data)
      }
    ).catch(error => {console.log('error fetching data', error)})
  }

const App = () => {
  Search()
  return (
    <SafeAreaView style={[width.wfull, height.hfull]}>
      <TabBar></TabBar>
      <Text>ola mundo teste</Text>
      <TouchableOpacity onPress={Search} >
        <Text>I'M SUCTION CUP MAN LOOK AT ME GO!</Text>
      </TouchableOpacity>
      <Card />
    </SafeAreaView>
  );
};

export default App;
