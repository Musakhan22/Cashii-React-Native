import { Image, StyleSheet,  Text,  View } from 'react-native';
import React from 'react';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

import appColors from './appcolors';

const Warningtext = () => {
  return (
    <View style={styles.main}>
      <View style={styles.iconCon}>
        <Image source={require('../assets/images/hazard.png')} />
      </View>
      <Text style={styles.footertext}>Never share your secret phrase with anyone else.</Text>
    </View>
  );
};

export default Warningtext;

const styles = StyleSheet.create({
    main:{
        flexDirection:'row',
        alignItems:'center',
    },
    iconCon:{
         height: hp('3.5%'),
    width: wp('7.4%'),
    borderRadius:30,
    backgroundColor:appColors.Btnblack,
    alignItems:'center',
    justifyContent:'center',
    marginHorizontal:wp('1%'),
    },
    footertext:{
        alignItems:'center',
        textAlign:'center',
        fontSize:12,
        fontFamily:'PoppinsMedium',
        color:appColors.subtxt,
        marginLeft:wp('1%'),
    },
});
