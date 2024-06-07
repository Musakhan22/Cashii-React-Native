import { Alert, Image, Share, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';

import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import appColors from './appcolors';
import Clipboard from '@react-native-clipboard/clipboard';

const Itemscontainer = ({image,title,subtitle}) => {
  const onShare = async () => {
  try {
    const result = await Share.share({
      message: 'xxcss3434s98csmnx8s03mmx98',
      title: 'Your Wallet Address',
    });

    if (result.action === Share.sharedAction) {
      if (result.activityType) {
        // Shared with activity type of result.activityType
        console.log('Shared with activity type:', result.activityType);
      } else {
        // Shared
        console.log('Shared successfully');
      }
    } else if (result.action === Share.dismissedAction) {
      // Dismissed
      console.log('Share dismissed');
    }
  } catch (error) {
    console.error('Error sharing content:', error.message);
  }
};
const copyToClipboard = () => {
  //  const data = DATA.map(item => item.title);
  const dataString = 'xxcss3434s98csmnx8s03mmx98';
  if (typeof dataString === 'string') {
    Clipboard.setString(dataString);
    // console.log(dataString);
    // Alert.alert('Copied to Clipboard');
  } else {
    Alert.alert('Error', 'Failed to copy to clipboard');
  }
};
  return (
   <View style={styles.itemscontainer}>
        <View style={styles.imgcon}>
            <Image source={image} />
        </View>
        <View style={styles.headercon}>
            <View style={styles.topitemcon}>
        <Text style={styles.headertxt}>{title}</Text>
        <View style={{width: wp('23%'),height:hp('4%'),flexDirection:"row",alignItems:"center",justifyContent:"center",alignSelf:"center"}}>
            <TouchableOpacity style={{marginHorizontal:wp('3.7%')}} onPress={() => onShare()}>
        <Image source={require('../assets/images/share.png')} tintColor={'#292D32'}/>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => copyToClipboard()}>
        <Image source={require('../assets/images/copy.png')} tintColor={'#292D32'}/>
            </TouchableOpacity>
        </View>
        <Text style={styles.endtxt}>0.00</Text>
        </View>
        <View style={styles.bottomcon}>
       <Text style={styles.bottomtxt}>{subtitle}</Text>
       <Text style={styles.endtxt1}>≈0.00 USD</Text>
        </View>
        </View>
       </View>
  );
};

export default Itemscontainer;

const styles = StyleSheet.create({
    itemscontainer:{
    width: wp('90%'),
    // height:hp('8%'),
    // borderWidth:2,
    marginTop:hp('2%'),
    marginLeft:wp('2%'),
    flexDirection:'row',
    alignItems:'center',
  },
  imgcon:{
      height: hp('6%'),
    width: wp('14%'),
    backgroundColor:appColors.subgreycon,
    alignItems:'center',
    justifyContent:'center',
    borderRadius:31,
    marginLeft:wp('2%'),
  },
  headercon:{
    width: wp('78%'),
    // borderWidth:2,
  },
  topitemcon:{
    width: wp('77%'),
    height: hp('4%'),
    // borderWidth:2,
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'space-between',
    marginHorizontal:wp('1%'),
  },
  bottomcon:{
     width: wp('76%'),
    height: hp('3%'),
    // borderWidth:2,
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'space-between',
    marginHorizontal:wp('1%'),

  },
headertxt:{
    fontFamily:'PoppinsRegular',
    fontSize:20,
    color:appColors.Btnblack,
    textAlign:'center',
    // marginLeft:wp('1%'),
},
bottomtxt:{
     fontFamily:'PoppinsBold',
    fontSize:12,
    color:appColors.subtxt,
    // marginLeft:wp('1%'),
},
endtxt:{
    fontFamily:'PoppinsSemiBold',
    fontSize:20,
    color:appColors.subtxt,
    textAlign:'center',
    marginRight:wp('3%'),
},
endtxt1:{
    fontFamily:'PoppinsRegular',
    fontSize:12,
    color:appColors.subtxtgry,
    marginRight: wp('3%'),
},
});
