import React, { useState, forwardRef, useImperativeHandle } from 'react';
import { View, TouchableOpacity, Text, Modal, TouchableWithoutFeedback } from 'react-native';
import styles from './styles';
const keyArr = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '', '0', 'del'];

type IRefKeyboard = {
	toggle: () => void,
};

type IProps = {
	onPress: (val: string, key: number) => void,
};

const Pin = (props: IProps, ref): React.Node => {
		const [isActive, setActive] = useState(false);
    function renderKey() {
        const { onPress } = props;
        return keyArr.map((val, key) => {
            if (val === '') {
                return <View key={key} style={styles.buttonStyle} />
            }
            return (
                <TouchableOpacity key={key} onPress={() => onPress(val)} style={styles.buttonStyle}>
                    {val === 'del' ? <Text>Del.</Text> :
                        <Text style={styles.labelStyle}>{val}</Text>}
                </TouchableOpacity>
            )
        })
		}

		function toggle() {
			if(!isActive) {
				setActive(true);
			}
		}

		function toggleClose() 
		{
			setActive(false);
		}

		useImperativeHandle(
			ref,
			() => ({
				toggle,
				toggleClose
			}),
			[],
		);

		return (
			<Modal
				style={styles.modal}
				animationType="slide"
				visible={isActive}
				transparent
				onRequestClose={() => setActive(false)}>
					<TouchableWithoutFeedback onPress={() => setActive(false)}><View style={styles.close}/></TouchableWithoutFeedback>
					<View style={styles.wrapperStyle}>
							{renderKey()}
					</View>
			</Modal>
		);
};

export const PinModal = forwardRef(Pin);
