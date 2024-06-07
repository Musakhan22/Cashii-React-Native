import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

import appColors from './appcolors';

const Transactionmodel = () => {
  return (
    <View style={styles.modalContainer}>
    <View style={styles.itemcontainer}>
      <View style={styles.item}>
        <Text style={styles.itemtxt}>TimeStamp:</Text>
      </View>
      <View style={styles.item}>
      <Text style={styles.itemtxt}>From:</Text>
      </View>
      <View style={styles.item}>
      <Text style={styles.itemtxt}>To:</Text>
      </View>
      <View style={styles.item}>
      <Text style={styles.itemtxt}>Value:</Text>
      </View>
    </View>
    </View>
  );
};

export default Transactionmodel;

const styles = StyleSheet.create({
   modalContainer: {
    backgroundColor: appColors.maincolor,
    alignItems: 'center',
    borderRadius: 24,
    height: hp('20%'),
    width: wp('88%'),
    position: 'absolute',
    top: hp('28%'),
    left: wp('2%'),
  },
  itemcontainer:{
    marginLeft:wp('3%'),
    marginTop:hp('2%'),
    marginVertical:hp('6%'),
    // borderWidth:2,
    width:wp('76%'),
  },
  item:{
     width:wp('70%'),
     height:hp('4%'),
    //  borderWidth:2,
  },
itemtxt:{
   fontFamily:'PoppinsMedium',
    color: appColors.subtxt,
    fontSize:16,
},
});
