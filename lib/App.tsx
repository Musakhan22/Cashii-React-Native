import 'react-native-gesture-handler';
import 'react-native-get-random-values';


import React, {useEffect} from 'react';
import SplashScreen from 'react-native-splash-screen';

import { NavigationContainer } from '@react-navigation/native';
import StackNavigator from './navigation/Stack Navigator';

export default function App() {
  useEffect(() => {
    setTimeout(() => {
      SplashScreen.hide();
    }, 500);
  });
  return (
    <NavigationContainer children>
      <StackNavigator />
    </NavigationContainer>
  );
}
// const styles = StyleSheet.create({});
