import {
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import Task from "./Task";
import { useState } from "react";

const Tasks = () => {
  const [task, setTask] = useState();
  const [taskItems, setTaskItems] = useState([]);

  const handleAddTask = () => {
    Keyboard.dismiss();
    setTaskItems([...taskItems, task]);
    setTask(null);
  };

  const completeTask = (index) => {
    let itemsCopy = [...taskItems];
    itemsCopy.splice(index, 1);
    setTaskItems(itemsCopy);
  };

  return (
    <View style={styles.container}>
      <View style={styles.taskWapper}>
        <Text style={styles.header}>Daily Tasks</Text>
        <View style={styles.list}>
          {taskItems.map((item, index) => {
            return (
              <TouchableOpacity key={index} onPress={() => completeTask(index)}>
                <Task text={item} />
              </TouchableOpacity>
            );
          })}
          {/* <Task text={"task 1"} />
          <Task text={"task 1"} /> */}
        </View>
      </View>

      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={styles.wrapper}
      >
        <TextInput
          style={styles.input}
          placeholder={"write your task"}
          value={task}
          onChangeText={(text) => setTask(text)}
        />
        <TouchableOpacity onPress={() => handleAddTask()}>
          <View style={styles.addContainer}>
            <Text style={styles.addText}>Add</Text>
          </View>
        </TouchableOpacity>
      </KeyboardAvoidingView>
    </View>
  );
};

export default Tasks;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  taskWapper: {
    paddingHorizontal: 30,
    paddingTop: 90,
  },
  header: {
    color: "#fff",
    fontSize: 24,
    fontWeight: "bold",
  },
  wrapper: {
    position: "absolute",
    bottom: 60,
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
  },
  input: {
    paddingVertical: 15,
    paddingHorizontal: 15,
    backgroundColor: "#fff",
    borderColor: "#EC4EC4",
    borderRadius: 50,
    borderWidth: 2,
    width: 250,
  },
  addContainer: {
    width: 60,
    height: 60,
    backgroundColor: "#fff",
    borderColor: "#EC4EC4",
    borderRadius: 60,
    borderWidth: 2,
    justifyContent: "center",
    alignItems: "center",
  },
  addText: {
    color: "#EC4EC4",
  },
});
