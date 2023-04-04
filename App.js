import {StyleSheet} from 'react-native';
import CategoriesScreen from "./screens/CategoriesScreen";
import {NavigationContainer} from "@react-navigation/native";
import {createNativeStackNavigator} from "@react-navigation/native-stack"
import {StatusBar} from "expo-status-bar";
import MealsOverviewScreen from './screens/MealsOverviewScreen'
import MealDetailScreen from "./screens/MealDetailScreen";
import {createDrawerNavigator} from "@react-navigation/drawer";
import FavoritesScreen from "./screens/FavoritesScreen";
import {Ionicons} from '@expo/vector-icons'

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();
function DrawerNavigator() {
    return <Drawer.Navigator screenOptions={{
        headerStyle: {backgroundColor: '#351401'},
        headerTintColor: 'white',
        sceneContainerStyle: {backgroundColor: '#692d0b'},
        drawerContentStyle: {backgroundColor: '#351401'},
        drawerInactiveTintColor: 'white',
        drawerActiveTintColor: '#351401',
        drawerActiveBackgroundColor: '#c9a38f',
    }}>
        <Drawer.Screen name='Categories' component={CategoriesScreen} options={{
            title: 'All Categories',
            drawerIcon: ({color, size})=><Ionicons name='list' color={color} size={size}/>
        }}/>
        <Drawer.Screen name='Favorites' component={FavoritesScreen}
                       options={{
                           drawerIcon: ({color, size}) => <Ionicons name='star' color={color} size={size}/>
                       }}
        />
    </Drawer.Navigator>
}
export default function App() {
  return (
      <>
        <StatusBar style='light' />
          <NavigationContainer>
              <Stack.Navigator screenOptions={{
                  headerStyle: {backgroundColor: '#351401'},
                  headerTintColor: 'white',
                  contentStyle: {backgroundColor: '#692d0b'}
              }}>
                  <Stack.Screen name="Drawer"
                                component={DrawerNavigator}
                                options={{
                                    headerShown: false,
                                }}/>
                  <Stack.Screen name="MealsOverview"
                                component={MealsOverviewScreen}
                  />
                  <Stack.Screen name="MealDetail"
                                component={MealDetailScreen}
                                options={{
                                    title: "About the Meal"
                                }}
                  />
              </Stack.Navigator>
          </NavigationContainer>
      </>
  );
}

const styles = StyleSheet.create({
  container: {}
});
