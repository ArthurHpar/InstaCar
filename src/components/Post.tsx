import React from "react";
import { ScrollView, Text, View } from "react-native";
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
  alignItems,
  size,
  gap,
  width,
  borderWidth,
  boxShadow,
  boxShadowColor,
  borderColor,
  opacity
} from "../styles";

export const Post = () => {
  return (
    <View style={[display.flex, gap.gap2, flexDirection.flexCol]}>
      <View
        style={[
          padding.p2,
          display.flex,
          gap.gap2,
          borderWidth.border,
          borderRadius.roundedlg,
          flexDirection.flexCol,
          boxShadow.shadowxl,
          boxShadowColor.blue200,
          borderColor.gray400,
          backgroundColor.gray200
        ]}>
        <View
          style={[
            display.flex,
            gap.gap2,
            flexDirection.flexRow,
            alignItems.itemsCenter
          ]}>
          <View
            style={[
              size.size10,
              backgroundColor.blue600,
              borderRadius.roundedfull
            ]}></View>
          <Text>teste</Text>
        </View>
        <View
          style={[
            width.wfull,
            height.h80,
            backgroundColor.blue600,
            borderRadius.roundedlg,
            position.relative
            ,
          ]}>
          <Text style={[position.absolute, topRightBottomLeft.left0, topRightBottomLeft.bottom0, padding.p2, backgroundColor.gray400, margin.m2, borderRadius.roundedlg, opacity.opacity75]}>teste</Text>
        </View>
      </View>
    </View>
  );
};
