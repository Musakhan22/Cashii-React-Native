import React from 'react';
import {Image, Text, View, StyleSheet} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

// import styles from './styles/tabbarstyles';
import appColors from '../components/appcolors';
import DashboardScreen from '../screens/dashboardScreen';
import SendScreen from '../screens/Send/sendScreen';
import SettingsScreen from '../screens/Settings/settingsScreen';
// import Userslist from '../screens/Chat/userslist';

const Tab = createBottomTabNavigator();

export function Tabs() {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarShowLabel: false,
        tabBarStyle: styles.tabBar,
        headerShown: false,
      }}>
      <Tab.Screen
        name="Home"
        component={DashboardScreen}
        options={{
          tabBarIcon: ({focused}) => (
            <View style={styles.imgcontainer}>
              <Image
                source={require('../assets/images/home.png')}
                tintColor={focused ? appColors.maingreen : appColors.txtgrey}
              />
              <Text
                style={{
                  color: focused ? appColors.maingreen : appColors.txtgrey,
                  fontFamily: focused ? 'InterExtraBold' : 'InterRegular',
                }}>
                Home
              </Text>
              {focused && <View style={styles.tabBarLine} />}
            </View>
          ),
        }}
      />
      {/* <Tab.Screen
        name="Chat"
        component={Userslist}
        options={{
          tabBarIcon: ({focused}) => (
            <View style={styles.imgcontainer}>
              <Image
                source={require('../assets/images/messages-2.png')}
                tintColor={focused ? appColors.maingreen : appColors.txtgrey}
              />
              <Text
                style={{
                  color: focused ? appColors.maingreen : appColors.txtgrey,
                  fontFamily: focused ? 'InterExtraBold' : 'InterRegular',
                }}>
                Chat
              </Text>
              {focused && <View style={styles.tabBarLine} />}
            </View>
          ),
        }}
      /> */}
      <Tab.Screen
        name="Send"
        component={SendScreen}
        options={{
          tabBarIcon: ({focused}) => (
            <View style={styles.imgcontainer}>
              <Image
                source={require('../assets/images/wallet.png')}
                tintColor={focused ? appColors.maingreen : appColors.txtgrey}
              />
              <Text
                style={{
                  color: focused ? appColors.maingreen : appColors.txtgrey,
                  fontFamily: focused ? 'InterExtraBold' : 'InterRegular',
                }}>
                Send
              </Text>
              {focused && <View style={styles.tabBarLine} />}
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Settings"
        component={SettingsScreen}
        options={{
          tabBarIcon: ({focused}) => (
            <View style={styles.imgcontainer}>
              <Image
                source={require('../assets/images/setting.png')}
                tintColor={focused ? appColors.maingreen : appColors.txtgrey}
              />
              <Text
                style={{
                  color: focused ? appColors.maingreen : appColors.txtgrey,
                  fontFamily: focused ? 'InterExtraBold' : 'InterRegular',
                }}>
                Settings
              </Text>
              {focused && <View style={styles.tabBarLine} />}
            </View>
          ),
        }}
      />
    </Tab.Navigator>
  );
}
const styles = StyleSheet.create({
  tabBar: {
    height: hp('9%'),
    elevation: 0,
    borderRadius: 24,
    position: 'absolute',
    bottom: hp('2%'),
    left: wp('5%'),
    right: wp('5%'),
    backgroundColor: appColors.Btnblack,
    alignItems: 'center',
    shadowColor: appColors.txtgrey,
    shadowOffset: {
      width: 0,
      height: hp('1%'),
    },
  },
  imgcontainer: {
    alignItems: 'center',
  },
  imgcontainer1: {
    alignItems: 'center',
    bottom: hp('1%'),
  },
  mainclr: {
    tintColor: appColors.Btnblack,
  },
  greyclr: {
    tintColor: appColors.txtgrey,
  },
  tabBarLine: {
    height: hp('0.5%'), // Adjust the height as needed
    width: wp('10%'), // Adjust the width to fit the icon and text
    backgroundColor: appColors.maingreen,
    marginTop: 4,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
});
