// @flow

import {
	createAppContainer
} from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack'

import {
	MainScreen,
	PhoneNumberScreen,
	PinScreen
} from '../containers';
import {
  HOME,
  PHONE_NUMBER,
  PIN
} from './constants';

const AppNavigator = createStackNavigator(
	{
		[HOME]: {
      screen: MainScreen,
      navigationOptions: {
        title: 'Home'
      }
		},
		[PHONE_NUMBER]: {
      screen: PhoneNumberScreen,
      navigationOptions: {
        title: 'Security'
      }
    },
    [PIN]: {
    	screen: PinScreen,
      navigationOptions: {
        title: 'Security'
      }
		},
	},
	{
		initialRouteName: HOME,
		headerLayoutPreset: 'center',
	},
);

export const Navigation = createAppContainer(AppNavigator);
