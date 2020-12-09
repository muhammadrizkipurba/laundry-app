import React from 'react';
import {Keyboard, StyleSheet, Text, TextInput, TouchableWithoutFeedback, View} from 'react-native';
import { EmailIcon, PasswordIcon } from '../../assets';

const DismissKeyboard = ({ children }) => {
	return (
		<TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
			{children}
		</TouchableWithoutFeedback>
	)
};

const TextInputField = ({ 
	label, 
	name,
	placeholder, 
	value, 
	onChange, 
	autoCapitalize, 
	secureTextEntry 
}) => {

	const Icon = () => {
		if (name === 'email') return <EmailIcon width={20} height={20} fill="#c0c0c0" />;
		if (name === 'password') return <PasswordIcon width={20} height={20} fill="#c0c0c0" />;
		return null;
	};

  return (
		<View style={styles.container}>
			<Text style={styles.label}>{label}</Text>
			<DismissKeyboard>
				<View style={styles.inputWrapper}>
					<Icon />
					<TextInput 
						autoCapitalize={autoCapitalize}
						placeholder={placeholder}
						value={value}
						onChange={onChange}
						style={styles.inputForm}
						textContentType="password"
						autoCorrect={false}
						secureTextEntry={secureTextEntry || false	}
					/>
				</View>
			</DismissKeyboard>
		</View>
  );
};

export default TextInputField;

const styles = StyleSheet.create({
	container: {
		marginTop: 20
	},
	label: {
		marginBottom: 10,
		paddingHorizontal: 14
	},
	inputWrapper: {
		flexDirection: 'row',
		alignItems: 'center',
		borderWidth: 1,
		borderRadius: 25,
		borderColor: '#e7e7e7',
		paddingHorizontal: 20
	},
	inputForm: {
		flex: 1,
		paddingVertical: 15,
		paddingHorizontal: 13,
	}
});
