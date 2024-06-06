import { StyleSheet, View, Text, Pressable } from "react-native";
import { colors } from "../colors";

export const GoalItem = ({ item, onDeleteItem }) => {
  return (
    <Pressable onPress={onDeleteItem.bind(this, item.id)}>
      <View style={styles.container}>
        <Text style={styles.text}>{item.text}</Text>
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    margin: 8,
    padding: 8,
    borderRadius: 6,
    backgroundColor: colors.secondary,
  },
  text: {
    color: "white",
  },
});
