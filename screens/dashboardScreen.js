import {SafeAreaView, ScrollView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

import Icon from 'react-native-vector-icons/Ionicons';

import appColors from '../components/appcolors';
import Pointsbutton from '../components/pointsButton';
import {FlatList} from 'react-native-gesture-handler';

const DashboardScreen = () => {
  const DATA = [
    {
      id: '0 ',
      icon: '../assets/images/coin.png',
      title: 'Recieve Reward',
      subtitle: 'Feb 8',
    },
    {
      id: '1 ',
      icon: '../assets/images/x.png',
      title: 'Twitter Follow',
      subtitle: 'Feb 8',
    },
    {
      id: '2 ',
      icon: '../assets/images/telegram.png',
      title: 'Telegram Follow',
      subtitle: 'Feb 8',
    },
    {
      id: '3 ',
      icon: '../assets/images/coin-1.png',
      title: 'Daily Reward',
      subtitle: 'Feb 8',
    },
    {
      id: '4 ',
      icon: '../assets/images/coin-1.png',
      title: 'Welcome Bonus',
      subtitle: 'Feb 8',
    },
    {
      id: '5 ',
      icon: '../assets/images/send-reward.png',
      title: 'Send Reward',
      subtitle: 'Feb 8',
    },
    {
      id: '6 ',
      icon: '../assets/images/users.png',
      title: 'Invite friend Reward',
      subtitle: 'Feb 8',
    },
  ];
  const renderItem = ({item}) => <View style={styles.listItemscon}></View>;
  return (
    <SafeAreaView style={styles.main}>
      <View style={styles.topcontainer}>
        <View style={styles.textcon}>
          <Text style={styles.headertxt}>Total Balance (USD)</Text>
          <Text style={styles.subtitletxt}>$ 0.00</Text>
        </View>
      </View>

      <View style={styles.body}>
        <View style={styles.headertextbody}>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <Text style={styles.headertext1}>Points</Text>
            <Text style={styles.headertext2}>Crypto</Text>
          </View>
          <Text style={styles.headertext3}>See All</Text>
        </View>
        <View style={styles.middleItemcon}>
          <View style={styles.middleconItems}>
            <Text style={styles.title}>Total Points</Text>
            <Text style={styles.subtitle}>1160</Text>
          </View>
          <View>
            <Text style={styles.title}>Today you earned</Text>
            <View style={styles.subtitlecon}>
              <Text style={styles.subtitle}>3500</Text>
              <Icon
                name="chevron-up"
                size={30}
                color={appColors.txtblack}
                style={{alignItems: 'center', bottom: hp('1%')}}
              />
            </View>
          </View>
        </View>
        <Pointsbutton onPress={() => console.log('tapped')} />
        <View style={styles.listItemcon}>
          <FlatList
            data={DATA}
            renderItem={renderItem}
            keyExtractor={(item, index) => index.toString()}
            contentContainerStyle={{flexGrow: 0, alignItems: 'center'}}
          />
        </View>
      </View>
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
    height: hp('80%'),
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
  middleItemcon: {
    width: wp('86%'),
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginLeft: wp('4%'),
    marginTop: hp('2%'),
  },
  title: {
    fontFamily: 'PoppinsMedium',
    fontSize: 12,
    color: appColors.subtxtgry,
  },
  subtitle: {
    fontFamily: 'PoppinsSemiBold',
    fontSize: 48,
    color: appColors.txtblack,
  },
  subtitlecon: {
    flexDirection: 'row',
    width: wp('40%'),
    alignItems: 'center',
  },
  listItemcon: {
    height: hp('35%'),
    width: wp('80%'),
    borderWidth: 2,
    marginTop: hp('2%'),
  },
});
