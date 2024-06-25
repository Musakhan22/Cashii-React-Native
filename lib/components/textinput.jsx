import {Alert, Platform, SafeAreaView, StyleSheet, Text, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import {useNavigation} from '@react-navigation/native';

import {
  CodeField,
  Cursor,
  useBlurOnFulfill,
  useClearByFocusCell,
} from 'react-native-confirmation-code-field';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import appColors from './appcolors';
import { retrieveData, storeData } from '../Storage/asyncstorage';
import AsyncStorage from '@react-native-async-storage/async-storage';

const CELL_COUNT = 5;

const Textinput = ({navigate,enteredpassword}) => {
  const [value, setValue] = useState('');
  const [inputPassword, setInputPassword] = useState('');
  const [savedPassword, setSavedPassword] = useState(null);
  const ref = useBlurOnFulfill({value, cellCount: CELL_COUNT});
  const [props, getCellOnLayoutHandler] = useClearByFocusCell({
    value,
    setValue,
  });
  const navigation = useNavigation();


  useEffect(() => {
    // const checkAndStorePassword = async () => {
    //   if (value.length === CELL_COUNT) {
    //     console.log(value);
    //     const existingPassword = await AsyncStorage.getItem('password');
    //     const savedPassword = await retrieveData('password');
    //     if (!existingPassword) {
    //       console.log('saved');
    //       await storeData('password', value);
    //     }else if(enteredpassword && enteredpassword === savedPassword){
    //       console.log('passwords match');
    //       navigation.navigate(navigate, { password: value });
    //     }else{
    //       console.log('Exists');
    //       navigation.navigate(navigate, { password: value });
    //       setValue('');
    //     }
    //   }
    // };
     const fetchPassword = async () => {
      const password = await retrieveData('password');
      setSavedPassword(password);
    };

    fetchPassword();
  }, [enteredpassword, navigate, navigation]);

  const handlePasswordInput = async (password) => {
    setInputPassword(password);

    if (password.length === 5) { // Assuming a 6-digit passcode
      if (!savedPassword) {
        console.log('Saving password...');
        await storeData('password', password);
        Alert.alert('Success', 'Password saved successfully');
        navigation.navigate(navigate, { password });
      } else if (password === savedPassword) {
        console.log('Passwords match');
        navigation.navigate(navigate, { password });
      } else {
        Alert.alert('Error', 'Password does not match the saved password');
        setInputPassword('');
      }
    }
  };

  return (
    <SafeAreaView style={styles.root}>
      <CodeField
        ref={ref}
        value={inputPassword}
        {...props}
        onChangeText={handlePasswordInput}
        cellCount={CELL_COUNT}
        rootStyle={styles.codeFieldRoot}
        keyboardType="number-pad"
        textContentType="oneTimeCode"
        textInputStyle={styles.inputext}
        autoComplete={Platform.select({
          android: 'sms-otp',
          default: 'one-time-code',
        })}
        testID="my-code-input"
        renderCell={({index, symbol, isFocused}) => (
          <View
            key={index}
            style={[isFocused === true ? styles.focusCell : styles.cell]}
            onLayout={getCellOnLayoutHandler(index)}>
            <Text style={[isFocused ? styles.focustext : styles.cellText]}>
              {symbol ? '*' : isFocused ? <Cursor /> : '_'}
              {/* {symbol || (isFocused ? <Cursor /> : null)} */}
            </Text>
          </View>
        )}
      />
    </SafeAreaView>
  );
};

export default Textinput;

const styles = StyleSheet.create({
  root: {
    flex: 1,
    marginTop: hp('5%'),
  },
  title: {textAlign: 'center', fontSize: 30},
  codeFieldRoot: {marginTop: 20},
  cell: {
    width: wp('16%'),
    height: hp('9%'),
    fontSize: 24,
    borderRadius: 16,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: appColors.Btnblack,
    marginHorizontal: wp('1%'),
  },
  focusCell: {
    alignItems: 'center',
    justifyContent: 'center',
    textAlign:'center',
    width: wp('16%'),
    height: hp('9%'),
    fontSize: 24,
    borderRadius: 16,
    backgroundColor: appColors.Btnblack,
    marginHorizontal: wp('1%'),
  },
  focustext: {
    alignItems: 'center',
    justifyContent: 'center',
        textAlign:'center',
    color: appColors.maincolor,
    fontSize: 18,
    fontFamily: 'PoppinsMedium',
  },
  cellText: {
    color: appColors.maincolor,
    fontSize: 18,
    fontFamily: 'PoppinsMedium',
  },
  inputext:{
    textAlign:'center',
  },
});
