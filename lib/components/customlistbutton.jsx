import { Image, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { TouchableOpacity } from 'react-native-gesture-handler';

import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import appColors from './appcolors';


const Customlistbutton = ({text,image,onPress}) => {
  return (
   <TouchableOpacity style={styles.Itemscon} onPress={onPress}>
    <View style={{marginLeft:wp('2%')}} />
          <Image
            style={{marginHorizontal: wp('3%')}}
            source={image}
          />
          <Text style={styles.itemtxt}>{text}</Text>
        </TouchableOpacity>
  );
};

export default Customlistbutton;

const styles = StyleSheet.create({
    Itemscon: {
    width: wp('85'),
    height: hp('7%'),
    marginTop: hp('2%'),
    marginLeft: wp('6%'),
    borderRadius: 16,
    backgroundColor: appColors.maincolor,
    flexDirection: 'row',
    alignItems: 'center',
    shadowColor: appColors.Btnblack,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 4.65,
    elevation: 2,
  },
  itemtxt: {
    fontSize: 14,
    fontFamily: 'PoppinsMedium',
    color: appColors.subtxt,
    textAlign: 'center',
  },
});
