import {StyleSheet, View, Text, Pressable} from "react-native"
function GoalItem({itemData, OnDeleteItem}){
    return(
        <Pressable>
            <View style={style.goalsItem}>
                <Text style={style.goalsItem}>{itemData.item}</Text>
            </View>
        </Pressable>
    )
}

export default GoalItem

const style =StyleSheet.create({
    goalsItem:{
        margin:8,
        padding:8,
        borderRadius:6,
        backgroundColor:'#8576FF',
        color:'white'
    },
    goalText:{
        color:'white'
    }
})