import React from 'react';
import { StyleSheet } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { HomeScreen, ActivityScreen, AccountScreen, SplashScreen, TipsScreen, PromoScreen, SingleBlogScreen } from '../screens';
import { BottomNavigator } from '../components';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const MainApp  = () => {
  return (
    <Tab.Navigator 
      tabBar={ props => <BottomNavigator {...props} /> }
    >
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Activity" component={ActivityScreen} />
      <Tab.Screen name="Tips" component={TipsScreen} />
      <Tab.Screen name="Promo" component={PromoScreen} />
      <Tab.Screen name="Account" component={AccountScreen} />
    </Tab.Navigator>
  );
};

const Router = () => {
  return (
    <Stack.Navigator initialRouteName="Splash">        
      <Stack.Screen name="Splash" component={SplashScreen} options={{headerShown: false}} />
      <Stack.Screen name="MainApp" component={MainApp} options={{headerShown: false}} />
      <Stack.Screen 
        name="SingleBlogScreen" 
        component={SingleBlogScreen} 
        options={{
          headerShown: true, 
          headerTitle: 'Laundry Tips',
          headerBackTitleVisible: false,
          gestureEnabled: true,
          cardStyle: {
            backgroundColor: "#f9f9f9"
          }
        }} 
      />
    </Stack.Navigator>
  );
};

export default Router;

const styles = StyleSheet.create({});
