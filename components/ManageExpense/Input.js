import {Text, TextInput, View} from "react-native";

function Input({label, textInput}) {
    return <View>
        <Text>{label}</Text>
        <TextInput {...textInput}/>
    </View>
}

export default Input;