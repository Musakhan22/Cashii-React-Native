import 'react-native-gesture-handler';

import React, {useEffect} from 'react';
import SplashScreen from 'react-native-splash-screen';

import { NavigationContainer } from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import WelcomeScreen from './screens/welcomeScreen';
import ConnectWalletScreen from './screens/connectWalletScreen';
import CreatePasswordScreen from './screens/createPasswordScreen';
import SecretPhraseScreen from './screens/secretPhraseScreen';
import ConfirmSecretPhraseScreen from './screens/confirmSecretPhraseScreen';
import WalletCreationScreen from './screens/walletCreationScreen';
import { Tabs } from './navigation/Tabs';
import DashboardScreen from './screens/dashboardScreen';

const Stack = createStackNavigator();

export default function App() {
  useEffect(() => {
    setTimeout(() => {
      SplashScreen.hide();
    }, 500);
  });
  return (
    <NavigationContainer >
      <Stack.Navigator
        initialRouteName="welcome"
        screenOptions={{headerShown: false}}>
        <Stack.Screen name="welcome" component={WelcomeScreen} />
        <Stack.Screen name="connectWallet" component={ConnectWalletScreen} />
        <Stack.Screen name="createPassword" component={CreatePasswordScreen} />
        <Stack.Screen name="secretPhrase" component={SecretPhraseScreen} />
        <Stack.Screen name="confirmSecretPassword" component={ConfirmSecretPhraseScreen } />
        <Stack.Screen name="walletCreation" component={WalletCreationScreen } />
        <Stack.Screen name="Dashboard" component={DashboardScreen} />
        <Stack.Screen name="Tabs" component={Tabs} />

      </Stack.Navigator>
    </NavigationContainer>
  );
}
// const styles = StyleSheet.create({});
