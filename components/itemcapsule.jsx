import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

import appColors from '../components/appcolors';
import { TouchableOpacity } from 'react-native-gesture-handler';

const Itemcapsule = ({data, onPress}) => {
  return (
    <TouchableOpacity style={styles.main} onPress={onPress}>
      <Text style={styles.text}>{data}</Text>
    </TouchableOpacity>
  );
};

export default Itemcapsule;

const styles = StyleSheet.create({
    main:{
        height:hp('3%'),
        width: wp('20%'),
        backgroundColor:appColors.maincolor,
        borderRadius:12,
        alignItems:'center',
        justifyContent:'center',
    },
    text:{
    fontFamily:'PoppinsMedium',
    color:appColors.Btnblack,
    fontSize:14,
    },
});
