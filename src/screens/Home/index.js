import React from 'react';
import { StyleSheet, View, Dimensions, ScrollView } from 'react-native';

import { Color } from '../../assets';
import HeaderLogo from './views/HeaderLogo';
import LaundryPromo from './views/LaundryPromo';
import OurServices from './views/OurServices';
import PointsInformation from './views/PointsInformation';

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <HeaderLogo />
        <View style={styles.backgroundBottomOuter}>
          <View style={styles.backgroundBottomInner}>
            <LaundryPromo />
            <OurServices />
          </View>
        </View>
        <PointsInformation />
      </ScrollView>
    </View>
  );
};

export default HomeScreen;

const WindowWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white"
  },
  backgroundBottomOuter: {
    height: "70%",
    backgroundColor: Color.blueSky,
  },
  backgroundBottomInner: {
    flex: 1,
    backgroundColor: 'white', 
    borderTopLeftRadius: 80,
    paddingVertical: 60,
    paddingHorizontal: WindowWidth*0.06,
    marginBottom: "38%"
  }
});
