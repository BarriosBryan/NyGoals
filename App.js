import { useState } from 'react';
import { Button, StyleSheet, Text, TextInput, View, ScrollView, Flatlist } from 'react-native';



export default function App() {

  const[entraedGoalText, setEnteredGoalText] = useState('')
  const[goals, setGoals]= useState([])

  function  handleInputGoal(enteredText){
    console.log(enteredText)
    setGoals(()=> [...goals,{text: entraedGoalText, key: Math.random().toString()}])
  }

  return (
    <View style={styles.container}>
    <View style={styles.inputContener}>
      <textInput
      style={styles.TextInput}
      placeholser = 'Your Goals'
      onChangeText= {handleInputGoals}
      />

      <Button 
      title ='Add Goals'
      color ={'#A3FFD6'}
      onPress ={handleAddGoals}
      />
    </View>
    <View style={styles.goalsContainer}>
      <Flatlist
      data={goals}
      renderItem={ (itemData)=>
      {
        <View style={styles.goalsItem}>
          <Text style={styles.goalText}>
            {itemData.item.text}
          </Text>
        </View>
      }
      }
      ></Flatlist>
      
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

