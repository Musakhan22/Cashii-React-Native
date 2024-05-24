import {Platform, SafeAreaView, StyleSheet, Text, View} from 'react-native';
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

const CELL_COUNT = 5;

const Textinput = () => {
  const [value, setValue] = useState('');
  const ref = useBlurOnFulfill({value, cellCount: CELL_COUNT});
  const [props, getCellOnLayoutHandler] = useClearByFocusCell({
    value,
    setValue,
  });
  const navigation = useNavigation();

  useEffect(() => {
    if (value.length === CELL_COUNT) {
      console.log(value);
      navigation.navigate('secretPhrase');
      setValue('');
    }
  }, [navigation, value]);

  return (
    <SafeAreaView style={styles.root}>
      <CodeField
        ref={ref}
        value={value}
        {...props}
        onChangeText={setValue}
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
            <Text style={isFocused ? styles.focustext : styles.cellText}>
              {symbol ? '*' : isFocused ? <Cursor /> : '-'}
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
    justifyContent: 'flex-end',
    backgroundColor: appColors.Btnblack,
    marginHorizontal: wp('1%'),
  },
  focusCell: {
    alignItems: 'center',
    justifyContent: 'flex-end',
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
    color: appColors.maincolor,
    fontSize: 18,
    fontFamily: 'PoppinsMedium',
  },
  cellText: {
    color: appColors.maincolor,
    fontSize: 18,
    fontFamily: 'PoppinsMedium',
  },
});
