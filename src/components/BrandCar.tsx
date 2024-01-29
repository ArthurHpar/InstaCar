import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";

const PostCar = ({ car }) => {
  return (
    <View style={styles.container}>
      <Image source={{ uri: car?.Image }} style={styles.imagem} />
      <Text style={styles.text}>{car?.Brand}</Text>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    padding: 8
  },
  imagem: {
    width: 48,
    height: 48,
    margin: 4,
    borderRadius: 9999
  },
  text: {
    color: "#1f2937",
    fontWeight: "700"
  }
});
export default PostCar;
