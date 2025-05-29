import { Stack } from 'expo-router'
import React from 'react'
import { StyleSheet } from 'react-native'

const _layout = () => {
  return (
   <Stack>
    <Stack.Screen name='index'  options={{headerShown:false}}/>
      <Stack.Screen name='walkThrough1'  options={{headerShown:false}}/>
    <Stack.Screen name='walkThrough2'  options={{headerShown:false}}/>
    <Stack.Screen name='walkThrough3'  options={{headerShown:false}}/>
    <Stack.Screen name='loginscreen'  options={{headerShown:false}}/>
    <Stack.Screen name='signUpScreen'  options={{headerShown:false}}/>
    <Stack.Screen name='confirmCode'  options={{headerShown:false}}/>
    <Stack.Screen name='forgotPassword'  options={{headerShown:false}}/>
    <Stack.Screen name='resetPassword'  options={{headerShown:false}}/>
    <Stack.Screen name='selectSport'  options={{headerShown:false}}/>
    <Stack.Screen name='addSocialMedia'  options={{headerShown:false}}/>
    
   </Stack>
  )
}

export default _layout

const styles = StyleSheet.create({})