import { StatusBar } from 'expo-status-bar';
import {Alert, Button, StyleSheet, View, Platform} from 'react-native';
import * as Notifications from 'expo-notifications';
import {useEffect} from "react";
import Constants from 'expo-constants';


Notifications.setNotificationHandler({

  handleNotification: async ()=>{
    return{
      shouldPlaySound: false,
      shouldSetBadge: false,
      shouldShowAlert: true
    }
  }
});

export default function App() {

  useEffect(()=>{
    async function configurePushNotifications() {
      const {status} = await Notifications.getPermissionsAsync();
      let finalStatus = status;
      if(finalStatus !== 'granted'){
        const {status} = await Notifications.requestPermissionsAsync();
        finalStatus = status;
      }
      if(finalStatus!=='granted'){
        Alert.alert('Permission required', 'Push notifications need the appropriate permissions.')
        return;
      }
      const pushTokenData = await Notifications.getExpoPushTokenAsync({
        projectId: Constants.expoConfig.extra.eas.projectId,
      });
      console.log(pushTokenData);
      if(Platform.OS === 'android'){
        await Notifications.setNotificationChannelAsync('default',{
          name: 'default',
          importance: Notifications.AndroidImportance.DEFAULT,
        });
      }
    }

    configurePushNotifications();

  },[])

 useEffect(()=>{
   const subscription1 = Notifications.addNotificationReceivedListener((notification)=>{
     console.log(`NOTIFICATION RECEIVED`, notification);
     const userName = notification.request.content.data.userName;
     console.log(userName)
   });

   const subscription2= Notifications.addNotificationResponseReceivedListener((response)=>{
     console.log(`NOTIFICATION RESPONSE`, response);
     const userName = response.notification.request.content.data.userName;

     console.log(userName)
   });

   return ()=>{
     subscription1.remove();
     subscription2.remove();
   }
 },[]);

  function scheduleNotificationHandler() {
    Notifications.scheduleNotificationAsync({
      content: {
        title: 'My first local notification',
        body: 'This is the body of the notification.',
        data: {userName: 'Max'}
      },
      trigger: {
        seconds: 5
      }
    });
  }
  return (
    <View style={styles.container}>
      <Button title='Schedule Notification'
              onPress={scheduleNotificationHandler}/>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
