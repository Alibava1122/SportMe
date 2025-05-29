
import { useFonts } from 'expo-font';
import { Stack } from "expo-router";

import 'react-native-reanimated';

import { useState } from 'react';

export default function RootLayout() {
  const [islogin , setLogin ] = useState(false)
  
  const [loaded] = useFonts({
    SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf'),
  });

  if (!loaded) {
    // Async font loading only occurs in development.
    return null;
  }

  return (
   
 
       <>
       <Stack  screenOptions={{ headerShown: false }} />
       {/* <Stack.Screen name="(auth)"  /> */}
     </>
     
    
  );
}
