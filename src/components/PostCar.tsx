import React, { useState } from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";
import {
  backgroundColor,
  position,
  topRightBottomLeft,
  height,
  padding,
  margin,
  borderRadius,
  display,
  flexDirection,
  alignItems,
  size,
  gap,
  width,
  borderWidth,
  boxShadow,
  boxShadowColor,
  borderColor,
  opacity,
  textColor,
  fontWeight
} from "../styles";
import FlipCard from "react-native-flip-card";

const textStyle = {
  ...margin.m2,
  ...textColor.gray800,
  ...fontWeight.fontBold
};

const PostCar = ({ car }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  const flipCard = () => {
    setIsFlipped(!isFlipped);
  };
  return (
    <View
      style={[display.flex, gap.gap2, flexDirection.flexCol, margin.mb2]}>
      <FlipCard
        style={[
          padding.p2,
          borderWidth.border,
          borderRadius.roundedlg,
          boxShadow.shadowxl,
          boxShadowColor.blue200,
          borderColor.gray400,
          backgroundColor.gray200
        ]}
        perspective={1000}
        flipHorizontal={true}
        flipVertical={false}
        flip={isFlipped}
        clickable={true}>
        <TouchableOpacity
          onPress={flipCard}
          style={[gap.gap2, flexDirection.flexCol, display.flex]}>
          <View
            style={[
              display.flex,
              gap.gap2,
              flexDirection.flexRow,
              alignItems.itemsCenter
            ]}>
            <View
              style={[
                size.size10,
                backgroundColor.blue600,
                borderRadius.roundedfull
              ]}>
              <Image
                source={car?.Logo && { uri: car.Logo }}
                style={{
                  ...height.hfull,
                  ...width.wfull,
                  ...borderRadius.roundedlg
                }}
              />
            </View>
            <Text style={[textColor.gray800, fontWeight.fontBold]}>
              {car.Brand}
            </Text>
          </View>
          <View style={[width.wfull, height.h80, position.relative]}>
            <Image
              source={car?.Image && { uri: car.Image }}
              style={{
                ...height.hfull,
                ...width.wfull,
                ...borderRadius.roundedlg
              }}
            />
            <Text
              style={[
                position.absolute,
                topRightBottomLeft.left0,
                topRightBottomLeft.bottom0,
                padding.p2,
                backgroundColor.blue400,
                margin.m2,
                textColor.gray800,
                borderRadius.roundedlg,
                opacity.opacity75,
                fontWeight.fontBold
              ]}>
              {car.name}
            </Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={flipCard}
          style={[gap.gap2, flexDirection.flexCol, display.flex]}>
          <View
            style={[
              display.flex,
              gap.gap2,
              flexDirection.flexRow,
              alignItems.itemsCenter
            ]}>
            <View
              style={[
                size.size10,
                backgroundColor.blue600,
                borderRadius.roundedfull
              ]}>
              <Image
                source={car?.Logo && { uri: car.Logo }}
                style={{
                  ...height.hfull,
                  ...width.wfull,
                  ...borderRadius.roundedlg
                }}
              />
            </View>
            <Text style={[textColor.gray800, fontWeight.fontBold]}>
              {car.Brand}
            </Text>
          </View>
          <View style={[width.wfull, height.h80, position.relative]}>
            <View
              style={{
                ...height.hfull,
                ...width.wfull,
                ...borderRadius.roundedlg
              }}>
              <Text style={[textStyle]}>Nome : {car.name}</Text>
              <Text style={[textStyle]}>Marca : {car.Brand}</Text>
              <Text style={[textStyle]}>
                Cavalos de Potência : {car.horsepower} hp
              </Text>
              <Text style={[textStyle]}>
                Ano de lançamento : {car.year_of_launch}
              </Text>
              <Text style={[textStyle]}>
                Velocidade Máxima : {car.top_speed} mph
              </Text>
              <Text style={[textStyle]}>
                Força de Quebra : {car.breaking_force} N
              </Text>
              <Text style={[textStyle]}>
                País de Origem : {car.country_of_origin}
              </Text>
              <Text style={[textStyle]}>
                Último Preço Conhecido : {car.last_known_price} USD
              </Text>
            </View>
          </View>
        </TouchableOpacity>
      </FlipCard>
    </View>
  );
};
export default PostCar;
