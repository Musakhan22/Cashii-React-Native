import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

const Custombutton = ({text, onpress, color, textclr}) => {
  return (
    <TouchableOpacity
      onPress={onpress}
      style={[styles.buttoncontainer, {backgroundColor: color}]}>
      <Text style={[styles.buttontext, {color: textclr}]}>{text}</Text>
    </TouchableOpacity>
  );
};

export default Custombutton;

const styles = StyleSheet.create({
  buttoncontainer: {
    height: hp('6%'),
    width: wp('85%'),
    // backgroundColor: appColors.Btnblack,
    borderRadius: 16,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttontext: {
    fontSize: 18,
    fontFamily: 'ManropeExtraBold',
  },
});
