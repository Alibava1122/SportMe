import React from 'react'
import { StyleSheet, View } from 'react-native'
import Loginscreen from './loginscreen'

const index = () => {
  return (
    <View style={styles.container}>
      <Loginscreen/>
    </View>
  )
}

export default index

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
      },
})