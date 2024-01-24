import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, SafeAreaView, Button, TouchableOpacity, FlatList } from "react-native";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faBolt } from "@fortawesome/free-solid-svg-icons";
import { backgroundColor } from "../styles";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Card from "../components/Card";
import { Search, dadoArray } from "../../fetchData";

const Tab = createBottomTabNavigator();

const HomeScreen = () => {
  const [carData, setCarData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await dadoArray();
        setCarData(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, []);

  // return  <View>
  //           <Text>ola mundo 23456</Text>
  //           <Card car={carData} />
  //           <TouchableOpacity onPress={dadoArray}><Text>ola mundo 23456</Text></TouchableOpacity>
  //         </View>;
  return (
    <FlatList
      data={carData}
      keyExtractor={(item) => item.id.toString()}
      renderItem={({ item }) => <Card car={item} />}
    />
  );
};

export default HomeScreen;


