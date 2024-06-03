import 'react-native-gesture-handler';

import React, {useEffect} from 'react';
import SplashScreen from 'react-native-splash-screen';

import { NavigationContainer } from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import { Tabs } from './navigation/Tabs';

import WelcomeScreen from './screens/welcomeScreen';
import CreatePasswordScreen from './screens/Create wallets/createPasswordScreen';
import SecretPhraseScreen from './screens/Create wallets/secretPhraseScreen';
import ConfirmSecretPhraseScreen from './screens/Create wallets/confirmSecretPhraseScreen';
import WalletCreationScreen from './screens/Create wallets/walletCreationScreen';
import DashboardScreen from './screens/dashboardScreen';
import CreatePasscodeScreen from './screens/Import wallets/createPasscodeScreen';
import ConnectWalletScreen from './screens/connectWalletScreen';
import EnterSecretPhraseScreen from './screens/Import wallets/enterSecretPhraseScreen';
import ConfirmWalletAddedScreen from './screens/Import wallets/confirmWalletAddedScreen';
import SendPaymentScreen from './screens/Send/sendPaymentScreen';
import GeneralSettingsScreen from './screens/Settings/generalSettingsScreen';
import Reveralsecretscreen from './screens/Settings/reveralsecretscreen';
import Walletaddressscreen from './screens/Settings/walletaddressscreen';
import TransactionHistoryScreen from './screens/Settings/transactionHistoryScreen';
import Pointsscreen from './screens/Settings/pointsscreen';

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
        <Stack.Screen name="createPasscode" component={CreatePasscodeScreen} />
        <Stack.Screen name="enterSecretPasscode" component={EnterSecretPhraseScreen} />
        <Stack.Screen name="walletAdded" component={ConfirmWalletAddedScreen} />
        <Stack.Screen name="sendPayment" component={SendPaymentScreen} />
        <Stack.Screen name="generalSettings" component={GeneralSettingsScreen} />
        <Stack.Screen name="revealsecretSettings" component={Reveralsecretscreen} />
        <Stack.Screen name="walletaddressscreen" component={Walletaddressscreen} />
        <Stack.Screen name="transactionhistoryscreen" component={TransactionHistoryScreen} />
        <Stack.Screen name="pointsScreen" component={Pointsscreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
// const styles = StyleSheet.create({});
