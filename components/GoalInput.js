import { useState } from "react";
import {
  TextInput,
  Button,
  StyleSheet,
  View,
  Modal,
  Image,
} from "react-native";
import { colors } from "../colors";

export const GoalInput = ({ onAddGoal, onCancel, visible }) => {
  const [goalText, setGoalText] = useState("");
  const goalInputHandler = (text) => {
    setGoalText(text);
  };

  const addGoalHandler = () => {
    onAddGoal(goalText);
    setGoalText("");
  };

  return (
    <Modal visible={visible} animationType="slide">
      <View style={styles.container}>
        <Image
          style={styles.image}
          source={require("../assets/images/goal.png")}
        />
        <TextInput
          placeholder="Your goal"
          value={goalText}
          style={styles.input}
          onChangeText={goalInputHandler}
        />
        <View style={styles.buttonContainer}>
          <Button
            title="Add"
            onPress={addGoalHandler}
            color={colors.secondary}
          />
          <Button title="Cancel" onPress={onCancel} color={colors.tertiary} />
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 8,
    backgroundColor: colors.primary,
  },
  image: {
    width: 100,
    height: 100,
    margin: 20,
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    gap: 8,
    marginTop: 8,
  },
  input: {
    borderWidth: 1,
    color: colors.tertiary,
    borderColor: colors.tertiary,
    width: "100%",
    marginLeft: 8,
    padding: 8,
  },
});
