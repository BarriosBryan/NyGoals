import { useState } from "react"; 
import { View, TextInput, Button, StyleSheet } from "react-native"; 

function GoalInput({ onAddGoal }){}  
  const [enteredGoalText, setEnteredGoalText] = useState(""); 

  function handleInputGoal(enteredText) {
    console.log(enteredText); 
    setEnteredGoalText(enteredText); 

  function addGoalHandler() {
    onAddGoal(enteredText); 
    setEnteredGoalText(""); 
    console.log("addGoalHandler"); 
  }

  return (
    <View style={StyleSheet.inputContainer}> {/* ESTE CODIGO ES DE Barrios Perez 6BVPG */}
      <TextInput
        style={StyleSheet.TextInput} 
        placeholder="Your Goal" 
        onChangeText={handleInputGoal} 
        value={enteredGoalText} 
      />

      <Button
        title="Add Goals" 
        color={"#A3FFD6"} 
        onPress={addGoalHandler} 
      />
    </View>
  );
}

export default GoalInput; 
const styles = StyleSheet.create({ 
  inputContainer: { 
      flex: 1, 
      flexDirection: 'row', 
      justifyContent: 'space-between', 
      alignItems: 'center', 
      marginBottom: 20, 
      borderBottomWidth: 1, 
      borderBottomColor: '#279327' 
  },
  textInput: {
      borderWidth: 1,
      borderColor: '#cccccc', 
      width: '80%', 
      marginRight: 3, 
      padding: 8, 
      borderRadius: 5, 
  }
})