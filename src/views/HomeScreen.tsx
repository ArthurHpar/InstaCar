import React, { useEffect, useState } from "react";
import { View, FlatList, StyleSheet } from "react-native";
import { dadosMarcas, dadoArray } from "../../fetchData";
import PostCar from "../components/PostCar";
import BrandCar from "../components/BrandCar";

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
    <View style={styles.container}>
      <View>
        <FlatList
          style={styles.flatListBrand}
          horizontal
          showsHorizontalScrollIndicator={false}
          data={brandData}
          keyExtractor={item => item.Brand.toString()}
          renderItem={({ item }) => <BrandCar car={item} />}
        />
      </View>

      <View>
        <FlatList
          style={styles.flatListCar}
          data={carData}
          keyExtractor={item => item.id.toString()}
          renderItem={({ item }) => <PostCar car={item} />}
        />
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    gap: 8,
    flexDirection: "column",
    backgroundColor: "#f9fafb",
    height: "100%"
  },
  flatListBrand: {
    borderBottomWidth: 2,
    borderColor: "#d1d5db"
  },
  flatListCar: {
    padding: 8
  }
});
export default HomeScreen;
