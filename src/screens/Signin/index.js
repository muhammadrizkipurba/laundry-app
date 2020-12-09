import React, { useState } from 'react';
import { Fragment } from 'react';
import {Image, Keyboard, SafeAreaView, ScrollView, StyleSheet, Text, TouchableOpacity, TouchableWithoutFeedback, View} from 'react-native';
import { AppleIcon, Color, FacebookIcon, GoogleIcon, Logo } from '../../assets';
import TextInputField from '../../components/TextInputField';

const DismissKeyboard = ({ children }) => {
	return (
		<TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
			{children}
		</TouchableWithoutFeedback>
	)
};

const SigninScreen = ({ navigation }) => {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');

	const onChangeEmail = (e) => {
		setEmail(e.target.value)
	};

	const onChangePassword = (e) => {
		setPassword(e.target.value)
	};

	const navigateTo = (screen) => {
		navigation.navigate(screen);
	};

  return (
		<Fragment>
			<SafeAreaView style={styles.topSafeArea}/>
			<SafeAreaView style={styles.bottomSafeArea}>
				<ScrollView style={{ flex: 1 }} showsVerticalScrollIndicator={false} bounces={false}>
					<View style={styles.topBox}>
						<Image source={Logo} style={styles.loginImage}/>
						<Text style={styles.sloganText}>Fresh Clothes, Fresh Life</Text>
					</View>
					<View style={styles.bottomBoxOuter}>
						<View style={styles.bottomBoxInner}>
								<View>
									<Text style={styles.screenGreeting}>
										Welcome back,
									</Text>
									<Text style={styles.screenTitle}>
										Sign in to continue
									</Text>
									<View style={styles.formWrapper}>
										<DismissKeyboard>
											<TextInputField 
												label='Email or username'
												name="email"
												value={email}
												onChange={(e) => onChangeEmail(e)}
												placeholder="Your email or username"
												autoCapitalize="none"
											/>
										</DismissKeyboard>
										<DismissKeyboard>
											<TextInputField 
												label='Password'
												name='password'
												value={password}
												onChange={(e) => onChangePassword(e)}
												placeholder="Your password"
												autoCapitalize="none"
												secureTextEntry={true}
											/>
										</DismissKeyboard>
										<View style={{ flexDirection: "row", marginBottom: 20, marginTop: 30, justifyContent: 'center' }}>
											<Text style={{ marginRight: 5 }}>Don't have an account ? Sign up</Text>
											<TouchableOpacity onPress={() => navigateTo('SignupScreen')}>
												<Text style={styles.signupLink}>here</Text>
											</TouchableOpacity>
										</View>
										<TouchableOpacity onPress={() => onSignIn} style={styles.button}>
											<Text style={styles.buttonText}>Sign in</Text>
										</TouchableOpacity>
										<Text style={{textAlign: "center", marginVertical: 20}}>Or Sign in with : </Text>
										<View style={styles.socialWrapper}>
											<TouchableOpacity style={styles.socialButton}>
												<FacebookIcon height={30} width={30} />
											</TouchableOpacity>
											<TouchableOpacity style={styles.socialButton}>
												<GoogleIcon height={30} width={30} />
											</TouchableOpacity>
											<TouchableOpacity style={styles.socialButton}>
												<AppleIcon height={30} width={30} fill="#7d7d7d" />
											</TouchableOpacity>
										</View>
									</View>
								</View>
						</View>
					</View>
				</ScrollView>
			</SafeAreaView>
		</Fragment>
	// <ScrollView style={{flex: 1}} showsVerticalScrollIndicator={false}>
	// </ScrollView>
  );
};

export default SigninScreen;

const styles = StyleSheet.create({
	topSafeArea: {
		flex: 0,
		backgroundColor: Color.blueSky
	},
	bottomSafeArea: {
		flex: 1,
		padding: 0,
		backgroundColor: '#FFFFFF'
	},
	topBox: {
		height: 230,
		backgroundColor: Color.blueSky,
		alignItems: "center",
		justifyContent: 'center'
	},
	bottomBoxOuter: {
		backgroundColor: Color.blueSky
	},
	bottomBoxInner: {
		flex: 1,
		borderTopRightRadius: 45,
		borderTopLeftRadius: 45,
		backgroundColor: "#ffffff",
		paddingHorizontal: 35,
		paddingVertical: 35,
	},
	loginImage: {
		marginTop: 25,
		width: 240,
		height: 100,
		resizeMode: 'contain'
	},
	sloganText: {
    marginTop: 10,
    fontSize: 16,
    fontStyle: "italic",
    fontWeight: "700",
    color: Color.mainBlue
	},
	screenGreeting: {
		marginBottom: 5,
		fontSize: 24,
		fontWeight: '500',
		color: Color.mainBlue
	},
	screenTitle: {
		textAlign: 'left',
		fontSize: 25,
		fontWeight: '700',
		color: Color.mainBlue
	},
	formWrapper: {
		marginTop: 10
	},
	button: {
		backgroundColor: Color.mainBlue,
		paddingVertical: 16,
		alignItems: 'center',
		borderRadius: 30
	},
	buttonText: {
		color: "#ffffff",
		textTransform: "uppercase",
		letterSpacing: 3,
		fontSize: 15,
		fontWeight: '700'
	},
	signupLink: {
		color: Color.secondaryBlue
	},
	socialWrapper: {
		flexDirection: "row",
		alignItems: 'center',
		justifyContent: 'space-between'
	},
	socialButton: {
		backgroundColor: "#ffffff",
		paddingVertical: 20,
		paddingHorizontal: 32,
		borderRadius: 10,
		shadowColor: '#aeaeae',
		shadowOpacity: 1,
		shadowRadius: 1,
		shadowOffset: {
			height: 0,
			width: 0
		},
		elevation: 1,
	},
	version	: {
		textAlign: "center",
		marginBottom: 5,
		fontSize: 12,
		color: '#ABABAB'
	}
});
