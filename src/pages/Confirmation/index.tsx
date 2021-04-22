import React from "react";
import { SafeAreaView, Text, View } from "react-native";
import Button from "../../components/Button";
import { styles } from "./styles";

const index = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.emoji}>😎</Text>
        <Text style={styles.title}>Prontinho!</Text>
        <Text style={styles.subtitle}>
          Agora vamos começar a cuidar das suas plantas com muito cuidado!
        </Text>
        <View style={styles.footer}>
          <Button title="Começar" />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default index;
