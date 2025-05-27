import React from 'react'
import { StyleSheet, View } from 'react-native'
import WalkThrought1 from './walkThrough1'

const index = () => {
  return (
    <View style={styles.container}>
     <WalkThrought1/>
    </View>
  )
}

export default index

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        alignContent: "center",
        justifyContent: "center",
      },
})