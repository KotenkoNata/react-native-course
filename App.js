import { StatusBar } from 'expo-status-bar';
import {NavigationContainer} from "@react-navigation/native";
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import AllPlaces from "./screens/AllPlaces";
import AddPlace from "./screens/AddPlace";
import IconButton from "./components/UI/IconButton";
import {Colors} from "./contants/colors";

const Stack = createNativeStackNavigator();
export default function App() {
  return (
      <>
        <StatusBar style='dark' />
          <NavigationContainer>
            <Stack.Navigator screenOptions={{
                headerStyle: {backgroundColor:Colors.primary500},
                headerTintColor: Colors.gray700,
                contentStyle: {backgroundColor: Colors.gray700}
            }}>
              <Stack.Screen name='Your Favorite Places'
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
            </Stack.Navigator>
          </NavigationContainer>
      </>
  );
}

