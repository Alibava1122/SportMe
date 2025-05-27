import React from 'react'
import { StyleSheet, Text, TouchableOpacity } from 'react-native'

const Buttons = ({Name, onPress}) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.buttonContainer}>
      <Text style={styles.text}>{Name}</Text>
    </TouchableOpacity>
  )
}

export default Buttons

const styles = StyleSheet.create({
    buttonContainer: {
      width: "100%",
      height: 60,
      backgroundColor: '#FD4E4E',
      borderRadius: 40,
      alignItems: 'center',
      justifyContent: 'center',
  
      // Strong iOS shadow
      shadowColor: '#fc0505',
      shadowOffset: { width: 0, height: 50 },
      shadowOpacity: 0.6,
      shadowRadius: 10,
  
      // Strong Android shadow
      elevation: 14,
    },
    text: {
      color: 'white'
    }
  });