import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import ListingScreen from '../screens/ListingScreen';
import ListingDetailsScreen from '../screens/ListingDetailsScreen'
import ViewImageScreen from '../screens/ViewImageScreen';
import UserProfile from '../screens/UserProfileScreen';

const Stack = createStackNavigator();

const FeedNavigator = () => (
    <Stack.Navigator mode='modal' screenOptions={{headerShown: false}}>
        <Stack.Screen name='Listings' component={ListingScreen}/>
        <Stack.Screen name='ListingDetails' component={ListingDetailsScreen}/>
        <Stack.Screen name='ViewImageScreen' component={ViewImageScreen}/>
        <Stack.Screen name='UserProfile' component={UserProfile}/>
    </Stack.Navigator>
)
export default FeedNavigator;