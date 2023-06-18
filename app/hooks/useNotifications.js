import React, { useEffect } from "react";
import * as Notifications from "expo-notifications";
import * as Permissions from "expo-permissions";

import expoPushTokenApi from "../api/expoPushTokens";
import navigation from "../navigation/rootNavigation";

export default useNotifictions = () => {
    useEffect(() => {
        registerForPushNotifications();
        Notifications.addNotificationReceivedListener((notification) => navigation.navigate('Account'));
      }, [])
    
      const registerForPushNotifications = async () => {
        try {
          const permission = await Permissions.askAsync(Permissions.NOTIFICATIONS);
          if(!permission.granted) return;
      
          const token = await Notifications.getExpoPushTokenAsync({
            projectId: ""
          });
          //console.log(token)
          expoPushTokenApi.register(token);
    
        } catch (error) {
          console.log("Error getting a push token", error);
        }
    
      }
}