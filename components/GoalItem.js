import {Pressable, Text, View} from "react-native";
import {StyleSheet} from "react-native";

function GoalItem(props) {

    return (
        <View style={styles.goalItem}>
            <Pressable
                android_ripple={{color: '#2a0856'}}
                style={({pressed})=> pressed && styles.pressedItem}
                onPress={props.onDeleteItem.bind(this, props.id)}>
                <Text style={styles.goalText}>{props.text}</Text>
            </Pressable>
        </View>
    )
}
export default GoalItem;

const styles = StyleSheet.create({
    goalItem: {
        margin: 8,
        borderRadius: 6,
        backgroundColor: '#5e0acc',
    },
    pressedItem:{
        color: '#2a0856'
    },
    goalText: {
        color: 'white',
        padding: 8,
    }
});