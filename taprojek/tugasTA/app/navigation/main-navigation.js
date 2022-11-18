import * as React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import HomePage from '../screens/home-page/index';
import DetailPage from '../screens/detail-page/detail';
import SplashScreen from '../screens/splash-screen/splash';
import ProfilePage from '../screens/profile-page/profile';


const Stack = createStackNavigator();

export default () => (
  <Stack.Navigator initialRouteName="Splash Screen">
    <Stack.Screen name="Splash Screen" component={SplashScreen} options={{headerShown: false}}/>
    <Stack.Screen name="Home Page" component={HomePage} options={{headerShown: false}}/>
    <Stack.Screen name="Profile Page" component={ProfilePage} options={{headerShown: true}}/>
    <Stack.Screen name="Detail Page" component={DetailPage} options={{headerShown: true}}/>
  </Stack.Navigator>
);
