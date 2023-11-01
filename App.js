import { StatusBar } from 'expo-status-bar';
import {NavigationContainer} from "@react-navigation/native";
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import AllPlaces from "./screens/AllPlaces";
import AddPlace from "./screens/AddPlace";
import IconButton from "./components/UI/IconButton";
import {Colors} from "./contants/colors";
import Map from "./screens/Map";
import {useCallback, useEffect, useState} from "react";
import {init} from "./util/database";
import * as SplashScreen from 'expo-splash-screen';
import PlacesDetails from "./screens/PlacesDetails";

const Stack = createNativeStackNavigator();

export default function App() {
    const [dbInitialized, setDbInitialized] = useState(false);

    useEffect(()=>{
        async function prepare(){
            try {
               await init();
            }catch (e){
                console.log(e)
            }finally {
                setDbInitialized(true)
            }
        }
        prepare();
    },[]);

    const onLayoutRootView = useCallback(async () => {
        if (dbInitialized) {
            await SplashScreen.hideAsync();
        }
    }, [dbInitialized]);

    if(!dbInitialized){
        return null;
    }

  return (
      <>
        <StatusBar style='dark' />
          <NavigationContainer>
            <Stack.Navigator screenOptions={{
                headerStyle: {backgroundColor:Colors.primary500},
                headerTintColor: Colors.gray700,
                contentStyle: {backgroundColor: Colors.gray700}
            }}>
              <Stack.Screen name='AllPlaces'
                            component={AllPlaces}
                            options={({navigation})=>({
                                title: "Your favorite Places",
                                headerRight: ({tintColor})=> <IconButton icon="add"
                                                           size={24}
                                                           onPress={()=>navigation.navigate('AddPlace')}
                                                           color={tintColor}
                  />
              })}/>
              <Stack.Screen name='AddPlace'
                            options={{
                                title: "Add a new Place",
                            }}
                            component={AddPlace} />
                <Stack.Screen name="Map" component={Map} />
                <Stack.Screen name="PlacesDetails" component={PlacesDetails} />
            </Stack.Navigator>
          </NavigationContainer>
      </>
  );
}

