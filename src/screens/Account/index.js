import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import { Dimensions } from 'react-native';
import { Color } from '../../assets';

import MainContent from './views/MainContent';
import HeaderSettingsButton from './views/HeaderSettingsButton';
import HeaderNotificationButton from './views/NotificationButton';

const Stack = createStackNavigator();

const windowHeight = Dimensions.get('window').height;

const AccountScreen = () => {

  const onPressSettings = (props) => {
    console.log(props);
  };

  const onPressNotifications = (props) => {
    console.log(props);
  };

  return (
    <Stack.Navigator headerMode="float">
			<Stack.Screen 
				name="My account" 
				component={MainContent} 
        options={{
          headerRight: (props) => (
            <HeaderSettingsButton 
              {...props}
              onPress={() => onPressSettings(props)}
            />
          ),
          headerLeft: (props) => (
            <HeaderNotificationButton 
              {...props}
              onPress={() => onPressNotifications(props)}
              unReadNotification={true}
            />
          ),
          headerTitle: "",
          headerTitleStyle: {
            fontSize: 20,
            textTransform: "uppercase",
            color: Color.mainBlue,
            marginBottom: 15
          },
          headerStatusBarHeight: windowHeight*0.06,
          headerStyle: {
            backgroundColor: Color.blueSky,
            shadowColor: 'transparent',
            elevation: 0,
          },
          cardShadowEnabled: false,
        }}
			/>
		</Stack.Navigator>
  );
};

export default AccountScreen;