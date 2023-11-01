import {Image, ScrollView, Text, View, StyleSheet} from "react-native";
import OutlineButton from "../components/UI/OutlineButton";
import {Colors} from "../contants/colors";
import {useEffect} from "react";

function PlacesDetails({route}) {
    function showOnMapHandler() {
        
    }

    const selectedPlaceId = route.params.placeId;

    useEffect(()=>{

    },[selectedPlaceId])

    return <ScrollView >
        <Image style={styles.image}/>
        <View style={styles.locationContainer}>
            <View style={styles.addressContainer}>
                <Text style={styles.address}>ADDRESS</Text>
            </View>
            <OutlineButton icon="map" onPress={showOnMapHandler}>View on Map</OutlineButton>
        </View>
    </ScrollView>
}

export default PlacesDetails;

const styles = StyleSheet.create({
    image: {
        height: '35%',
        minHeight: 300,
        width: '100%'
    },
    locationContainer: {
        justifyContent: "center",
        alignItems: "center",
    },
    addressContainer: {
        padding: 20
    },
    address: {
        color: Colors.primary500,
        textAlign: "center",
        fontWeight: 'bold',
        fontSize: 16,
    }
})