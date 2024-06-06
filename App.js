import { Button, FlatList, StyleSheet, View } from "react-native";
import { GoalItem } from "./components/GoalItem";
import { useState } from "react";
import { GoalInput } from "./components/GoalInput";
import { StatusBar } from "expo-status-bar";
import { colors } from "./colors";

export default function App() {
  const [modalIsVisible, setModalIsVisible] = useState(false);
  const [goalList, setGoalList] = useState([]);

  const startAddGoalHandler = () => {
    setModalIsVisible(true);
  };

  const endAddGoalHandler = () => {
    setModalIsVisible(false);
  };

  const addGoalHandler = (goalText) => {
    setGoalList([
      ...goalList,
      { id: Math.random().toString(), text: goalText },
    ]);
    endAddGoalHandler();
  };

  const deleteGoalHandler = (id) => {
    setGoalList((currentGoals) => {
      return currentGoals.filter((goal) => goal.id !== id);
    });
  };

  return (
    <>
      <StatusBar style="light" />
      <View style={styles.container}>
        <Button
          title="Add New Goal"
          onPress={startAddGoalHandler}
          color={colors.tertiary}
        />
        <GoalInput
          visible={modalIsVisible}
          onAddGoal={addGoalHandler}
          onCancel={endAddGoalHandler}
        />
        <View style={styles.goalListContainer}>
          <FlatList
            data={goalList}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => (
              <GoalItem item={item} onDeleteItem={deleteGoalHandler} />
            )}
          />
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 50,
    backgroundColor: colors.primary,
  },
  goalListContainer: {
    flex: 5,
  },
});
