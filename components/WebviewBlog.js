import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import WebView from 'react-native-webview'

const WebviewBlog = () => {
  return (
    <View style={styles.container}>
        <WebView
            source={{ uri: 'https://velog.io/@hhyuk22/posts' }}
            style={{ flex: 1 }}
        />
    </View>
  )
}

export default WebviewBlog

const styles = StyleSheet.create({
    container: {
        flex: 1,
      },
})