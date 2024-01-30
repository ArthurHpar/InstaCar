import React, { useState } from "react";
import {
  Image,
  Platform,
  StyleSheet,
  Text,
  TouchableOpacity,
  View
} from "react-native";
import FlipCard from "react-native-flip-card";
import { width } from "../styles";

const PostCar = ({ car }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  const flipCard = () => {
    setIsFlipped(!isFlipped);
  };
  return (
    <View style={styles.container}>
      <FlipCard
        style={styles.flipCard}
        perspective={1000}
        flipHorizontal={true}
        flipVertical={false}
        flip={isFlipped}
        clickable={true}>
        <TouchableOpacity
          onPress={flipCard}
          style={styles.touchableOpacity}>
          <View style={styles.containerBrand}>
            <Image
              source={car?.Logo && { uri: car.Logo }}
              style={styles.imageBrand}
            />
            <Text style={styles.textBrand}>{car.Brand}</Text>
          </View>
          <View style={styles.containerCar}>
            <Image
              source={car?.Image && { uri: car.Image }}
              style={styles.imageCar}
            />
            <Text style={styles.textCar}>{car.name}</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={flipCard}
          style={styles.touchableOpacity}>
          <View style={styles.containerBrand}>
            <Image
              source={car?.Logo && { uri: car.Logo }}
              style={styles.imageBrand}
            />
            <Text style={styles.textBrand}>{car.Brand}</Text>
          </View>
          <View style={styles.containerCar}>
            <View style={styles.imageCar}>
              <Text style={styles.textDetailsCar}>Nome : {car.name}</Text>
              <Text style={styles.textDetailsCar}>Marca : {car.Brand}</Text>
              <Text style={styles.textDetailsCar}>
                Cavalos de Potência : {car.horsepower} hp
              </Text>
              <Text style={styles.textDetailsCar}>
                Ano de lançamento : {car.year_of_launch}
              </Text>
              <Text style={styles.textDetailsCar}>
                Velocidade Máxima : {car.top_speed} mph
              </Text>
              <Text style={styles.textDetailsCar}>
                Força de Quebra : {car.breaking_force} N
              </Text>
              <Text style={styles.textDetailsCar}>
                País de Origem : {car.country_of_origin}
              </Text>
              <Text style={styles.textDetailsCar}>
                Último Preço Conhecido : {car.last_known_price} USD
              </Text>
            </View>
          </View>
        </TouchableOpacity>
      </FlipCard>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    gap: 8,
    flexDirection: "column",
    marginBottom: 8
  },
  flipCard: {
    padding: 8,
    borderWidth: 1,
    borderRadius: 8,
    shadowColor: "#bfdbfe",
    borderColor: "#9ca3af",
    backgroundColor: "#e5e7eb",
    ...Platform.select({
      ios: {
        shadowColor: "rgb(0 0 0 / 0.1)",
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.8,
        shadowRadius: 10
      },
      android: {
        elevation: 5
      }
    })
  },
  touchableOpacity: {
    gap: 8,
    flexDirection: "column",
    flex: 1
  },
  containerBrand: {
    flex: 1,
    gap: 8,
    flexDirection: "row",
    alignItems: "center"
  },
  containerCar: {
    width: "100%",
    height: 320,
    position: "relative"
  },
  imageBrand: {
    width: 40,
    height: 40,
    borderRadius: 9999
  },
  imageCar: {
    height: "100%",
    width: "100%",
    borderRadius: 8
  },
  textBrand: {
    color: "#1f2937",
    fontWeight: "700"
  },
  textCar: {
    position: "absolute",
    left: 0,
    right: 0,
    bottom: 0,
    padding: 8,
    backgroundColor: "#e5e7eb",
    margin: 8,
    color: "#1f2937",
    borderRadius: 8,
    opacity: 0.75,
    textAlign: "center",
    fontWeight: "700"
  },
  textDetailsCar: {
    margin: 8,
    color: "#1f2937",
    fontWeight: "700"
  }
});
export default PostCar;
