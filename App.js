import { StyleSheet, Text, View, Button,TextInput } from "react-native";

export default function App() {
  return (
    <View style={styles.appContainer}>
      <View style={styles.inputContainer}>
        <TextInput style={styles.textInput} placeholder='your first goal'/>
        <Button title="add goal"/>
      </View>
      <View style={styles.goalsContainer}>
        <Text>list of goals</Text>
        </View>
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
  paddingTop: 100,
  paddingHorizontal: 10,
  padding: 30
  },
    
inputContainer: {
  flex: 1,
flexDirection: 'row',
justifyContent: "space-evenly",
textAlign: "center",
marginBottom: 24,
borderBottomWidth: 1,
borderBottomColor: 'gray'
},

textInput: {
borderWidth: 2,
borderColor: 'red',
width: '70%',
height: '30%',
padding: 8
},

goalsContainer:{
  flex: 5
}

});
