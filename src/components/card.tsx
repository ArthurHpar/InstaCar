import React from "react";
import { View, Text, StyleSheet, SafeAreaView, Button, Image } from "react-native";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faHouse, faMagnifyingGlass, faUser } from "@fortawesome/free-solid-svg-icons";
import { backgroundColor, position, topRightBottomLeft, height, padding, margin, 
    borderRadius, display, flexDirection, justifyContent, alignItems, } from "../../styles";


function Card() {
   return (<>
        <Image source={require('../../public/Lotus-Evija.jpg')} style={{height: 400, width: 400}} />
        <Text>SUCTION CUP CAR</Text>
    </>)
};
export default Card;