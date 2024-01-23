import React from "react";
import { View, Text, StyleSheet, SafeAreaView, Button } from "react-native";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import {
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
  alignItems,
} from "../../styles";

const App = () => {
  return (
    <View
      style={[
        padding.py2,
        padding.px16,
        alignItems.itemsCenter,
        display.flex,
        flexDirection.flexRow,
        justifyContent.justifyBetween,
        borderRadius.roundedfull,
        margin.m2,
        height.h16,
        backgroundColor.gray300,
        position.absolute,
        topRightBottomLeft.bottom0,
        topRightBottomLeft.insetX0
      ]}>
      <FontAwesomeIcon icon={faHouse} />
      <FontAwesomeIcon icon={faMagnifyingGlass} />
      <FontAwesomeIcon icon={faUser} />
    </View>
  );
};

export default App;
