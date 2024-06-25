import {
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {useNavigation} from '@react-navigation/native';
import {ScrollView} from 'react-native-gesture-handler';

import {DATA} from '../data/dummydata';
import appColors from '../components/appcolors';
import Pointscontainer from '../components/pointscontainer';
import CryptoContainer from '../components/cryptoContainer';

const DashboardScreen = () => {
  const [points, Setpoints] = useState(true);
  const navigation = useNavigation();
  const totalLength = DATA.reduce((acc, item) => {
    const pointsArray = item.data?.map(items => items.points) || [];
    return acc + pointsArray.length;
  }, 0);
  console.log('Total length:', totalLength);

  return (
    <SafeAreaView style={styles.main}>
      {/* <StatusBar
        barStyle="light-content" // Change text color on the status bar
        translucent={true} // Make the status bar translucent
        backgroundColor="transparent" // Set background color to transparent
      /> */}
      <View style={{height: hp('4%')}} />
      <View style={styles.topcontainer}>
        <View style={styles.textcon}>
          <Text style={styles.headertxt}>Total Balance (USD)</Text>
          <Text style={styles.subtitletxt}>$ 0.00</Text>
        </View>
      </View>
      <View style={[styles.body, {height: hp('68%')}]}>
        <View style={styles.headertextbody}>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <TouchableOpacity onPress={() => Setpoints(true)}>
              <Text
                style={[
                  points === true ? styles.headertext1 : styles.headertext2,
                ]}>
                Points
              </Text>
            </TouchableOpacity>
            <View style={{marginLeft: wp('2%')}} />
            <TouchableOpacity onPress={() => Setpoints(false)}>
              <Text
                style={[
                  points === false ? styles.headertext1 : styles.headertext2,
                ]}>
                Crypto
              </Text>
            </TouchableOpacity>
          </View>
          {points ? (
            <TouchableOpacity
              onPress={() => navigation.navigate('transactionhistoryscreen')}>
              <Text style={styles.headertext3}>See All</Text>
            </TouchableOpacity>
          ) : (
            <View />
          )}
        </View>
        {/* <View> */}
        <ScrollView nestedScrollEnabled={true}>
          {points === true ? (
            <Pointscontainer data={DATA} />
          ) : (
            <CryptoContainer />
          )}
        </ScrollView>
      </View>
      {/* </View> */}
    </SafeAreaView>
  );
};

export default DashboardScreen;

const styles = StyleSheet.create({
  main: {
    flex: 1,
    alignItems: 'center',
    color: appColors.manclrwhite,
  },
  topcontainer: {
    height: hp('17%'),
    width: wp('80%'),
    borderRadius: 16,
    backgroundColor: appColors.maingreen,
    marginTop: hp('3%'),
    alignItems: 'flex-start',
  },
  textcon: {
    marginTop: hp('3%'),
    marginLeft: wp('2%'),
  },
  headertxt: {
    fontSize: 12,
    fontFamily: 'PoppinsMedium',
    color: appColors.subtxt,
  },
  subtitletxt: {
    fontSize: 48,
    fontFamily: 'PoppinsSemiBold',
    color: appColors.subtxt,
  },
  body: {
    // borderWidth: 2,
    width: wp('100%'),
    // height: hp('80%'),
    marginTop: hp('2%'),
    borderTopLeftRadius: 48,
    borderTopRightRadius: 48,
    backgroundColor: appColors.maincolor,
    flexDirection: 'column',
    alignItems: 'center',
  },
  headertextbody: {
    width: wp('87%'),
    flexDirection: 'row',
    marginTop: hp('3%'),
    alignItems: 'center',
    justifyContent: 'space-between',
    // borderWidth: 2,
  },
  headertext1: {
    fontSize: 18,
    fontFamily: 'ManropeExtraBold',
    color: appColors.subtxt,
    marginHorizontal: wp('3%'),
  },
  headertext2: {
    fontSize: 12,
    fontFamily: 'ManropeExtraBold',
    color: appColors.subtxtgry,
  },
  headertext3: {
    fontSize: 10,
    fontFamily: 'PoppinsSemiBold',
    color: appColors.subtxt,
  },
  centercontainer: {
    width: wp('70%'),
    height: hp('6%'),
    marginTop: hp('4%'),
    flexDirection: 'row',
    borderRadius: 10,
    color: appColors.subgreycon,
  },
});
