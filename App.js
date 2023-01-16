
import { useState } from 'react';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';

export default function App() {
  const [enteredGoalText,setEnteredGoalText]=useState("")
  const [coursegoals,setcoursegoals]=useState([])
  const goalInputHandler=((event)=>{
    // console.log(event)
    setEnteredGoalText(event)
  })
  const addGoalHandler=(()=>{
    console.log(enteredGoalText)
    coursegoals.push(enteredGoalText)
    setcoursegoals([...coursegoals])
  })
  return (
    
    <View style={styles.appContainer}>
      <View style={styles.inputcontainer}>
        <TextInput onChangeText={goalInputHandler} style={styles.textInput} placeholder='Your Course Goal!'/>
        <Button onPress={addGoalHandler} title='Add Goal'/>
      </View>
      <View style={styles. goalscontainer}> 
      {
            coursegoals.map((ele,i)=>{
              return  <Text style={styles.goalItem} key={i}>{ele}</Text>
            })
          }
      </View>
      {/* <View>
      <Text style={styles.dummytext}>Another piece of Text</Text>
      </View>
      <Text style={styles.dummytext}>Hello World!</Text>
      <Button title='Tap Me!'></Button> */}
    </View>
  );
}
const styles = StyleSheet.create({
  appContainer:{
    flex:1,
    padding:50,
    paddingHorizontal:16
  },
  inputcontainer:{
    flex:1,
    flexDirection:'row',
    justifyContent:"space-between",
    alignItems:"center",
    marginBottom:24,
    borderBottomWidth:1,
    borderBottomColor:"#cccccc",
  },
  textInput:{
    borderWidth:1,
    borderColor:"#cccccc",
    width:"70%",
    marginRight:8,
    padding:8,
  },
  goalscontainer:{
    flex:5
  },
  goalItem:{
    margin:8,
    padding:8,
    borderRadius:6,
    backgroundColor:"#5e0acc",
    color:"white"
  }
  // container: {
  //   flex: 1,
  //   backgroundColor: '#fff',
  //   alignItems: 'center',
  //   justifyContent: 'center',
  // },
  // dummytext:{
  //   margin:16,
  //   padding:16,
  //   borderWidth:2,
  //   borderColor:"blue"
  // }
});
