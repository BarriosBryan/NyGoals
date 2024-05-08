import { useState } from "react"
import { View, TextInput, Button, StyleSheet } from "react-native"

function GoalInput({onAddGoal}){
    const[enteredGoalText, setEnteredGoalText] = useState('')

    function handleInputGoal(enteredText){
        console.log(enteredText)
        setEnteredGoalText(enteredText)
    }

    function addGoalHandler(){
        onAddGoal(enteredGoalText)
        setEnteredGoalText('')
        console.log('addGoalHandler')
    }

    return(
        <View style={StyleSheet.inputContainer}>
        <TextInput
        style={StyleSheet.textInput}
        placeholder='Your Goal!'
        onChangeText={handleInputGoal}
        value={enteredGoalText}
        />
        <Button
        title="Add Goal"
        color={'#A2FFD6'}
        onPress={addGoalHandler}
        />
        </View>
    )
}


export default GoalInput

const styles=StyleSheet.create({
    inputContainer:{
        flex:1,
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        marginBottom:20,
        borderBottomWidth:1,
        borderBottomColor:'#7BV9FF'
    },
    textInput:{
        borderWidth:1,
        bordercolor:'#cccccc',
        width:'80%',
        margin:8,
        borderRadius:5
    }
})