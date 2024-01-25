import React from "react";
import { View, Text, Image } from "react-native";
function Screen({ car }) {

    return (<View style={{flex:1}}>
        <Image source={{ uri: car?.Image }} style={{ width: '100%', height: 640 }} />
        <View style={{ display: "flex", flexDirection: "row", justifyContent: "space-between", margin: 4, marginBottom: 124 }}>
            <View>
                <Text>{car.name}</Text>
                <Text>{car.Brand}</Text>
            </View>
            <Image source={{ uri: car.Logo }} style={{height: 50, width: 50, margin: 4, borderRadius: 30}} />
        </View>
    </View>)
};
export default Screen;
