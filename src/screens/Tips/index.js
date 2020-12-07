import React from 'react';
import { FlatList, SafeAreaView, StyleSheet, View } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';

import { Tips } from '../../components/StaticContens';
import Card from './views/Card';

const Stack = createStackNavigator();

const LaundryTipsComponent = ({navigation}) => {

	const onPressSingleCard = (data) => {
    navigation.navigate('SingleBlogScreen', {data});
	};

  return (
    <View style={styles.container}>
      <SafeAreaView style={styles.safeArea}>
        <FlatList
          keyExtractor={(item) => item.id.toString()}
          data={Tips}
          style={{paddingVertical: 12}}
          showsVerticalScrollIndicator={false}
          renderItem={({item}) => (
            <View style={{flex: 1}}>
              <Card data={item} onPress={() => onPressSingleCard(item)} />
            </View>
          )}
        />
      </SafeAreaView>
    </View>
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
