import { StyleSheet, Text, View,FlatList } from 'react-native';
import React from 'react';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

import appColors from '../components/appcolors';

const Griditems = () => {
    const DATA = [
  {
    id: '1. ',
    title: 'mean',
  },
  {
    id: '2. ',
    title: 'moral',
  },
  {
    id: '3. ',
    title: 'corals',
  },
  {
    id: '4. ',
    title: 'Champion',
  },
  {
    id: '5. ',
    title: 'busy',
  },
  {
    id: '6. ',
    title: 'measure',
  },
  {
    id: '7. ',
    title: 'veteran',
  },
  {
    id: '8. ',
    title: 'rice',
  },
  {
    id: '9. ',
    title: 'decorate',
  },
  {
    id: '10. ',
    title: 'trash',
  },
  {
    id: '11. ',
    title: 'design',
  },
  {
    id: '12. ',
    title: 'brass',
  },
];

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
    <FlatList data={DATA}
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
