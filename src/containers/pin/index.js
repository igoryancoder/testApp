// @flow

import React, { useRef, useState } from 'react';
import {
	Text,
	View
} from 'react-native';
import { Button, PinInput, PinModal } from '../../components';
import { texts_data, HOME } from '../../navigation/constants';
import { type INavigation } from '../../navigation/constants';
import styles from './styles';

type IProps = {
	navigation: INavigation<>,
};

export const PinScreen = (props: IProps): React.Node => {
	const inputModalRef = useRef<PinModal | null>(null);
	const [pin, setNumber] = useState([]);
	const [isError, setError] = useState(false)
	const { navigation } = props;
	function redirectTo() {
		console.log('pin', pin)
		if(pin.length < 5) {
			setError(true);
		} else {
			navigation.navigate(HOME);
		}
	}
	function modalOpen() {
			inputModalRef.current.toggle();
			clearError();
	}
	function clearError() {
		setError(false);
	}
	function pinHandler(v) {
		if(v == 'del') {
			const tmpDel = [...pin]
			tmpDel.pop();
			setNumber(tmpDel);
		} else {
			const newPin = [...pin];
			newPin.push(v);
			setNumber(newPin);
			if(newPin.length === 5) {
				inputModalRef.current.toggleClose();
			}
		}
	}
  return (
    <View style={styles.container}>
				<View style={styles.inputContainer}>
        	<Text>{texts_data.pin.header}</Text>
					<PinInput
						isError={isError}
						pinData={pin}
						onPress={modalOpen}
					/>
				</View>
				<Button
					onPress={redirectTo}
					text={texts_data.global.button}
				/>
				<PinModal
					ref={inputModalRef}
					onPress={pinHandler}
				/>
    </View>
  );
};
