import { Ionicons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import { router } from "expo-router";
import React, { useState } from "react";
import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import MainButton from "../../components/ui/MainButton";

const sportsList = [
  "Football",
  "Cricket",
  "Basketball",
  "Tennis",
  "Hockey",
  "Volleyball",
  "Badminton",
];

const SelectSport = () => {
  const [selectedSports, setSelectedSports] = useState([]);

  const toggleSelection = (sport) => {
    if (selectedSports.includes(sport)) {
      // Unselect
      setSelectedSports(selectedSports.filter(item => item !== sport));
    } else {
      // Select
      setSelectedSports([...selectedSports, sport]);
    }
  };

  return (
    <ScrollView>
    <View style={styles.mainContainer}>
      <TouchableOpacity onPress={() => router.back()} style={styles.backIcon}>
        <Ionicons name="chevron-back" size={25} color="#AAB2B7" />
      </TouchableOpacity>

      <View style={styles.topLeftCircle} />
      <View style={styles.bottomRightCircle} />

      <View style={styles.textContainer}>
        <Text style={styles.verifyText}>Select your Current Sport</Text>
        <Text style={styles.stepText}>Step 3 of 5</Text>
      </View>

      <LinearGradient
        colors={["#FC6767", "#EC008C"]}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 0 }}
        style={styles.gradientLine}
      />

      <View style={styles.buttonsContainer}>
        {sportsList.map((sport, index) => {
          const isSelected = selectedSports.includes(sport);
          return (
            <TouchableOpacity
              key={index}
              onPress={() => toggleSelection(sport)}
              style={[
                styles.sportButton,
                isSelected && styles.selectedSportButton,
              ]}
            >
            <View style={styles.iconContainer}>
                {
                    isSelected ? (<Ionicons name="location-outline" size={20} color="#FD4E4E" />):(<Ionicons name="location-outline" size={20} color="#AAB2B7" />)
                }
            <Text
                style={[
                  styles.sportButtonText,
                  isSelected && styles.selectedSportButtonText,
                ]}
              >
                {sport}
              </Text>
            </View>
            </TouchableOpacity>
          );
        })}
      </View>

      <MainButton Name={"Continue"} onPress={()=>{router.navigate('/addSocialMedia')}} />
    </View>
    </ScrollView>
  );
};

export default SelectSport;

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: 20,
    backgroundColor: "#fff",
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
    marginVertical: 20,
    borderRadius: 2,
  },
  buttonsContainer: {
    gap: 10,
    justifyContent: "center",
    marginBottom: 30,
  },
  sportButton: {
    borderWidth: 1,
    borderColor: "#EEEEEE",
    borderRadius: 30,
    paddingVertical: 8,
    paddingHorizontal: 16,
    margin: 5,
    height:60,
    justifyContent:'center'
  },
  selectedSportButton: {
    borderColor: "#FD4E4E",
  },
  sportButtonText: {
    color: "#778087",
    fontSize: 15,
    marginLeft:10
  },
  selectedSportButtonText: {
    color: "black",
    marginLeft:10
  },
  iconContainer:{
    width:'100%',
    flexDirection:'row'
  }
});
