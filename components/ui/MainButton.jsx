import React from 'react'
import { StyleSheet, Text, TouchableOpacity } from 'react-native'

const MainButton = ({Name, onPress}) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.buttonContainer}>
      <Text style={styles.text}>{Name}</Text>
    </TouchableOpacity>
  )
}

export default MainButton

const styles = StyleSheet.create({
    buttonContainer: {
      width: "100%",
      height: 60,
      backgroundColor: '#FD4E4E',
      borderRadius: 20,
      alignItems: 'center',
      justifyContent: 'center',
  
    },
    text: {
        fontSize:16,
      color: 'white',
      fontWeight: 600,
      fontFamily: "Poppins-SemiBold",
    }
  });