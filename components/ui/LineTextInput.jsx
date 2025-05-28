import React from 'react'
import { StyleSheet, Text, TextInput, View } from 'react-native'

const LineTextInput = ({ name, value, onChangeText, onBlur, error, touched, ...rest }) => {
  return (
    <View>
    <TextInput
      placeholder={name}
      placeholderTextColor="#888"
      style={styles.input}
      value={value}
      onChangeText={onChangeText}
      onBlur={onBlur}
      {...rest}
    />
 
 {error && touched && (
      <Text style={styles.errorText}>{error}</Text>
    )}
  </View>
  )
}

export default LineTextInput

const styles = StyleSheet.create({
    input: {
        borderBottomWidth: 1,
        borderBottomColor: "#ccc",
        paddingVertical: 8,
        fontSize: 16,
        color: "#000",
      },
      errorText:{
        color:'red',
        marginTop:6
      }
})