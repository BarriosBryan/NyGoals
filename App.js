import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, FlatList } from 'react-native';

export default function App() {
  const [enteredGoalText, setEnteredGoalText] = useState('');
  const [goals, setGoals] = useState([]);

  function handleInputGoal(enteredText) {
    console.log(enteredText);
    setEnteredGoalText(enteredText);
  }

  function handleAddGoal() {
    console.log(enteredGoalText);
    setGoals([...goals, { text: enteredGoalText, key: Math.random().toString() }]);
  }

  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.textinput}
          placeholder="Your Goal!"
          onChangeText={handleInputGoal}
        />
        <Button
          title="Add Goal"
          color="#A3FFD6"
          onPress={handleAddGoal}
        />
      </View>
      <View style={styles.goalsContainer}>
        <FlatList
          data={goals}
          renderItem={({ item }) => (
            <View style={styles.goalsItem}>
              <Text style={styles.goalText}>{item.text}</Text>
            </View>
          )}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 20,
  },
  inputContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#7BC9FF',
  },
  textinput: {
    borderWidth: 1,
    borderColor: '#CCCCCC',
    width: '80%',
    marginRight: 3,
    padding: 8,
    borderRadius: 5,
  },
  goalsItem: { 
    margin: 0,
    padding: 0,
    borderRadius: 6,
    backgroundColor: '#8576FF',
    color: 'white',
  },
  goalText: {
    color: 'white',
  },
});