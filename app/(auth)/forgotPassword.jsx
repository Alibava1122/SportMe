import { Ionicons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import { router } from "expo-router";
import React from "react";
import {
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    View,
} from "react-native";
import DarkTextInput from "../../components/ui/DarkTextInput";
import MainButton from "../../components/ui/MainButton";

const ForgotPassword = () => {
  return (
    <>
      <View style={styles.mainContainer}>
        <TouchableOpacity onPress={() => router.back()} style={styles.backIcon}>
          <Ionicons name="chevron-back" size={25} color="#AAB2B7" />
        </TouchableOpacity>

        <View style={styles.topLeftCircle} />
        <View style={styles.bottomRightCircle} />

        <View style={styles.textContainer}>
          <Text style={styles.verifyText}>Forgot Password</Text>
          {/* <Text style={styles.stepText}>Step 2 of 5 </Text> */}
        </View>
        <LinearGradient
          colors={["#FC6767", "#EC008C"]}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 0 }}
          style={styles.gradientLine}
        />
        <View>
          <Text style={styles.phoneNoText}>Please Enter Your Email Addres </Text>
          <DarkTextInput placeholder={"Email"} />
        </View>
        <MainButton Name={"Send"} />

        <View style={styles.veritextContainer}>
          <Text style={styles.verText}>
            Please enter the verification code sent to the
          </Text>
          <Text style={styles.verText}> number entered above.</Text>
        </View>
        <View style={styles.otpContainer}>
          <View style={styles.otpCircle}>
            <TextInput
               style={styles.otpInput}
              keyboardType="numeric"
              maxLength={1}
              textAlign="center"
              secureTextEntry
            />
          </View>
          <View style={styles.otpCircle}>
          <TextInput
              style={styles.otpInput}
              keyboardType="numeric"
              maxLength={1}
              textAlign="center"
              secureTextEntry
            />
          </View>
          <View style={styles.otpCircle}>
          <TextInput
               style={styles.otpInput}
              keyboardType="numeric"
              maxLength={1}
              textAlign="center"
              secureTextEntry
            />
          </View>
          <View style={styles.otpCircle}>
          <TextInput
              style={styles.otpInput}
              keyboardType="numeric"
              maxLength={1}
              textAlign="center"
              secureTextEntry
            />
          </View>
        </View>
        <MainButton Name={"Verify Code"} onPress={()=>{router.navigate('./resetPassword')}} />
        <View style={styles.resendCodeContainer}>
          <Text style={styles.verText}>Didn’t get a code?</Text>
          <Text style={styles.resendCode}>Resend Code</Text>
        </View>
      </View>
    </>
  );
};

export default ForgotPassword;

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
    height: 3,
    borderRadius: 1.5,

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
  veritextContainer: {
    alignItems: "center",
    justifyContent: "center",
  },
  verText: {
    fontSize: 13,
    color: "#4C4E55",
    fontFamily: "Poppins-Light",
  },
  otpContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 50,
  },
  otpCircle: {
    width: 60,
    height: 60,
    borderRadius: 50,
    borderWidth: 1,
    borderColor: "#D9D9D9",
  },
  resendCodeContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  resendCode: {
    marginBottom: 4,
    marginLeft: 2,
  },
  otpCircle: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: '#DBE2EF',
    justifyContent: 'center',
    alignItems: 'center',
    color: '#000',
    marginHorizontal: 5,
    
  },
  otpInput:{
    fontSize: 20,
    borderBottomWidth:1,
    marginBottom:5
  }
});
