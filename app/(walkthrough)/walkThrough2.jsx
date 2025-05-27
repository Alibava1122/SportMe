import { router } from "expo-router";
import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import Buttons from "../../components/ui/Buttons";

const WalkThrough2 = () => {
  return (
    <View style={styles.mainContainer}>
      
      <View style={styles.container}>
     
     <View style={styles.scrollIcon}>
     <Image
          source={require("../../assets/images/Nav.png")}
          style={styles.image2}
        />
     </View>
    
        <Image
          source={require("../../assets/images/Phone.png")}
          style={styles.image}
        />
      </View>
      <View style={styles.container2}>
        <View>
          <Text style={styles.text}>Find friends all</Text>
          <Text style={styles.text}>Over the world</Text>
        </View>
        <View style={styles.subtextConatiner}>
          <Text style={styles.subText}>Lorem ipsum dolor sit amet, consec</Text>
          <Text style={styles.subText}>elite sed do eiusmod temporary</Text>
        </View>
        <View style={styles.buttonContainer}>
        <Buttons Name={'Get Started'}  onPress={()=>{router.navigate("./walkThrough3")}}/>
        </View>
      </View>
     
    </View>
  );
};

export default WalkThrough2;

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "white",
  },
  container: {
    padding: 25,
    width: "100%",
    height: "60%",
    justifyContent: "center",
    alignItems: "center",
  },
  container2: {
    height: "40%",
    padding: 25,
    width: "100%",
    alignItems: "center",
    // justifyContent:'center',
  },
  text: {
    color: "#171F24",
    fontSize: 35,
    fontWeight: 800,
    fontFamily: "Poppins-SemiBold",
  },
  image: {
    width: 400,
    height: 400,
    marginBottom: 20,
    marginTop: 40,
  },
  subtextConatiner:{
    width:'100%',
    justifyContent:'center',
    alignItems:'center',
    
  },
  subText:{
    color:'#778087',
    marginTop:6
  },
  buttonContainer:{
    width:'100%',
    marginTop:20,
    alignItems:'center',
    justifyContent:'center',
    padding:20
  },
  image2:{
    width: 50,
    height: 10,
    marginBottom: 20,
    marginTop: 40,

  },
  scrollIcon:{
    width:40,
    height:40
  }
});
