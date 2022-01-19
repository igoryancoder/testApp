// @flow

import React, { useRef, useState } from 'react';
import {
	Text,
	View
} from 'react-native';
import { Button, PhoneInput } from '../../components';
import { texts_data, PIN } from '../../navigation/constants';
import { type INavigation } from '../../navigation/constants';
import styles from './styles';

type IProps = {
	navigation: INavigation<>,
};

export const PhoneNumberScreen = (props: IProps): React.Node => {
	const { navigation } = props;
	const [value, onChangeText] = useState<string>('')
	const inputRef = useRef<PhoneInput | null>(null);
	function redirectTo() {
		if(typeof +value !== 'number' || value.length < 7) {
			inputRef.current.validation();
		} else {
			navigation.navigate(PIN);
		}
	}
  return (
    <View style={styles.container}>
				<View style={styles.inputContainer}>
        	<Text>{texts_data.phone_number.header}</Text>
					<PhoneInput
						ref={inputRef}
						onChangeText={onChangeText}
						value={value}
					/>
				</View>
				<Button
					onPress={redirectTo}
					text={texts_data.global.button}
				/>
    </View>
  );
};
