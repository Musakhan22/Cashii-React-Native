import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import Icon from 'react-native-vector-icons/Ionicons';


import appColors from './appcolors';

const Customiconbutton = ({onPress}) => {
  return (
            <TouchableOpacity style={styles.iconcontainer} onPress={onPress}>
              <Icon name={'copy'} size={17} color={appColors.maincolor} />
            </TouchableOpacity>

  );
};

export default Customiconbutton;

const styles = StyleSheet.create({
  iconcontainer:{
    height: hp('3.4%'),
    width: wp('7%'),
    borderRadius:30,
    backgroundColor:appColors.Btnblack,
    marginHorizontal:hp('1%'),
    alignItems:'center',
    justifyContent:'center',
  },
});
