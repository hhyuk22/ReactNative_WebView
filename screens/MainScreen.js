import { SafeAreaView, StyleSheet, Text, View, Platform } from 'react-native'
import React from 'react'
import { StatusBar } from 'expo-status-bar'
import WebviewCom from '../components/WebviewCom'
import BottomBar from '../components/BottomBar'
import { BannerAd, BannerAdSize, TestIds } from 'react-native-google-mobile-ads'

  /*const adUnitID = Platform.select({ //실제 광고를 넣을 때 사용하는 ID
    ios: "ca-app-pub-5798235299003555~7812543462", 
    android: "ca-app-pub-5798235299003555~7132218310", 
  });*/

const MainScreen = () => {

  return (
    <SafeAreaView style={styles.container}>
        <StatusBar
            backgroundColor="#ffffff"
            barStyle="dark-content"
        />
        <View style={{ flex: 1 }}>
          <BottomBar />
        </View>
        <View style={{ position: 'absolute', bottom: 70, width: '100%', alignItems: 'center' }}>
          <BannerAd
            unitId={TestIds.BANNER} //테스트 광고ID
            size={BannerAdSize.BANNER}
            requestOptions={{
              requestNonPersonalizedAdsOnly: true,
            }}
          />
        </View>
    </SafeAreaView>
  )
}

export default MainScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: Platform.OS === 'android' ? 30 : 0, //안드로이드면 20
        backgroundColor: '#ffffff', //SafeAreaView 배경색
    }
})