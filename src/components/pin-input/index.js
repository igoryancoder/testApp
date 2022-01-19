// @flow

import React from 'react';
import {
	Text,
	View,
	TouchableWithoutFeedback
} from 'react-native';
import { texts_data } from '../../navigation/constants';
import styles from './styles';
const initialArray = ['', '', '', '', ''];

type IProps = {
	onPress: () => void,
	pin: any
};

export const PinInput = (props: IProps): React.Node => {
	const { onPress, pinData, isError } = props;

	function renderPin() {
		return initialArray.map((val, key) => (
			<View key={key} style={styles.numberContainer}>
				{pinData[key] && <Text>{pinData[key]}</Text>}
			</View>
			)
		)
	}
  return (
    <TouchableWithoutFeedback onPress={onPress}>
			<View style={styles.container}>
				<Text style={styles.header}>{texts_data.pin.input_header}</Text>
					<View style={styles.pinContainer}>
						{renderPin()}
					</View>
					<View style={styles.errorContainer}>
						{isError && <Text style={styles.error}>{texts_data.pin.error}</Text>}
					</View>
			</View>
    </TouchableWithoutFeedback>
  );
};
