import React from 'react';

import { Color } from '../../assets'

import { createStackNavigator } from '@react-navigation/stack';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

import RecentOrders from './views/RecentOrders';
import HistoryOrders from './views/HistoryOrders';


const Stack = createStackNavigator();
const Tab = createMaterialTopTabNavigator();

const OrdersComponent = ({}) => {
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
        name="RecentOrders" 
        component={RecentOrders} 
        options={{
          tabBarLabel: "Recent",
        }}
      />
      <Tab.Screen 
        name="HistoryOrders" 
        component={HistoryOrders} 
        options={{
          tabBarLabel: "History",
        }}
      />
    </Tab.Navigator>
  );
};

const OrdersScreen = () => {
  return (
    <Stack.Navigator>
			<Stack.Screen 
				name="Orders" 
				component={OrdersComponent} 
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

export default OrdersScreen;
