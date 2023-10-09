import {View, StyleSheet} from "react-native";
import OutlineButton from "../UI/OutlineButton";
import {Colors} from "../../contants/colors";

function LocationPicker() {
    function getLocationHandler() {

    }

    function pickOnMapHandler() {

    }

    return <View>
        <View style={styles.mapPreview}></View>
        <View style={styles.action}>
            <OutlineButton icon="location" onPress={getLocationHandler}>Locate User</OutlineButton>
            <OutlineButton icon="map" onPress={pickOnMapHandler}>Pick on Map</OutlineButton>
        </View>
    </View>
}

export default LocationPicker;

const styles = StyleSheet.create({
    mapPreview: {
        width: '100%',
        height: 200,
        marginVertical: 8,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: Colors.primary100,
        borderRadius: 4,
    },
    action: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center'
    }
})