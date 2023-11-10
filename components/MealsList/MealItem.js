import {Image, Pressable, Text, View, StyleSheet, Platform} from "react-native";
import {useNavigation} from "@react-navigation/native";
import MealDetails from "../MealDetails";

function MealItem({title,id, imageUrl, duration, complexity, affordability}) {
    const navigation = useNavigation();
    
    function selectMealItemHandler() {
        navigation.navigate('MealDetail', {
            mealId: id,
        })
    }
    return (
        <View style={styles.mealItem}>
            <Pressable android_ripple={{color: '#ccc'}}
                       style={({pressed})=> (pressed ? styles.buttonPressed : null)}
                       onPress={selectMealItemHandler}
            >
                <View style={styles.innerContainer}>
                    <View>
                        <Image source={{uri: imageUrl}} style={styles.image}/>
                        <Text style={styles.title}>{title}</Text>
                    </View>
                    <MealDetails duration={duration} affordability={affordability} complexity={complexity} />
                </View>
            </Pressable>
        </View>
    )
}

export default MealItem;

const styles = StyleSheet.create({
    innerContainer: {
        borderRadius: 8,
        overflow: 'hidden',
    },
    mealItem: {
      margin: 16,
      borderRadius: 8,
      overflow: Platform.OS === 'android' ? "hidden" : "visible",
      backgroundColor: 'white',
        elevation: 4,
        shadowColor: 'black',
        shadowOpacity: 0.35,
        textShadowOffset: {width: 0, height: 2},
        shadowRadius: 16,
    },
    image: {
        width: '100%',
        height: 200,
    },
    title: {
        fontWeight: 'bold',
        textAlign: 'center',
        fontSize: 18,
        margin: 8,
    },
    buttonPressed: {
        opacity: 0.5
    },
})