import {
  StyleSheet,
  Text,
  View,
  Switch,
  Image,
  SafeAreaView,
} from 'react-native';
import React, {useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

import appColors from '../../components/appcolors';
import Backbutton from '../../components/backbutton';
import Switchitem from '../../components/switchitem';

const GeneralSettingsSereen = () => {
  const navigation = useNavigation();
  const [isNotificationEnabled, setIsNotificationEnabled] = useState(false);
  const [isEmailEnabled, setIsEmailEnabled] = useState(false);
  const [isPushEnabled, setIsPushEnabled] = useState(false);
  const toggleNotificationSwitch = () =>
    setIsNotificationEnabled(previousState => !previousState);
  const toggleEmailSwitch = () =>
    setIsEmailEnabled(previousState => !previousState);
  const togglePushSwitch = () =>
    setIsPushEnabled(previousState => !previousState);

  return (
    <SafeAreaView style={styles.main}>
      <View style={{height: hp('4%')}} />
      <View style={styles.backbuttoncon}>
        <Backbutton onPress={() => navigation.goBack()} />
        <Text style={styles.buttontxt}>General Settings</Text>
      </View>
      <View style={styles.itemListCon}>
        <Switchitem
          image={require('../../assets/images/notification.png')}
          text={'Allow Notifications'}
          toggle={
            <Switch
              trackColor={{
                false: appColors.maincolor,
                true: appColors.maincolor,
              }}
              thumbColor={
                isEmailEnabled ? appColors.Btnblack : appColors.subtxtgry
              }
              onValueChange={toggleEmailSwitch}
              value={isEmailEnabled}
              style={{marginLeft: wp('24%')}}
            />
          }
        />
        <Switchitem
          image={require('../../assets/images/sms.png')}
          text={'Email Notifications'}
          toggle={
            <Switch
              trackColor={{
                false: appColors.maincolor,
                true: appColors.maincolor,
              }}
              thumbColor={
                isNotificationEnabled ? appColors.Btnblack : appColors.subtxtgry
              }
              onValueChange={toggleNotificationSwitch}
              value={isNotificationEnabled}
              style={{marginLeft: wp('24%')}}
            />
          }
        />
        <Switchitem
          image={require('../../assets/images/box.png')}
          text={'Push Notifications'}
          toggle={
            <Switch
              trackColor={{
                false: appColors.maincolor,
                true: appColors.maincolor,
              }}
              thumbColor={
                isPushEnabled ? appColors.Btnblack : appColors.subtxtgry
              }
              onValueChange={togglePushSwitch}
              value={isPushEnabled}
              style={{marginLeft: wp('24%')}}
            />
          }
        />
      </View>
    </SafeAreaView>
  );
};

export default GeneralSettingsSereen;

const styles = StyleSheet.create({
  main: {
    flex: 1,
    alignItems: 'center',
    color: appColors.manclrwhite,
  },
  backbuttoncon: {
    width: wp('85%'),
    marginTop: hp('4%'),
    flexDirection: 'row',
    marginLeft: wp('10%'),
    alignItems: 'center',
    // borderWidth: 2,
  },
  buttontxt: {
    marginLeft: wp('2%'),
    fontSize: 18,
    fontFamily: 'PoppinsMedium',
    color: appColors.txtblack,
  },
  itemListCon: {
    height: hp('90%'),
    width: wp('98%'),
    // borderWidth: 2,
    marginTop: hp('2%'),
    flexDirection: 'column',
    alignItems: 'flex-start',
  },
});
