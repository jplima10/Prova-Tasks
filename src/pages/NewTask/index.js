import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity } from "react-native";
import firebase from "../../config/firebaseconfig";
import styles from "./style";

export default function NewTask({ navigation, route }) {

  const [description, setDescription] = useState(null)

  const database = firebase.firestore()


  // ...

  function addTask() {
    database
      .collection(route.params.idUser)
      .add({
        description: description,
        status: false,
      })
      .then(() => {
        navigation.goBack();
      })
      .catch((error) => {
        console.log(error);
      });
  }

  // ...


  return (
    <View style={styles.container}>
      <Text style={styles.label}>Descrição</Text>
      <TextInput
        style={styles.input}
        placeholder="Ex: estudar javascript"
        onChangeText={setDescription}
        value={description}
      />
      <TouchableOpacity
        style={styles.buttonNewTask}
        onPress={() => {
          addTask()
        }}
      >
        <Text style={styles.iconButton}>Save</Text>
      </TouchableOpacity>
    </View>
  )
}