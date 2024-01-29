import React from "react";
import { View, Image, StyleSheet, Dimensions, Text } from "react-native";

const larguraDaTela = Dimensions.get("window").width;
const alturaDaTela = Dimensions.get("window").height;

const InfiniCard = ({ car }) => {
  return (
    <View style={styles.container}>
      <Image source={{ uri: car?.Image }} style={styles.imagem} />
      <Text style={styles.carName}>{car.name}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: larguraDaTela,
    height: alturaDaTela,
    alignItems: "center",
    justifyContent: "center"
  },
  carName: {
    position: "absolute",
    left: 0,
    right: 0,
    top: 0,
    padding: 8,
    backgroundColor: "#e5e7eb",
    margin: 8,
    color: "#1f2937",
    borderRadius: 8,
    opacity: 0.75,
    textAlign: "center",
    fontWeight: "700"
  },
  imagem: {
    width: "100%",
    height: "100%",
    resizeMode: "cover"
  }
});

export default InfiniCard;
