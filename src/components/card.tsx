import React from "react";
import { View, Text, Image } from "react-native";


function Card({ car }) {
   return (<View>
        <Image source={{ uri: car?.Image }} style={{height: 400, width: 400}} />
        <Text>{car.name}</Text>
        <Text>{car.Brand}</Text>
    </View>)
};
export default Card;
