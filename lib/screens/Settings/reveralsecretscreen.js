import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {ScrollView} from 'react-native-gesture-handler';
import {useNavigation} from '@react-navigation/native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

import appColors from '../../components/appcolors';
import Backbutton from '../../components/backbutton';
import Textinput from '../../components/textinput';

const Reveralsecretscreen = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.main}>
      <ScrollView>
        <View style={styles.backbuttoncon}>
          <Backbutton onPress={() => navigation.goBack()} />
          <Text style={styles.buttontxt}>Send Payment</Text>
        </View>
        <View style={styles.headercon}>
          <Text style={styles.headertext}>Enter</Text>
          <Text style={styles.headertext}>Passcode</Text>
        </View>
        <View style={styles.subtitlecon}>
          <Text style={styles.subtitletext}>
            Make sure no one is looking at your screen.
          </Text>
        </View>
        <View style={{marginLeft: wp('5%'), marginTop: hp('4%')}}>
          <Textinput navigate={'revealphrase'} />
        </View>
      </ScrollView>
    </View>
  );
};

export default Reveralsecretscreen;

const styles = StyleSheet.create({
  main: {
    flex: 1,
    alignItems: 'flex-start',
    color: appColors.manclrwhite,
  },
  backbuttoncon: {
    width: wp('75%'),
    marginTop: hp('4%'),
    marginLeft: wp('7%'),
    flexDirection: 'row',
    alignItems: 'center',
  },
  buttontxt: {
    marginLeft: wp('2%'),
    fontSize: 18,
    fontFamily: 'PoppinsMedium',
    color: appColors.txtblack,
  },
  headercon: {
    alignItems: 'center',
    flexDirection: 'column',
    marginTop: hp('7%'),
    marginLeft: wp('15%'),
    width: wp('70%'),
  },
  headertext: {
    fontSize: 48,
    fontFamily: 'ManropeExtraBold',
    color: appColors.txtblack,
  },
  subtitlecon: {
    alignItems: 'center',
    flexDirection: 'column',
    marginTop: hp('1%'),
    marginLeft: wp('9%'),
  },
  subtitletext: {
    fontFamily: 'PoppinsRegular',
    fontSize: 16,
    color: appColors.subtxt,
  },
});
