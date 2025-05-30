import { Ionicons } from "@expo/vector-icons";
import React from "react";
import {
    Image,
    Modal,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from "react-native";

const ProfileCreatedModal = ({ modalVisible, setModalVisible }) => {
  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={modalVisible}
      onRequestClose={() => setModalVisible(false)}
    >
      <View style={styles.modalOverlay}>
        <TouchableOpacity onPress={() => setModalVisible(false)} style={styles.closeCircleContainer}>
          <View style={styles.closeCircle}>
            <Ionicons name="close" size={25} color="black" />
          </View>
        </TouchableOpacity>
        <View style={styles.modalContainer}>
          <Image
            source={require("../../assets/images/illustration.png")}
            style={styles.modalImage}
          />
          <View style={styles.ModalTextContainer}>
            <Text style={styles.modalText}>Profile Successfully</Text>
            <Text style={styles.modalCreateText}>Created!</Text>
          </View>
          <View style={styles.modalSubTextContainer}>
            <Text style={styles.modalSubText}>
              Congratulations! Your profile has been
            </Text>
            <Text style={styles.modalSubText}>
              successfully created. You've taken the first step{" "}
            </Text>
            <Text style={styles.modalSubText}>
              towards showcasing your unique identity in the
            </Text>
            <Text style={styles.modalSubText}> online world</Text>
          </View>

          <TouchableOpacity
            style={styles.modalButton}
            onPress={() => setModalVisible(false)}
          >
            <Text style={styles.modalButtonText}>Take Me Home</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};

export default ProfileCreatedModal;

const styles = StyleSheet.create({
  modalOverlay: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.5)",
    justifyContent: "center",
    alignItems: "center",
  },
  modalContainer: {
    width: "90%",
    backgroundColor: "#fff",
    borderRadius: 30,
    padding: 20,
    alignItems: "center",
  },
  ModalTextContainer: {
    marginTop: 20,
    alignItems: "center",
    justifyContent: "center",
  },
  modalSubTextContainer: {
    // marginTop:10,
    alignItems: "center",
    justifyContent: "center",
  },
  modalText: {
    fontSize: 25,
    textAlign: "center",
    fontFamily: "Poppins-Medium",
  },
  modalCreateText: {
    fontSize: 25,
    textAlign: "center",
    fontFamily: "Poppins-Medium",
    marginTop: -5,
  },
  modalButton: {
    backgroundColor: "#507FFE",
    paddingVertical: 13,
    paddingHorizontal: 30,
    borderRadius: 20,
    marginTop: 20,
    marginBottom: 10,
  },
  modalButtonText: {
    color: "#fff",
    fontSize: 16,
  },
  modalImage: {
    height: 150,
    width: 150,
  },
  modalSubText: {
    color: "#838FA0",
  },
  closeCircleContainer: {
    width: "100%",
    paddingHorizontal: 25,
    justifyContent: "flex-start",
    alignItems: "flex-end",
    marginBottom: 10,
  },
  closeCircle: {
    width: 30,
    height: 30,
    backgroundColor: "white",
    borderRadius: 50,

    alignItems: "center",
    justifyContent: "center",
  },
});
