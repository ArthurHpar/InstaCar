import React, { useState } from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";
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
  alignItems,
  size,
  gap,
  width,
  borderWidth,
  boxShadow,
  boxShadowColor,
  borderColor,
  opacity,
  textColor,
  fontWeight
} from "../styles";
import FlipCard from "react-native-flip-card";

const PostCar = ({ car }) => {
  return (
    <View style={[display.flex, alignItems.itemsCenter, padding.p2]}>
      <Image
        source={{ uri: car?.Image }}
        style={{ height: 50, width: 50, margin: 4, borderRadius: 30,  }}
      />
      <Text style={[textColor.gray800, fontWeight.fontBold]}>
        {" "}
        {car?.Brand}{" "}
      </Text>
    </View>
  );
};
export default PostCar;
