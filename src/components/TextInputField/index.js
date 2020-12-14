import React from 'react';
import {Keyboard, StyleSheet, Text, TextInput, TouchableWithoutFeedback, View} from 'react-native';
import { AccountIcon, EmailIcon, PasswordIcon, PhoneIcon } from '../../assets';

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
  secureTextEntry,
  isEditable,
  error
}) => {

	const Icon = () => {
		if (name === 'email') return <EmailIcon width={20} height={20} fill={error ? "red" : "#c0c0c0"} />;
		if (name === 'password' || name === 'confirmPassword') return <PasswordIcon width={20} height={20} fill={error ? "red" : "#c0c0c0"} />;
		if (name === 'name') return <AccountIcon width={20} height={20} fill={error ? "red" : "#c0c0c0"} />;
		if (name === 'phone') return <PhoneIcon width={18} height={18} fill={error ? "red" : "#c0c0c0"} />;
		return null;
	};

  return (
		<View style={styles.container}>
			<Text style={styles.label}>{label}</Text>
			<DismissKeyboard>
				<View style={styles.inputWrapper(error, isEditable)}>
					<Icon />
					<TextInput 
						autoCapitalize={autoCapitalize}
						placeholder={placeholder}
						value={value}
						onChangeText={onChange}
						style={styles.inputForm}
						textContentType="password"
						autoCorrect={false}
            editable={isEditable}
						secureTextEntry={secureTextEntry || false	}
					/>
				</View>
			</DismissKeyboard>
      { error && <Text style={styles.errorMessage}>this field is required</Text> }
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
	inputWrapper: (error, isEditable) => ({
		flexDirection: 'row',
		alignItems: 'center',
		borderWidth: 1,
		borderRadius: 25,
		borderColor: error ? 'red' : '#e7e7e7',
    paddingHorizontal: 20,
    backgroundColor: isEditable ? 'transparent' : '#f8f8f8'
	}),
	inputForm: {
		flex: 1,
		paddingVertical: 15,
    paddingHorizontal: 13,
    backgroundColor: 'transparent'
  },
  errorMessage: {
    marginTop: 2,
    fontSize: 12,
    paddingHorizontal: 20,
    color: 'red',
    fontStyle: 'italic'
  }
});
