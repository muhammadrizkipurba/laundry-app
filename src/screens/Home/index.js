import React, { useState } from 'react';
import { StyleSheet, View, Dimensions, ScrollView, SafeAreaView } from 'react-native';

import { Color } from '../../assets';
import HeaderLogo from './views/HeaderLogo';
import LaundryPromo from './views/LaundryPromo';
import LaundryTips from './views/LaundryTips';
import OurServices from './views/OurServices';
import PointsInformation from './views/PointsInformation';

const HomeScreen = ({ navigation }) => {

  const [positionY, setpositionY] = useState(0)

  const handleScroll = e => {
    const position = e.nativeEvent.contentOffset.y;
    setpositionY(position);
  };

  return (
    <View style={styles.container}>
      <SafeAreaView style={styles.safeAreaTop(positionY)}>
        <ScrollView 
          onScroll={handleScroll} 
          scrollEventThrottle={32}
          showsVerticalScrollIndicator={false}
        >
          <HeaderLogo />
          <View style={styles.backgroundBottomOuter}>
            <View style={styles.backgroundBottomInner}>
              <LaundryPromo />
              <OurServices />
              <LaundryTips navigation={navigation} />
            </View>
          </View>
          <PointsInformation />
        </ScrollView>
      </SafeAreaView>
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
  safeAreaTop: positionY => ({
    flex: 1,
    backgroundColor: positionY > 280 ? 'white' : Color.blueSky
  }),
  backgroundBottomOuter: {
    height: "100%",
    backgroundColor: Color.blueSky,
  },
  backgroundBottomInner: {
    flex: 1,
    backgroundColor: 'white', 
    borderTopLeftRadius: 80,
    paddingTop: 60,
    paddingBottom: 20,
    paddingHorizontal: WindowWidth*0.06,
  }
});
