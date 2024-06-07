import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

import Icon from 'react-native-vector-icons/Ionicons';
import appColors from './appcolors';
import {TouchableOpacity} from 'react-native-gesture-handler';

const Backbutton = ({icon, onPress}) => {
  return (
    <TouchableOpacity style={styles.addcontainer} onPress={onPress}>
      <Icon name={'chevron-back'} size={17} color={appColors.Btnblack} />
    </TouchableOpacity>
  );
};

export default Backbutton;

const styles = StyleSheet.create({
  addcontainer: {
    height: hp('2.8%'),
    width: wp('6%'),
    borderRadius: 25,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 2,
  },
});
