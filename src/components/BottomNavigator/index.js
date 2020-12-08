import React from 'react';
import { StyleSheet, View } from 'react-native';

import TabItem from './TabItem';

const BottomNavigator = ({ state, descriptors, navigation }) => {
  const focusedOptions = descriptors[state.routes[state.index].key].options;

  if (focusedOptions.tabBarVisible === false) {
    return null;
  }

  return (
    <View style={{backgroundColor: 'white'}}>
      <View style={styles.container}>
        {state.routes.map((route, index) => {
          const { options } = descriptors[route.key];
          const label =
            options.tabBarLabel !== undefined
              ? options.tabBarLabel
              : options.title !== undefined
              ? options.title
              : route.name;

          const isFocused = state.index === index;

          const onPress = () => {
            const event = navigation.emit({
              type: 'tabPress',
              target: route.key,
              canPreventDefault: true,
            });

            if (!isFocused && !event.defaultPrevented) {
              navigation.navigate(route.name);
            }
          };

          const onLongPress = () => {
            navigation.emit({
              type: 'tabLongPress',
              target: route.key,
            });
          };

          return (
            <TabItem
              key={`tab-item-${index}`}
              onPress={onPress}
              onLongPress={onLongPress}
              isFocused={isFocused}
              label={label}
            />
          );
        })}
      </View>
    </View>
  );
};

export default BottomNavigator;

const styles = StyleSheet.create({
	container: { 
		flexDirection: 'row',
		backgroundColor: 'white',
		justifyContent: 'space-between',
    paddingTop: 25,
    borderRadius: 30,
    paddingBottom: 45,
    shadowColor: '#d7d7d7',
    shadowOpacity: 1,
    shadowRadius: 2,
    shadowOffset: {
      height: 0,
      width: 0
    },
    elevation: 1,
	}
});
