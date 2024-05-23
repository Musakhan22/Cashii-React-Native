/* eslint-disable prettier/prettier */
import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import colors from '../components/colors';

const Tab = createBottomTabNavigator();

export function Tabs() {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarShowLabel: false,
        tabBarStyle: styles.tabBar,
        headerShown: false,
      }}>
      {/* <Tab.Screen
        name="Home"
        component={DashBoardScreen}
        options={{
          tabBarIcon: ({focused}) => (
            <View style={styles.imgcontainer}>
              <Image
                source={require('../assets/icons/icon.png')}
                resizeMode="contain"
                style={{
                  tintColor: focused ? colors.mainclr : colors.greyclr,
                }}
              />
              <Text
                style={{
                  color: focused ? colors.textclrmain : colors.greyclr,
                  fontFamily: focused ? 'InterExtraBold' : 'InterRegular',
                }}>
                Home
              </Text>
            </View>
          ),
        }}
      /> */}
    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({
  tabBar: {
    height: hp('10%'),
    elevation: 0,
    // borderRadius: 20,
    position: 'absolute',
    // bottom: 25,
    // left: 20,
    // right: 20,
    backgroundColor: colors.backroundclr,
    alignItems: 'center',
    shadowColor: colors.shadowclr,
    shadowOffset: {
      width: 0,
      height: hp('1%'),
    },
  },
  imgcontainer: {
    alignItems: 'center',
    // justifyContent: 'center',
    // top: hp('1%'),
  },
  imgcontainer1: {
    alignItems: 'center',
    // justifyContent: 'center',
    bottom: hp('1%'),
  },
  mainclr: {
    tintColor: colors.textclrmain,
  },
  greyclr: {
    tintColor: colors.greyclr,
  },
});
