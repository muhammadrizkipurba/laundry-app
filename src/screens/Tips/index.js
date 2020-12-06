import React from 'react';
import {Button, FlatList, SafeAreaView, StyleSheet, Text, View} from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';

import { Tips } from '../../components/StaticContens';
import Card from './views/Card';

const Stack = createStackNavigator();

const LaundryTipsComponent = () => {

	const onPressSingleCard = (id) => {
		alert(`Single tips ID : ${id}`)
	};

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        keyExtractor={(item) => item.id.toString()}
        data={Tips}
				style={{paddingVertical: 12}}
				showsVerticalScrollIndicator={false}
        renderItem={({item}) => (
          <View style={{flex: 1}}>
            <Card data={item} onPress={() => onPressSingleCard(item.id)} />
          </View>
        )}
      />
    </SafeAreaView>
  );
};

// For Top Stack Navigator
const TipsScreen = () => {
  return (
		<Stack.Navigator>
			<Stack.Screen 
				name="Laundry Tips" 
				component={LaundryTipsComponent} 
			/>
		</Stack.Navigator>
  );
};

export default TipsScreen;

const styles = StyleSheet.create({
  container: {
		backgroundColor: "white",
		alignItems: 'center',
		justifyContent: 'center',
  },
});
