import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {Tabs} from './Tabs';
import {
  WelcomeScreen,
  ConnectWalletScreen,
  CreatePasswordScreen,
  SecretPhraseScreen,
  ConfirmSecretPhraseScreen,
  WalletCreationScreen,
  DashboardScreen,
  CreatePasscodeScreen,
  EnterSecretPhraseScreen,
  ConfirmWalletAddedScreen,
  SendPaymentScreen,
  SettingsScreen,
  Reveralsecretscreen,
  Walletaddressscreen,
  TransactionHistoryScreen,
  Pointsscreen,
  ShowSecretPhraseScreen,
  GeneralSettingsScreen,
  ConfirmPasswordScreen,
  CreateWallets,
  Confirmpasscodescreen,
} from '../screens/index';

export default function StackNavigator() {
  const Stack = createStackNavigator();
  return (
    <Stack.Navigator
      initialRouteName="welcome"
      screenOptions={{headerShown: false}}>
      <Stack.Screen name="welcome" component={WelcomeScreen} />
      <Stack.Screen name="connectWallet" component={ConnectWalletScreen} />
      <Stack.Screen name="createPassword" component={CreatePasswordScreen} />
      <Stack.Screen name="secretPhrase" component={SecretPhraseScreen} />
      <Stack.Screen
        name="confirmSecretPassword"
        component={ConfirmSecretPhraseScreen}
      />
      <Stack.Screen name="walletCreation" component={WalletCreationScreen} />
      <Stack.Screen name="Dashboard" component={DashboardScreen} />
      <Stack.Screen name="Tabs" component={Tabs} />
      <Stack.Screen name="createPasscode" component={CreatePasscodeScreen} />
      <Stack.Screen name="confirmPasscode" component={ConfirmPasswordScreen} />

      <Stack.Screen
        name="enterSecretPasscode"
        component={EnterSecretPhraseScreen}
      />
      <Stack.Screen name="walletAdded" component={ConfirmWalletAddedScreen} />
      <Stack.Screen name="sendPayment" component={SendPaymentScreen} />
      <Stack.Screen name="Settings" component={SettingsScreen} />
      <Stack.Screen name="generalSettings" component={GeneralSettingsScreen} />
      <Stack.Screen
        name="revealsecretSettings"
        component={Reveralsecretscreen}
      />
      <Stack.Screen
        name="walletaddressscreen"
        component={Walletaddressscreen}
      />
      <Stack.Screen
        name="transactionhistoryscreen"
        component={TransactionHistoryScreen}
      />
      <Stack.Screen name="pointsScreen" component={Pointsscreen} />
      <Stack.Screen name="revealphrase" component={ShowSecretPhraseScreen} />
      <Stack.Screen name="createWallets" component={CreateWallets} />
      <Stack.Screen name="confirmPasscodes" component={Confirmpasscodescreen} />
    </Stack.Navigator>
  );
}
