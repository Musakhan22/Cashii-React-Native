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
import { ScrollView } from 'react-native-gesture-handler';

const Pointscontainer = ({data}) => {
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
         <Activitiescontainer data={data} image={require('../assets/images/coin.png')} title={'Receive Reward'} icon={'chevron-down-sharp'} selecion={true} points={500}/>
        <Activitiescontainer data={data} image={require('../assets/images/Dark-1.png')} title={'Twitter Follow'} traling={'500'} selecion={false} />
        <Activitiescontainer image={require('../assets/images/telegram.png')} title={'Telegram Follow'} traling={'500'} selecion={false} />
        <Activitiescontainer image={require('../assets/images/coin-1.png')} title={'Daily Reward'} icon={'chevron-down-sharp'} selecion={true} points={200}/>
        <Activitiescontainer image={require('../assets/images/coin-1.png')} title={'Welcome Bonus'} icon={'chevron-down-sharp'} selecion={true} points={1000}/>
        <Activitiescontainer image={require('../assets/images/send-reward.png')} title={'Send Reward'} icon={'chevron-down-sharp'} selecion={true} points={500} />
        <Activitiescontainer image={require('../assets/images/users.png')} title={'Invite Friend Reward'} icon={'chevron-down-sharp'} selecion={true} points={500} />
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
