import React, { useEffect } from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import { Logo, LoadingGif } from '../../assets';

const SplashScreen = ({ navigation }) => {

  useEffect(() => {
    setTimeout(() => {
      // navigation.replace('MainApp') // redirect to MainApp Display
      navigation.replace('LoginScreen') // redirect to Signin Display
    }, 3000);
  }, [navigation]);

  return (
    <View style={styles.background}>
      <Image source={Logo} style={styles.logo} />
      <View style={styles.loadingWrapper}>
        <Image source={LoadingGif} style={styles.loading} />
      </View>
      <View style={styles.notesWrapper}>
        <Text style={styles.notesVersion}>
          v1.0.0
        </Text>
        <Text style={styles.notesAuthor}>
          Powered by Mhd Rizki Purba
        </Text>
      </View>
    </View>
  );
};

export default SplashScreen;

const styles = StyleSheet.create({
  background: {
    flex: 1,
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center"
  },
  logo: {
    width: 260,
    height: 220,
  },
  loadingWrapper: {
    height: 100,
    width: 200
  },
  loading: {
    height: "100%",
    width: "100%"
  },
  notesWrapper: {
    fontSize: 15,
    // fontFamily: 'Helvetica',
    fontWeight: "bold",
    position: "absolute",
    bottom: 50,
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  },
  notesVersion: {
    marginBottom: 5
  },

});
