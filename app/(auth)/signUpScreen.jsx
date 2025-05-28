import { Ionicons } from "@expo/vector-icons";
import { router } from "expo-router";
import { Formik } from "formik";
import React from "react";
import {
    Image,
    ScrollView,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from "react-native";
import LineTextInput from "../../components/ui/LineTextInput";
import MainButton from "../../components/ui/MainButton";

const SignUpScreen = () => {
  const handleSignUp = async (values) => {
    router.navigate('./confirmCode')
  };
  return (
    <ScrollView >
      <View style={styles.mainContainer}>
        <TouchableOpacity onPress={() => router.back()} style={styles.backIcon}>
          <Ionicons name="chevron-back" size={25} color="#AAB2B7" />
        </TouchableOpacity>
        <View style={styles.topLeftCircle} />
        <View style={styles.bottomRightCircle} />

        <View style={styles.textContainer}>
          <Text style={styles.welcomeText}>Signup to create</Text>
          <Text style={styles.welcomeText}>a new account</Text>
        </View>

        <Formik
          initialValues={{
            firstName: "",
            lastName: "",
            dob: "",
            email: "",
            password: "",
            confirmPassword: "",
            address: "",
            postCode: "",
          }}
          validationSchema={signupValidationSchema}
          onSubmit={handleSignUp}
        >
          {({
            handleChange,
            handleBlur,
            handleSubmit,
            values,
            errors,
            touched,
          }) => (
            <View style={styles.fullFormContainer}>
              <View style={styles.form}>
                <LineTextInput
                  name="First name"
                  value={values.firstName}
                  onChangeText={handleChange("firstName")}
                  onBlur={handleBlur("firstName")}
                  error={errors.firstName}
                  touched={touched.firstName}
                />
                <LineTextInput
                  name="Last name"
                  value={values.lastName}
                  onChangeText={handleChange("lastName")}
                  onBlur={handleBlur("lastName")}
                  error={errors.lastName}
                  touched={touched.lastName}
                />
                <LineTextInput
                  name="Date of Birth"
                  value={values.dob}
                  onChangeText={handleChange("dob")}
                  onBlur={handleBlur("dob")}
                  error={errors.dob}
                  touched={touched.dob}
                />
                <LineTextInput
                  name="Email"
                  value={values.email}
                  onChangeText={handleChange("email")}
                  onBlur={handleBlur("email")}
                  error={errors.email}
                  touched={touched.email}
                  keyboardType="email-address"
                />
                <LineTextInput
                  name="Password"
                  value={values.password}
                  onChangeText={handleChange("password")}
                  onBlur={handleBlur("password")}
                  error={errors.password}
                  touched={touched.password}
                  secureTextEntry
                />
                <LineTextInput
                  name="Confirm Password"
                  value={values.confirmPassword}
                  onChangeText={handleChange("confirmPassword")}
                  onBlur={handleBlur("confirmPassword")}
                  error={errors.confirmPassword}
                  touched={touched.confirmPassword}
                  secureTextEntry
                />
                <LineTextInput
                  name="Address"
                  value={values.address}
                  onChangeText={handleChange("address")}
                  onBlur={handleBlur("address")}
                  error={errors.address}
                  touched={touched.address}
                />
                <LineTextInput
                  name="Post Code"
                  value={values.postCode}
                  onChangeText={handleChange("postCode")}
                  onBlur={handleBlur("postCode")}
                  error={errors.postCode}
                  touched={touched.postCode}
                />
              </View>

              <View style={styles.button}>
                <MainButton Name={"Continue"} onPress={handleSubmit} />
              </View>
            </View>
          )}
        </Formik>

        <Text style={styles.continueText}>Or sigunup with social network</Text>
        <View style={styles.loginButtons}>
          <Image
            source={require("../../assets/images/goggle.png")}
            style={styles.loginLogos}
          />
          <Image
            source={require("../../assets/images/facebook.png")}
            style={styles.loginLogos}
          />
          <Image
            source={require("../../assets/images/apple.png")}
            style={styles.loginLogos}
          />
        </View>
        {/* <View style={{ width: 10, height: 30 }}></View> */}
      </View>
    
    </ScrollView>
  );
};

export default SignUpScreen;

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: "#FFFFFF",
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
    gap: 20,
    paddingVertical:60
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
  welcomeText: {
    fontSize: 34,
    fontWeight: 500,
    fontFamily: "Poppins-Medium",
  },

  fullFormContainer: {
    width: "100%",
  },
  form: {
    width: "100%",
    borderRadius: 10,
    borderWidth: 0.7,
    padding: 20,
    borderColor: "#EEEEEE",
    justifyContent: "center",
    gap: 22,
  },

  button: {
    marginTop: 18,
  },

  continueText: {
    fontSize: 15,
    fontFamily: "Poppins-Light",
    color: "black",
  },
  loginButtons: {
    width: "100%",
    paddingHorizontal: 60,
    alignItems: "center",
    justifyContent: "space-between",
    flexDirection: "row",
  },
  loginLogos: {
    width: 64,
    height: 64,
  },
  tapText: {
    fontSize: 18,
    color: "black",
    fontFamily: "Poppins-Medium",
  },
  backIcon: {
    width: "100%",
  },
});
