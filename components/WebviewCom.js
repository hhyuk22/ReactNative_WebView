import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import WebView from 'react-native-webview'

const WebviewCom = () => {
  return (
    <View style={styles.container}>
        <WebView
            source={{ uri: 'https://github.com/hhyuk22' }}
            style={{ flex: 1 }}
        />
    </View>
  )
}

export default WebviewCom

const styles = StyleSheet.create({
    container: {
        flex: 1,
      },
})