import { useState } from 'react';
import {
  View,
  TextInput,
  Button,
  StyleSheet,
  Modal,
  Image,
} from 'react-native';

function GoalInput(props) {
  const [goal, setGoal] = useState('');

  const goalInputHandler = (enteredText) => {
    setGoal(enteredText);
  };

  function addGoalHandler() {
    props.onAddGoal(goal);
    setGoal('');
  }

  return (
    <Modal visible={props.visible} animationType="slide">
      <View style={styles.inputContainer}>
        <Image
          style={styles.tinyLogo}
          source={{
            uri: 'https://s3.us-west-2.amazonaws.com/moveviking.com/viking.jpg',
          }}
        />
        <TextInput
          value={goal}
          style={styles.textInput}
          placeholder="your first goal"
          onChangeText={goalInputHandler}
        />
        <View style={styles.buttonContainerObject}>
          <View style={styles.button}>
            <Button title="cancel" onPress={props.onCancel} color="blue" />
          </View>
          <View style={styles.button}>
            <Button title="add goal" onPress={addGoalHandler} color="yellow" />
          </View>
        </View>
      </View>
    </Modal>
  );
}

export default GoalInput;

const styles = StyleSheet.create({
  tinyLogo: {
    width: 100,
    height: 100,
    margin: 20,
    color: 'red',
  },
  inputContainer: {
    backgroundColor: 'gray',
    flex: 1,
    padding: 16,
    justifyContent: 'center',
    alignItems: 'center',
  },

  textInput: {
    borderWidth: 1,
    borderColor: '#e4d0ff',
    backgroundColor: '#e4d0ff',
    width: '100%',
    borderRadius: 6,
    padding: 16,
    color: 'white',
  },
  buttonContainerObject: {
    flexDirection: 'row',
    marginTop: 16,
  },
  button: {
    width: '30%',
    marginHorizontal: 8,
  },
});
