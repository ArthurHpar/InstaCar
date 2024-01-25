import React from "react";
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  Button,
  ScrollView
} from "react-native";
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
  size,
  gap
} from "../styles";

const BoltScreen = () => {
  return (
    <ScrollView
      style={[padding.p2, display.flex, gap.gap2, flexDirection.flexCol]}>
      <View
        style={[padding.p2, display.flex, gap.gap2, flexDirection.flexCol]}>
        <View style={[display.flex, gap.gap2, flexDirection.flexRow]}>
          <View
            style={[
              size.size44,
              backgroundColor.blue600,
              borderRadius.roundedlg
            ]}></View>
          <View
            style={[
              size.size44,
              backgroundColor.blue600,
              borderRadius.roundedlg
            ]}></View>
        </View>
        <View style={[display.flex, gap.gap2, flexDirection.flexRow]}>
          <View
            style={[
              size.size44,
              backgroundColor.blue600,
              borderRadius.roundedlg
            ]}></View>
          <View
            style={[
              size.size44,
              backgroundColor.blue600,
              borderRadius.roundedlg
            ]}></View>
        </View>
        <View style={[display.flex, gap.gap2, flexDirection.flexRow]}>
          <View
            style={[
              size.size44,
              backgroundColor.blue600,
              borderRadius.roundedlg
            ]}></View>
          <View
            style={[
              size.size44,
              backgroundColor.blue600,
              borderRadius.roundedlg
            ]}></View>
        </View>
        <View style={[display.flex, gap.gap2, flexDirection.flexRow]}>
          <View
            style={[
              size.size44,
              backgroundColor.blue600,
              borderRadius.roundedlg
            ]}></View>
          <View
            style={[
              size.size44,
              backgroundColor.blue600,
              borderRadius.roundedlg
            ]}></View>
        </View>
        <View style={[display.flex, gap.gap2, flexDirection.flexRow]}>
          <View
            style={[
              size.size44,
              backgroundColor.blue600,
              borderRadius.roundedlg
            ]}></View>
          <View
            style={[
              size.size44,
              backgroundColor.blue600,
              borderRadius.roundedlg
            ]}></View>
        </View>
        <View style={[display.flex, gap.gap2, flexDirection.flexRow]}>
          <View
            style={[
              size.size44,
              backgroundColor.blue600,
              borderRadius.roundedlg
            ]}></View>
          <View
            style={[
              size.size44,
              backgroundColor.blue600,
              borderRadius.roundedlg
            ]}></View>
        </View>
      </View>
    </ScrollView>
  );
};

export default BoltScreen;
