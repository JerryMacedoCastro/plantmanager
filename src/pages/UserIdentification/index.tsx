import React from "react";
import { SafeAreaView, Text, TextInput, View } from "react-native";

import { styles } from "./styles";

const index = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <View style={styles.form}>
          <Text style={styles.emoji}>🤔</Text>
          <Text style={styles.title}>Como podemos {"\n"} chamar você?</Text>
          <TextInput style={styles.input} />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default index;
