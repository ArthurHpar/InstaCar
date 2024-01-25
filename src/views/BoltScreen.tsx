import React, { useEffect, useState } from "react";
import { Text, FlatList, Dimensions } from "react-native";
import { dadoArray } from "../../fetchData";
import Screen from "../components/infiniCard";



const BoltScreen = () => {
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
 
  return (
    // <Screen car={carData[4]} brand={brandData[1]} />
<FlatList
        style={{width: '100%', height:'100%'}}
        snapToAlignment="start"
        decelerationRate={"fast"} 
        snapToInterval={Dimensions.get("window").height} 
        data={carData}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => <Screen car={item} />}
      />
  );
};

export default BoltScreen;
