// @flow

import React, { useState, forwardRef, useImperativeHandle } from 'react';
import {
	Text,
	View,
	TextInput,
	Alert
} from 'react-native';
import { texts_data } from '../../navigation/constants';
import styles from './styles';

type IRefInput = {
	getNumber: () => void,
};

type IProps = {
	onChangeText: (text: string) => void,
	value: text,
};

const Input = (props: IProps, ref) => {
	const { onChangeText, value } = props;
	const [isValid, setValid] = useState<boolean>(false);
	function messageOpen() {
		Alert.alert(
			'Alert',
			'Functionality for choosing country code will be added in next version',
			[
				{text: 'Ok', onPress: () => {}},
			],
		)
	}

	function validation() {
		setValid(true);
	}

	useImperativeHandle(
		ref,
		() => ({
			validation
		}),
		[],
	);

  return (
    <View style={styles.container}>
			<View style={styles.numberContainer}>
				<Text onPress={messageOpen} style={styles.codeText}>+380</Text>
				<TextInput
					style={styles.input}
					onChangeText={onChangeText}
					value={value}
					placeholder="1234567"
					maxLength={7}
					blurOnSubmit
					clearTextOnFocus
					onFocus={() => setValid(false)}
					autoCorrect={false}
					keyboardType="number-pad"
					underlineColorAndroid="transparent"
					returnKeyType="done"
				/>
			</View>
			{isValid && <Text style={styles.error}>{texts_data.phone_number.error}</Text>}
    </View>
  );
};

export const PhoneInput = forwardRef<IProps, IRefInput>(Input);
