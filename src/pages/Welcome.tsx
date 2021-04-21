// eslint-disable-next-line no-use-before-define
import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import wateringImg from "../../assets/watering.png";

const Welcome = () => {
  return (
    <View>
      <Text>Gerencie suas plantas de forma rápida</Text>
      <Image source={wateringImg} />
    </View>
  );
};

export default Welcome;

const styles = StyleSheet.create({});
