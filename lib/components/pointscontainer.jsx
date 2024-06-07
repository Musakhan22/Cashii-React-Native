import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import Icon from 'react-native-vector-icons/Ionicons';

import appColors from './appcolors';
import Pointsbutton from './pointsbutton';
import Activitiescontainer from './activitiescontainer';
import { DATA } from '../data/dummydata';

const Pointscontainer = ({data}) => {
  const handleSelect = item => {
    console.log('Selected item:', item.text);
  };
  const points = DATA.map(item => ({
    title: item.text,
    points: item.value,
  }));
  return (
          <View>
          <View style={styles.middleItemcon}>
          <View style={styles.middleconItems}>
            <Text style={styles.title}>Total Points</Text>
            <Text style={styles.subtitle}>0</Text>
          </View>
          <View>
            <Text style={styles.title}>Today you earned</Text>
            <View style={styles.subtitlecon}>
              <Text style={styles.subtitle}>0</Text>
              <Icon
                name="chevron-up"
                size={30}
                color={appColors.txtblack}
                style={{alignItems: 'center', bottom: hp('1%')}}
              />
            </View>
          </View>
        </View>
        <View style={{marginLeft:wp('3.5%')}}>
        <Pointsbutton onPress={() => console.log('tapped')} />
        </View>
        <View style={styles.middlecon}>
          <Text style={styles.middletxt}>Activities</Text>
        </View>
        <View style={styles.bottomcon}>
         <Activitiescontainer data1={data} image={require('../assets/images/coin.png')} title={'Receive Reward'} icon={'chevron-down-sharp'} selecion={true} points={500}/>
        <Activitiescontainer  data1={data} image={require('../assets/images/Dark-1.png')} title={'Twitter Follow'} traling={'500'} selecion={false} />
        <Activitiescontainer data1={data} image={require('../assets/images/telegram.png')} title={'Telegram Follow'} traling={'500'} selecion={false} />
        <Activitiescontainer data1={data} image={require('../assets/images/coin-1.png')} title={'Daily Reward'} icon={'chevron-down-sharp'} selecion={true} points={200}/>
        <Activitiescontainer data1={data} image={require('../assets/images/coin-1.png')} title={'Welcome Bonus'} icon={'chevron-down-sharp'} selecion={true} points={1000}/>
        <Activitiescontainer data1={data} image={require('../assets/images/send-reward.png')} title={'Send Reward'} icon={'chevron-down-sharp'} selecion={true} points={500} />
        <Activitiescontainer data1={data} image={require('../assets/images/users.png')} title={'Invite Friend Reward'} icon={'chevron-down-sharp'} selecion={true} points={500} />
        </View>
    </View>

  );
};

export default Pointscontainer;

const styles = StyleSheet.create({
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
  middlecon:{
    marginLeft:wp('4%'),
    marginTop:hp('2%'),
  },
  middletxt:{
    fontFamily: 'ManropeBold',
    fontSize: 18,
    color: appColors.txtblack,
  },
  bottomcon:{
     width: wp('90%'),
    height:hp('94%'),
    marginTop:hp('2%'),
    marginLeft:wp('2%'),
    flexDirection:'column',
  },
});
