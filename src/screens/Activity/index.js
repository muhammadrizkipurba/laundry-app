import React from 'react';

import { Color } from '../../assets'

import { createStackNavigator } from '@react-navigation/stack';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

import RecentActivity from './views/RecentActivity';
import HistoryActivity from './views/HistoryActivity';


const Stack = createStackNavigator();
const Tab = createMaterialTopTabNavigator();

const ActivitiesComponent = ({}) => {
  return (
    <Tab.Navigator
      tabBarOptions={{
        indicatorStyle: {
          backgroundColor: Color.mainBlue,
          height: 3,
          borderRadius: 20,
        },
        labelStyle: {
          fontSize: 16,
          fontWeight: "500",
          textTransform: 'capitalize'
        },
        activeTintColor: Color.mainBlue,
        inactiveTintColor: "#9a9a9a"
      }}
    >
      <Tab.Screen 
        name="RecentActivity" 
        component={RecentActivity} 
        options={{
          tabBarLabel: "Recent",
        }}
      />
      <Tab.Screen 
        name="HistoryActivity" 
        component={HistoryActivity} 
        options={{
          tabBarLabel: "History",
        }}
      />
    </Tab.Navigator>
  );
};

const ActivityScreen = () => {
  return (
    <Stack.Navigator>
			<Stack.Screen 
				name="Activity" 
				component={ActivitiesComponent} 
        options={{
          cardShadowEnabled: false,
          headerStyle: {
            shadowColor: 'transparent',
            elevation: 0,
          },
          headerTitleStyle: {
            fontSize: 20,
            textTransform: 'uppercase'
          }
        }}
			/>
		</Stack.Navigator>
  );
};

export default ActivityScreen;
