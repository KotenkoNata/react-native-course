import {Text, View, StyleSheet} from "react-native";

function Subtitle({children}) {
    return (
        <View style={styles.subTitleContainer}>
            <Text style={styles.subTitle}>{children}</Text>
        </View>
    )
}

export default Subtitle;

const styles = StyleSheet.create({
    subTitle: {
        color: '#bd8564',
        fontSize: 18,
        fontWeight: 'bold',
        textAlign: 'center',
    },
    subTitleContainer: {
        padding: 6,
        borderBottomWidth: 1,
        borderBottomColor: '#bd8564',
        marginHorizontal: 12,
        marginVertical: 4,
    }
})