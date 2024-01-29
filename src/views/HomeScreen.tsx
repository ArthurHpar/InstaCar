import React, { useEffect, useState } from "react";
import {
  View,
  FlatList,
} from "react-native";
import {
  backgroundColor,
  borderColor,
  borderWidth,
  display,
  flexDirection,
  gap,
  height,
  padding
} from "../styles";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { dadosMarcas, dadoArray } from "../../fetchData";
import PostCar from "../components/PostCar";
import BrandCar from "../components/BrandCar";

const Tab = createBottomTabNavigator();

const HomeScreen = () => {
  const [carData, setCarData] = useState([]);
  const [brandData, setBrandData] = useState([]);

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
  useEffect(() => {
    const fetchMarcas = async () => {
      try {
        const dataM = await dadosMarcas();
        setBrandData(dataM);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchMarcas();
  }, []);

  return (
    <View
      style={[
        display.flex,
        gap.gap2,
        flexDirection.flexCol,
        backgroundColor.gray50,
        height.hfull
      ]}>
      <View>
        <FlatList
          style={[borderWidth.borderb2, borderColor.gray300]}
          horizontal
          showsHorizontalScrollIndicator={false}
          data={brandData}
          keyExtractor={item => item.Brand.toString()}
          renderItem={({ item }) => <BrandCar car={item} />}
        />
      </View>
      
      <View>
        <FlatList
          style={[padding.p2]}
          data={carData}
          keyExtractor={item => item.id.toString()}
          renderItem={({ item }) => <PostCar car={item} />}
        />
      </View>
    </View>
  );
};

export default HomeScreen;
