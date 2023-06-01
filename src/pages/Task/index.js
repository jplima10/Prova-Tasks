import React, { useState, useEffect } from "react";
import { View, Text, TouchableOpacity, FlatList } from "react-native";
import firebase from "../../config/firebaseconfig";
import { FontAwesome, MaterialCommunityIcons } from "@expo/vector-icons";
import styles from "./style";

export default function Task({ navigation, route }) {
  const [task, setTask] = useState([]);
  const database = firebase.firestore();

  function logout() {
    firebase
      .auth()
      .signOut()
      .then(() => {
        navigation.navigate("Welcome");
      })
      .catch((error) => {
        console.log(error);
      });
  }

  function deleteTask(id) {
    const confirmed = window.confirm(
      "Você tem certeza que deseja apagar esta tarefa?"
    );

    if (confirmed) {
      database.collection(route.params.idUser).doc(id).delete();
    }
  }

  useEffect(() => {
    const unsubscribe = database
      .collection(route.params.idUser)
      .onSnapshot((querySnapshot) => {
        const list = [];
        querySnapshot.forEach((doc) => {
          list.push({ ...doc.data(), id: doc.id });
        });
        setTask(list);
      });

    // Retornar uma função de limpeza para remover o observador quando o componente for desmontado
    return () => unsubscribe();
  }, []);

  return (
    <View style={styles.container}>
      <FlatList
        showsVerticalScrollIndicator={false}
        data={task}
        renderItem={({ item }) => {
          return (
            <View style={styles.Tasks}>
              <TouchableOpacity
                style={styles.deleteTask}
                onPress={() => {
                  deleteTask(item.id);
                }}
              >
                <FontAwesome name="trash" size={23} color="#F92e6a" />
              </TouchableOpacity>
              <Text
                style={styles.DescriptionTask}
                onPress={() =>
                  navigation.navigate("Details", {
                    id: item.id,
                    description: item.description,
                    idUser: route.params.idUser,
                  })
                }
              >
                {item.description}
              </Text>
            </View>
          );
        }}
      />
      <TouchableOpacity
        style={styles.buttonNewTask}
        onPress={() =>
          navigation.navigate("New Task", {
            idUser: route.params.idUser,
            updateList: setTask,
          })
        }
      >
        <Text style={styles.iconButton}>+</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.buttonLogout} onPress={logout}>
        <Text style={styles.iconButtonLogout}>
          <MaterialCommunityIcons
            name="exit-to-app"
            size={23}
            color="red"
          />
        </Text>
      </TouchableOpacity>
    </View>
  );
}
