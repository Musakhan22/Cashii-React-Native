import { StyleSheet, Text, View,FlatList } from 'react-native';
import React from 'react';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

import appColors from '../components/appcolors';

const Griditems = ({data}) => {

const renderItem = ({item}) => {
  return (
    <View style={{flexDirection: 'row', marginHorizontal: wp('2%')}}>
      <View style={styles.itemcontainer}>
        <Text style={styles.itemtext}>{item.id}</Text>
        <Text style={styles.itemtext}>{item.title}</Text>
      </View>
    </View>
  );
};
  return (
    <FlatList data={data}
    renderItem={renderItem}
    style={styles.liststyle}
    numColumns={2}
    keyExtractor={item => item.id}
  />
  );
};

export default Griditems;

const styles = StyleSheet.create({
    itemcontainer: {
    height: hp('6%'),
    width: wp('44%'),
    backgroundColor: appColors.Btnblack,
    borderRadius: 16,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection:'row',
    marginVertical: hp('1%'),
  },
  liststyle:{
    flexDirection:'row',
    marginHorizontal: wp('1%'),
    minHeight:hp('40%'),
    flexGrow:0,
    // borderWidth:2,
  },
  itemtext:{
    fontFamily:'PoppinsMedium',
    color:appColors.maincolor,
    fontSize:16,
  },
});
