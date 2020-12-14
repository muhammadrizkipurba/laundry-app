import React, { useLayoutEffect, useRef, useState } from 'react';
import { Fragment } from 'react';
import validator from 'validator';
import {SafeAreaView, ScrollView, StyleSheet, Text, Image, View, Dimensions, TouchableOpacity} from 'react-native';

import { Color, SplashWater, LoadingCircleGif } from '../../assets';
import { DismissKeyboard, TextInputField } from '../../components';


const SignupScreen = ({ navigation }) => {
  
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [canSubmit, setCanSubmit] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  let _scrollview = useRef(null);

  const navigateTo = (screen) => {
		navigation.navigate(screen);
  };

  onChangeEmail = (value) => {
    setEmail(value.trim())
  };

  onChangeName = (value) => {
    setName(value)
  };

  onChangePhone = (value) => {
    setPhone(value)
  };

  onChangePassword = (value) => {
    setPassword(value)
  };

  onChangeConfirmPassword = (value) => {
    setConfirmPassword(value)
  };

  const validateEmail = (email) => {
    return validator.isEmail(email);
  };

  useLayoutEffect(() => {
    if ((validateEmail(email) && password.length >= 8 && confirmPassword.length >= 8) || 
      email.length > 8 && password.length >= 8 && confirmPassword.length >= 8) {
      setCanSubmit(true)
    } else {
      setCanSubmit(false)
    }
  }, [email, password])

  return (
    <Fragment>
      <SafeAreaView style={{flex: 0, backgroundColor: '#ffffff'}} />
      <ScrollView
        style={{flex: 1, backgroundColor: '#ffffff'}}
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.container}> 
          <View>
            <Text style={styles.greeting}>Let's get started</Text>
            <Text style={{...styles.greetingDesc, marginTop: 5}}>Join us now and enjoy 30% off for your first order</Text>
          </View>
          <View style={{marginVertical: 5}}>
            <DismissKeyboard>
	  					<TextInputField 
								label='Email'
								name='email'
								value={email}
                onFocus={() => setTimeout(() => {_scrollview.current.scrollToEnd()}, 600)}
								onChange={(value) => onChangeEmail(value)}
								placeholder="Your email"
								autoCapitalize="none"
                isEditable={!isLoading}
								secureTextEntry={true}
							/>
						</DismissKeyboard>
            <DismissKeyboard>
	  					<TextInputField 
								label='Name'
								name='name'
								value={name}
                onFocus={() => setTimeout(() => {_scrollview.current.scrollToEnd()}, 600)}
								onChange={(value) => onChangeName(value)}
								placeholder="Your name"
                isEditable={!isLoading}
								secureTextEntry={true}
							/>
						</DismissKeyboard>
            <DismissKeyboard>
	  					<TextInputField 
								label='Phone'
								name='phone'
								value={phone}
                onFocus={() => setTimeout(() => {_scrollview.current.scrollToEnd()}, 600)}
								onChange={(value) => onChangePhone(value)}
								placeholder="Phone or WhatsApp"
                isEditable={!isLoading}
								secureTextEntry={true}
							/>
						</DismissKeyboard>
            <DismissKeyboard>
							<TextInputField 
								label='Password'
								name='password'
								value={password}
                onFocus={() => setTimeout(() => {_scrollview.current.scrollToEnd()}, 600)}
								onChange={(value) => onChangePassword(value)}
								placeholder="Your password"
								autoCapitalize="none"
                isEditable={!isLoading}
								secureTextEntry={true}
							/>
						</DismissKeyboard>
            <DismissKeyboard>
							<TextInputField 
								label='Confirm password'
								name='confirmPassword'
								value={confirmPassword}
                onFocus={() => setTimeout(() => {_scrollview.current.scrollToEnd()}, 600)}
								onChange={(value) => onChangeConfirmPassword(value)}
								placeholder="Confirm your password"
								autoCapitalize="none"
                isEditable={!isLoading}
								secureTextEntry={true}
							/>
						</DismissKeyboard>
            <View style={{ flexDirection: "row", marginBottom: 0, marginTop: 20, justifyContent: 'center' }}>
							<Text style={{ marginRight: 5 }}>Already have an account ? Sign in</Text>
							<TouchableOpacity onPress={() => navigateTo('LoginScreen')}>
								<Text style={styles.signinLink}>here</Text>
							</TouchableOpacity>
						</View>
            { isLoading ? 
              <View style={{ alignItems: 'center', marginVertical: 11}}>
                <Image source={LoadingCircleGif} style={styles.loadingGif} />
              </View>
              : <TouchableOpacity 
                style={styles.button(canSubmit)}
                onPress={() => onSignIn()} 
                disabled={isLoading || !canSubmit} 
              >
                <Text style={styles.buttonText}>Sign up</Text>
              </TouchableOpacity>
            }
          </View>
        </View>
      </ScrollView>
      <Image source={SplashWater} style={styles.splashWaterImg} />
      <SafeAreaView style={{flex: 0, backgroundColor: '#00ccff', height: 50}} />
    </Fragment>
  );
};

export default SignupScreen;

const ScreenWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  greeting: { 
    textAlign: 'left', 
    fontSize: 36,
    fontWeight: '700',
    color: '#00ccff'
  },
  greetingDesc: {
    textAlign: 'left', 
    fontSize: 15,
    fontWeight: '400',
    color: '#0a0a0a'
  },
  splashWaterImg: {
    width: ScreenWidth,
    backgroundColor: "#ffffff",
    position: 'absolute',
    bottom: 5,
    resizeMode: "contain"
  },
  signinLink: {
		color: Color.secondaryBlue
	},
  button: (canSubmit) => ({
    marginTop: 20,
		backgroundColor: Color.mainBlue,
    paddingVertical: 16,
    opacity: canSubmit ? 1 : .7,
		alignItems: 'center',
		borderRadius: 30
	}),
  buttonText: {
		color: "#ffffff",
		textTransform: "uppercase",
		letterSpacing: 3,
		fontSize: 15,
		fontWeight: '700'
	},
});
