import React, { useEffect, useState } from "react";
import { FlatList, Dimensions, StyleSheet } from "react-native";
import { dadoArray } from "../../fetchData";
import InfiniCard from "../components/InfiniCard";

const BoltScreen = () => {
  const [carData, setCarData] = useState([]);
  const { height: screenHeight } = Dimensions.get("window");

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

  const renderItem = ({ item }) => {
    return <InfiniCard car={item} />;
  };

  return (
    <FlatList
      style={styles.flatListCar}
      snapToInterval={screenHeight}
      snapToAlignment='start'
      decelerationRate='fast'
      showsVerticalScrollIndicator={false}
      data={carData}
      keyExtractor={item => item.id.toString()}
      renderItem={renderItem}
    />
  );
};
const styles = StyleSheet.create({
  flatListCar: {
    flex: 1
  }
});
export default BoltScreen;
