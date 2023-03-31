import {Image, Text, View} from "react-native";
import {MEALS} from "../data/dummy-data";
import MealDetails from "../components/MealDetails";

function MealDetailScreen({route}) {
    const mealId = route.params.mealId;
    const selectedMeal = MEALS.find(meal=>meal.id === mealId);
    return (
        <View>
            <Image source={{uri: selectedMeal.imageUrl}}/>
            <Text>{selectedMeal.title}</Text>
            <MealDetails duration={selectedMeal.duration}
                         complexity={selectedMeal.complexity}
                         affordability={selectedMeal.affordability}/>
            <Text>Ingredients</Text>
            {selectedMeal.ingredients.map(item=>{
                return <Text key={item}>{item}</Text>
            })}
            <Text>Steps</Text>
            {selectedMeal.steps.map(item=>{
                return <Text key={item}>{item}</Text>
            })}
        </View>
    )
}

export default MealDetailScreen;