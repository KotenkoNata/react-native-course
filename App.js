import {useState} from 'react';
import {Button, StyleSheet, Text, TextInput, View} from 'react-native';

export default function App() {

    const [enteredGoalText, setEnteredGoalText] = useState('');
    const [courseGoals, setCourseGoals] = useState([]);
    function goalInputHandler(enteredText) {
        setEnteredGoalText(enteredText);
    }

    function addGoalInputHandler() {
        setCourseGoals((currentCourseGoals) =>[
            ...currentCourseGoals,
            enteredGoalText,
        ])
    }

  return (
    <View style={styles.appContainer}>
      <View style={styles.inputContainer}>
        <TextInput style={styles.textInput}
                   placeholder='Your course goal'
                   onChangeText={goalInputHandler}/>
        <Button title='Add goal' onPress={addGoalInputHandler}/>
      </View>
      <View style={styles.goalsContainer}>
          {courseGoals.map((goal)=>
              <View style={styles.goalItem} key={goal}>
              <Text style={styles.goalText}>{goal}</Text>
              </View>
          )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
      flex: 1,
      paddingTop: 50,
      paddingHorizontal: 16,
  },
    inputContainer: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 24,
        borderBottomWidth: 1,
        borderBottomColor: '#ccc'
    },
    textInput:{
        borderWidth: 1,
        borderColor: '#ccc',
        width: '70%',
        marginRight: 8,
        padding: 8,
    },
    goalsContainer: {
        flex: 5,
    },
    goalItem: {
      margin: 8,
        borderRadius: 6,
        backgroundColor: '#5e0acc',
        padding: 8,
    },
    goalText: {
        color: 'white'
    }
});
