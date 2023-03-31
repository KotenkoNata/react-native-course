import {Text, StyleSheet, View} from "react-native";

function List({data}) {
    return data.map(item=> (<View style={styles.listItem} key={item}>
            <Text style={styles.itemText}>{item}</Text>
        </View>
        ))
}

export default List;

const styles = StyleSheet.create({
    listItem: {
        borderRadius: 6,
        paddingVertical: 4,
        paddingHorizontal: 8,
        marginVertical: 4,
        marginHorizontal: 12,
        backgroundColor: '#bd8564'
    },
    itemText:{
        color: '#351401',
        textAlign: 'center',
    }
})