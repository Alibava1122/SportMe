import { Ionicons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import { router } from "expo-router";
import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import DarkTextInput from "../../components/ui/DarkTextInput";
import MainButton from "../../components/ui/MainButton";

const ResetPassword = () => {
  return (
    <>
      <View style={styles.mainContainer}>
        <TouchableOpacity onPress={() => router.back()} style={styles.backIcon}>
          <Ionicons name="chevron-back" size={25} color="#AAB2B7" />
        </TouchableOpacity>

        <View style={styles.topLeftCircle} />
        <View style={styles.bottomRightCircle} />

        <View style={styles.textContainer}>
          <Text style={styles.verifyText}>Reset Password</Text>
          
          {/* <Text style={styles.stepText}>Step 2 of 5 </Text> */}
        </View>
        <LinearGradient
          colors={["#FC6767", "#EC008C"]}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 0 }}
          style={styles.gradientLine}
        />
        <View style={styles.boldTextContainer}>
        
          <Text style={styles.boldText}>Create a New Password</Text>

        </View>
        <View style={styles.lightTextContainer}>
       
          <Text style={styles.lightText}>Your new password must be different</Text>
          <Text style={styles.lightText}>from the previous one used</Text>
          
        </View>
        <View>
          <Text style={styles.phoneNoText}>
           Enter your new password
          </Text>
          <DarkTextInput placeholder={"password"} />
        </View>
        <View>
          <Text style={styles.phoneNoText}>
            Confirm new password
          </Text>
          <DarkTextInput placeholder={"confirm password"} />
        </View>
        <MainButton Name={"Update"} />
      </View>
    </>
  );
};

export default ResetPassword;

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: "#FFFFFF",
    // alignItems: "center",
    justifyContent: "center",
    padding: 20,
    gap: 20,
    paddingVertical: 60,
  },
  topLeftCircle: {
    width: 160,
    height: 160,
    backgroundColor: "#F9F7F7",
    borderRadius: 80,
    position: "absolute",
    top: -40,
    right: -40,
  },
  bottomRightCircle: {
    width: 160,
    height: 160,
    backgroundColor: "#F9F7F7",
    borderRadius: 80,
    position: "absolute",
    bottom: -40,
    left: -40,
  },

  textContainer: {
    justifyContent: "center",
  },
  verifyText: {
    fontSize: 20,
    fontWeight: 500,
    fontFamily: "Poppins-Medium",
  },

  backIcon: {
    width: "100%",
    position: "absolute",
    top: 60,
    right: 23,
  },
  stepText: {
    fontSize: 13,
    color: "#808080",
  },
  gradientLine: {
    width: "100%",
    height: 5,
    borderRadius: 3,

    // Shadow for iOS
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.4,
    shadowRadius: 3,

    // Shadow for Android
    elevation: 3,
  },
  phoneNoText: {
    color: "black",
    size: 14,
    fontFamily: "Poppins-Bold",
  },
  boldText: {
    fontSize: 21,
    color: "black",
    fontFamily: "Poppins-Bold",
  },
  boldTextContainer: {
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
  lightTextContainer: {
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    marginTop:-10
  },
  lightText:{
    fontSize: 16,
    color: "black",
    fontWeight:'500',
    fontFamily: "Poppins-Light",
   

  }
});
