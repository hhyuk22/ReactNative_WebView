import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import WebView from 'react-native-webview'

const WebviewPort = () => {
  return (
    <View style={styles.container}>
        <WebView
            source={{ uri: 'https://artistic-form-8f2.notion.site/MVP-70315f941a6a4c5f8d75f9f0b3e5f755' }}
            style={{ flex: 1 }}
        />
    </View>
  )
}

export default WebviewPort

const styles = StyleSheet.create({
    container: {
        flex: 1,
      },
})