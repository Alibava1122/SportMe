import { useFonts } from "expo-font";
import { router } from "expo-router";
import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

const WalkThrough1 = () => {
  const [fontsLoaded] = useFonts({
    "Poppins-Bold": require("../../assets/fonts/Poppins-Bold.ttf"),
    "Poppins-ExtraBold": require("../../assets/fonts/Poppins-ExtraBold.ttf"),
    "Poppins-Light": require("../../assets/fonts/Poppins-Light.ttf"),
    "Poppins-Medium": require("../../assets/fonts/Poppins-Medium.ttf"),
    "Poppins-SemiBold": require("../../assets/fonts/Poppins-SemiBold.ttf"),
  });

  if (!fontsLoaded) {
    return null;
  }

  // SplashScreen.hideAsync();
  return (
    <View style={styles.mainContainer}>
      <View style={styles.container}>
        <Text style={styles.text}>Stay</Text>
        <Text style={styles.text}>Connected</Text>
        <Text style={styles.text}>with your</Text>
        <Text style={styles.text}>friends</Text>
        <Text style={styles.symbol}>- -</Text>
      </View>
      <View style={styles.container2}>
        <View style={styles.circlesConatiner}>
          <View style={styles.circle}></View>
          <View style={styles.circle}></View>
          <View style={styles.circle}></View>
          <View style={styles.circle}></View>
        </View>
        <View style={styles.skipConatiner}>
          <TouchableOpacity onPress={()=>{router.navigate("./walkThrough2")}}>
          <Text style={styles.skipText}>
            Skip
          </Text>
          </TouchableOpacity>
        </View>
     
      </View>
    </View>
  );
};

export default WalkThrough1;

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#3F72AF",
    paddingVertical:20
  },
  container: {
    padding: 25,
    width: "100%",
    height: "40%",
    justifyContent: "center",
    // backgroundColor:'red'
  },
  container2: {
    padding: 25,
    width: "100%",
    height: "50%",
   
  },
  text: {
    color: "white",
    fontSize: 50,
    // marginTop:-4,
    fontWeight: 800,
    fontFamily: "Poppins-SemiBold",
  },
  symbol: {
    fontSize: 20,
    color: "white",
  },
  circlesConatiner: {
    width: "100%",
    flexWrap: "wrap",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  
  },
  circle: {
    width: 150,
    height: 150,
    backgroundColor: "white",
    borderRadius: "50%",
  },
  skipConatiner:{
    width:'100%',
    alignItems:'center',
    justifyContent:'center',
    marginTop:40
  },
  skipText:{
    color:'white',
    fontSize:14,
    fontWeight: 600,
    fontFamily: "Poppins-SemiBold",
  }
 
});
