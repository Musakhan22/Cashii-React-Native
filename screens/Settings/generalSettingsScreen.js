import {StyleSheet, Text, View, Switch, Image} from 'react-native';
import React, {useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

import appColors from '../../components/appcolors';
import Backbutton from '../../components/backbutton';

const GeneralSettings = () => {
  const navigation = useNavigation();
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);

  return (
    <View style={styles.main}>
      <View style={styles.backbuttoncon}>
        <Backbutton onPress={() => navigation.goBack()} />
        <Text style={styles.buttontxt}>General Settings</Text>
      </View>
      <View style={styles.ListCon}>
        <View style={styles.itemsCon}>
          <View style={styles.imgcon}>
            <Image source={require('../../assets/images/notification.png')} />
          </View>
          <Text style={styles.itemtxt}>Allow Notifications</Text>
          <Switch
            trackColor={{
              false: appColors.maincolor,
              true: appColors.maincolor,
            }}
            thumbColor={isEnabled ? appColors.maincolor : appColors.Btnblack}
            onValueChange={toggleSwitch}
            value={isEnabled}
            style={{marginLeft: wp('24%')}}
          />
        </View>
      </View>
    </View>
  );
};

export default GeneralSettings;

const styles = StyleSheet.create({
  main: {
    flex: 1,
    alignItems: 'center',
    color: appColors.manclrwhite,
  },
  backbuttoncon: {
    width: wp('75%'),
    marginTop: hp('4%'),
    flexDirection: 'row',
    marginRight: wp('12%'),
    alignItems: 'center',
  },
  buttontxt: {
    marginLeft: wp('2%'),
    fontSize: 18,
    fontFamily: 'PoppinsMedium',
    color: appColors.txtblack,
  },
  ListCon: {
    height: hp('90%'),
    width: wp('98%'),
    // borderWidth: 2,
    marginTop: hp('2%'),
    flexDirection: 'column',
    alignItems: 'flex-start',
  },
  imgcon: {
    height: hp('5%'),
    width: wp('10%'),
    // borderWidth: 2,
    borderRadius: 30,
    backgroundColor: appColors.subgreycon,
    marginHorizontal: wp('4%'),
    alignItems: 'center',
    justifyContent: 'center',
  },
  itemsCon: {
    width: wp('75%'),
    // borderWidth: 2,
    marginLeft: wp('6%'),
    marginTop: hp('4%'),
    flexDirection: 'row',
    alignItems: 'center',
  },
  itemtxt: {
    fontSize: 14,
    fontFamily: 'PoppinsMedium',
    color: appColors.subtxt,
  },
});
