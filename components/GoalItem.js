import { View, StyleSheet, Text, Pressable } from 'react-native';

function GoalItem(props) {
  return (
    <View style={styles.goals}>
      <Pressable
        onPress={props.deleteItem.bind(this, props.id)}
        style={({ pressed }) => pressed && styles.pressedItem}
      >
        <Text style={styles.goalText}>{props.text}</Text>
      </Pressable>
    </View>
  );
}

export default GoalItem;

const styles = StyleSheet.create({
  goals: {
    borderWidth: 2,
    backgroundColor: 'pink',
    margin: 10,
  },

  pressedItem: {
    opacity: 0.2,
  },

  goalText: {
    padding: 8,
  },
});
