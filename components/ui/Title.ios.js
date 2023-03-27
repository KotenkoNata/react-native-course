import {Text, StyleSheet, Platform} from "react-native";


function Title({children}) {
    return(
        <Text style={styles.title}>{children}</Text>
    )
}

export default Title;

const styles = StyleSheet.create({
    title: {
        fontFamily: 'opens-sans-bold',
        fontSize: 24,
        color: 'white',
        // borderWidth: Platform.OS === 'ios' ? 2 : 1,
        borderWidth: 2,
        textAlign: 'center',
        padding: 12,
        maxWidth: '80%',
        width: 300,
    }
})