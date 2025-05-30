import { Ionicons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import { router } from "expo-router";
import React, { useState } from "react";
import {
    Image,
    ScrollView,
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    View
} from "react-native";
import MainButton from "../../components/ui/MainButton";
import ProfileCreatedModal from "../../components/ui/ProfileCreatedModal";

const CompleteProfile = () => {
    const [modalVisible, setModalVisible] = useState(false);
  return (
    <ScrollView>
      <View style={styles.mainContainer}>
        <TouchableOpacity onPress={() => router.back()} style={styles.backIcon}>
          <Ionicons name="chevron-back" size={25} color="#AAB2B7" />
        </TouchableOpacity>

        <View style={styles.topLeftCircle} />
        <View style={styles.bottomRightCircle} />

        <View style={styles.textContainer}>
          <Text style={styles.verifyText}>Complete Profile</Text>
          <Text style={styles.stepText}>Step 5 of 5</Text>
        </View>

        <LinearGradient
          colors={["#FC6767", "#EC008C"]}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 0 }}
          style={styles.gradientLine}
        />
        <View style={styles.subTextContainer}>
          <Text style={styles.subText}>
            By creating a distinctive username and adding an
          </Text>
          <Text style={styles.subText}>
            engaging profile picture, you'll leave a lasting
          </Text>
          <Text style={styles.subText}>
            impression in the online community.
          </Text>
        </View>
        <View style={styles.profilePicContainer}>
          <View style={styles.profilePic}>
            <Image
              source={require("../../assets/images/round.png")}
              style={styles.editImage}
            />
          </View>
        </View>
        <View style={styles.userNameContainer}>
          <Text style={styles.verifyText}>Adnan R</Text>
        </View>

        <View>
          <Text>Username</Text>
          <View style={styles.inputContainer}>
            <Ionicons name="person" size={28} color="#4F7FFF" />
            <TextInput
              placeholder="username"
              style={styles.input}
              placeholderTextColor="#666"
            />
          </View>
          <Text style={styles.availableText}>Username Available!</Text>
        </View>

         {/* Bio TextInput */}

        <View>
          <Text>bio</Text>
          <View style={styles.bioContainer}>
            <TextInput
              placeholder="Write your bio..."
              style={styles.bioInput}
              multiline
              numberOfLines={4}
              placeholderTextColor="#666"
              textAlignVertical="top" // Ensures text starts at the top-left
            />
          </View>
        </View>

      {/* Affiliate TextInput */}
        
        <View>
          <Text>Affiliate Code (If provided by an agent)</Text>
          <View style={styles.inputContainer}>
            <Ionicons name="person" size={28} color="#4F7FFF" />
            <TextInput
              placeholder="enter code"
              style={styles.input}
              placeholderTextColor="#666"
            />
          </View>
        </View>

        <MainButton Name={"Create Profile"}  onPress={() => setModalVisible(true)} />

    <ProfileCreatedModal  modalVisible={modalVisible} setModalVisible={setModalVisible} />
        <View style={{ height: 50 }}></View>
      </View>
    </ScrollView>
  );
};

export default CompleteProfile;

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: 20,
    backgroundColor: "#fff",
    gap: 20,
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
  subTextContainer: {
    alignItems: "center",
    justifyContent: "center",
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
  subText: {
    fontSize: 14,
    fontFamily: "Poppins-Light",
    color: "#706F93",
  },
  profilePicContainer: {
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
  },
  profilePic: {
    width: 130,
    height: 130,
    borderRadius: 70,
    borderColor: "white",
    borderWidth: 5,
    elevation: 4,
    backgroundColor: "#D9D9D9",
  },
  editImage: {
    width: 45,
    height: 45,
    position: "absolute",
    right: 0,
    bottom: -12,
  },
  userNameContainer: {
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#F1F2F4",
    borderRadius: 30,
    paddingHorizontal: 10,
    paddingVertical: 4,
    margin: 10,
  },
  input: {
    flex: 1,
    marginLeft: 10,
    fontSize: 16,
    color: "#000",
  },
  availableText: {
    color: "#33B130",
  },
  bioContainer: {
    borderWidth: 1,
    borderColor: "#F1F2F4",
    borderRadius: 30,
    padding: 6,
    margin: 10,
    height: 120,
  },
  bioInput: {
    flex: 1,
    fontSize: 14,
    color: "#000",
  },

});
