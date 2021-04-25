import React from "react";
import { SafeAreaView, StyleSheet,Text, TextInput } from "react-native";

const app = () => {
  const [text, setText] = React.useState("");
  const [number, onChangeNumber] = React.useState(null);

  return (
    <SafeAreaView>
      <Text>{text}</Text>
      <TextInput
        style={styles.input}
        onChangeText={text=> setText(text)}
      />
      <TextInput
        style={styles.input}
        onChangeText={onChangeNumber}
        value={number}
        placeholder="useless placeholder"
        keyboardType="numeric"
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
  },
});

export default app;