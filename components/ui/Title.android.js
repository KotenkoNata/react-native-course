import {Text, StyleSheet, Platform} from "react-native";


function TitleAndroid({children}) {
    return(
        <Text style={styles.title}>{children}</Text>
    )
}

export default TitleAndroid;

const styles = StyleSheet.create({
    title: {
        fontFamily: 'opens-sans-bold',
        fontSize: 24,
        color: 'white',
        // borderWidth: Platform.OS === 'ios' ? 2 : 1,
        // borderWidth: Platform.select({ios: 2, android: 0}),
        borderWidth: 0,
        textAlign: 'center',
        padding: 12,
        maxWidth: '80%',
        width: 300,
    }
})