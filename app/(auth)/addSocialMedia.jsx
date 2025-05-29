import { Ionicons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import { router } from "expo-router";
import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import DarkTextInput from "../../components/ui/DarkTextInput";
import MainButton from "../../components/ui/MainButton";

const AddSocialMedia = () => {
  return (
    <View style={styles.mainContainer}>
      <TouchableOpacity onPress={() => router.back()} style={styles.backIcon}>
        <Ionicons name="chevron-back" size={25} color="#AAB2B7" />
      </TouchableOpacity>

      <View style={styles.topLeftCircle} />
      <View style={styles.bottomRightCircle} />

      <View style={styles.textContainer}>
        <Text style={styles.verifyText}>Add your Social Accounts</Text>
        <Text style={styles.stepText}>Step 4 of 5</Text>
      </View>

      <LinearGradient
        colors={["#FC6767", "#EC008C"]}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 0 }}
        style={styles.gradientLine}
      />

      <View>
        <Text style={styles.namesText}>Facebook</Text>
        <DarkTextInput placeholder={"paste your link"} />
      </View>
      <View>
        <Text style={styles.namesText}>Instagram</Text>
        <DarkTextInput placeholder={"paste your link"} />
      </View>
      <View>
        <Text style={styles.namesText}>TikTok</Text>
        <DarkTextInput placeholder={"paste your link"} />
      </View>
      <View>
        <Text style={styles.namesText}>X</Text>
        <DarkTextInput placeholder={"paste your link"} />
      </View>
      <View>
        <Text style={styles.namesText}>Twitter</Text>
        <DarkTextInput placeholder={"paste your link"} />
      </View>

      <MainButton Name={"Continue"} />
    </View>
  );
};

export default AddSocialMedia;

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: 20,
    backgroundColor: "#fff",
    gap:20
  },
  backIcon: {
    position: "absolute",
    top: 60,
    left: 20,
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
    marginTop: 80,
  },
  verifyText: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#333",
  },
  stepText: {
    marginTop: 10,
    fontSize: 14,
    color: "#999",
  },
  gradientLine: {
    height: 4,
    width: "100%",
    borderRadius: 2,
  },
  namesText: {
    color: "black",
    size: 14,
    fontFamily: "Poppins-Bold",
  },
});
