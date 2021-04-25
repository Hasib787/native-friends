import React, { useEffect } from "react";
import {View, StyleSheet,Text, TextInput } from "react-native";
import User from "./components/User/User";

const app = () => {
  const [users, setUsers] = React.useState([]);
  const [number, onChangeNumber] = React.useState(null);

  useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res=> res.json())
    .then(data=> setUsers(data))
  },[])
  return (
    <View>
      
        {
          users.map(user => <User user={user}></User>)
      
        }
      
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
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    width:'200px',
    marginLeft: '45%',
    height: 40,
    margin: 12,
    borderWidth: 1,
  },
});

export default app;