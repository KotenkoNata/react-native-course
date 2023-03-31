import {Text, View, StyleSheet} from "react-native";

function MealDetails({duration, complexity, affordability}) {
    return(
        <View style={styles.details}>
            <Text style={styles.detailedItem}>{duration} m</Text>
            <Text style={styles.detailedItem}>{complexity.toUpperCase()}</Text>
            <Text style={styles.detailedItem}>{affordability.toUpperCase()}</Text>
        </View>
    )
}

export default MealDetails;

const styles = StyleSheet.create({
    details: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 8,
        justifyContent: 'center',
    },
    detailedItem:{
        marginHorizontal: 4,
        fontSize: 12,
    },
})