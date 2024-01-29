import React from "react";
import { Image, Text, View } from "react-native";
import {
  padding,
  display,
  alignItems,
  textColor,
  fontWeight
} from "../styles";

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
