import React from "react";
import { SafeAreaView } from "react-native";
import { width, height } from "./styles";
import TabBar from "./layouts/TabBar";

const App = () => {
  return (
    <SafeAreaView style={[width.wfull, height.hfull]}>
      <TabBar />
    </SafeAreaView>
  );
};

export default App;
