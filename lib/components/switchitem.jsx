import { Image, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

import appColors from './appcolors';

const Switchitem = ({image,text,toggle}) => {

  return (
        <View style={styles.itemsCon}>
          <View style={styles.imgcon}>
            <Image source={image} />
          </View>
          <Text style={styles.itemtxt}>{text}</Text>
          {toggle}
        </View>
  );
};

export default Switchitem;

const styles = StyleSheet.create({
     imgcon: {
    height: hp('5%'),
    width: wp('10%'),
    // borderWidth: 2,
    borderRadius: 30,
    backgroundColor: appColors.subgreycon,
    marginHorizontal: wp('4%'),
    alignItems: 'center',
    justifyContent: 'center',
  },
  itemsCon: {
    width: wp('75%'),
    // borderWidth: 2,
    marginLeft: wp('6%'),
    marginTop: hp('4%'),
    flexDirection: 'row',
    alignItems: 'center',
  },
  itemtxt: {
    fontSize: 14,
    fontFamily: 'PoppinsMedium',
    color: appColors.subtxt,
  },
});
