import { router } from "expo-router";
import { Formik } from "formik";
import React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import CustomTextInput from '../../components/ui/CustomTextInput';
import MainButton from '../../components/ui/MainButton';
import { loginValidationSchema } from "../../utils/validationSchemas";

const Loginscreen = () => {

  const handleLogin = async (values) => {
    
  };
  return (
    <View style={styles.mainContainer}>
      <View style={styles.topLeftCircle} />
      <View style={styles.bottomRightCircle} />

      <View>
      <Image
          source={require("../../assets/images/Logo.png")}
          style={styles.image1}
        />
      </View>
      <View style={styles.textContainer}>
      <Text style={styles.welcomeText}>Welcome Back</Text>
      <Text style={styles.welcomeText2}>We glad you're back !</Text>
      </View>

      <Formik
            initialValues={{ email: "", password: "" }}
            validationSchema={loginValidationSchema}
            onSubmit={handleLogin}
          >
            {({
              handleChange,
              handleBlur,
              handleSubmit,
              values,
              errors,
              touched,
            }) => (
              <View style={styles.form}>
                <CustomTextInput
                  
                  placeholder="Email"
                  value={values.email}
                  onChangeText={handleChange("email")}
                  onBlur={handleBlur("email")}
                  keyboardType="email-address"
                  error={errors.email}
                  touched={touched.email}
                />

                <View style={styles.secondInput}>
                <CustomTextInput
                  
                  placeholder="Password"
                  value={values.password}
                  onChangeText={handleChange("password")}
                  onBlur={handleBlur("password")}
                  secureTextEntry
                  error={errors.password}
                  touched={touched.password}
                />
                </View>
                <View style={styles.forgotPassword}>
         <TouchableOpacity onPress={()=>{router.navigate('./forgotPassword')}}>
         <Text style={styles.forgotPasswordText}>Forgot Password?</Text>
         </TouchableOpacity>
          </View>
        <View style={styles.button}>
        <MainButton Name={"Sign in"} onPress={handleSubmit}/>
        </View>
              </View>
              
            )}
          </Formik>
          
          <Text style={styles.continueText}>Or continue with</Text>
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
          <Text style={styles.continueText}>Don’t have an account? Sign up!</Text>
          <TouchableOpacity onPress={()=>{
             router.navigate('./signUpScreen')
          }}>
          <View>
          <Text style={styles.tapText}>Tap me to Sign Up!</Text>
          </View>
          </TouchableOpacity>
        
    </View>
  )
}

export default Loginscreen

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    alignItems:'center',
    justifyContent:'center',
    padding:20,
    gap:20,  
  },
  topLeftCircle: {
    width: 160,
    height: 160,
    backgroundColor: '#F9F7F7',
    borderRadius: 80,
    position: 'absolute',
    top: -40,
    right: -40,
  },
  bottomRightCircle: {
    width: 160,
    height: 160,
    backgroundColor: '#F9F7F7',
    borderRadius: 80,
    position: 'absolute',
    bottom: -40,
    left: -40,
  },
  image1:{
    width: 142,
    height: 93,

  },
  textContainer:{
    alignItems:'center',
    justifyContent:'center'
  },
  welcomeText:{
    fontSize:32,
    fontWeight: 800,
    fontFamily: "Poppins-SemiBold",
  },
  welcomeText2:{
    fontSize:18,
    fontFamily: "Poppins-Medium",
  },
  form:{
    width:'100%'
  },
  secondInput:{
    marginTop:15
  },
  button:{
marginTop:18
  },
  forgotPassword:{
    width:'100%',
    marginTop:10,
    paddingHorizontal:10
  },
  forgotPasswordText:{
    fontSize:12,
    color:'#808080'
    
  },
  continueText:{
      fontSize:15,
      fontFamily: "Poppins-Light",
    color:'black'
  },
  loginButtons:{
    width:'100%',
    paddingHorizontal:60,
    alignItems:'center',
    justifyContent:'space-between',
    flexDirection:'row'
  },
  loginLogos:{
    width:64,
    height:64
  },
  tapText:{
    fontSize:18,
    color:'black',
    fontFamily: "Poppins-Medium",

  }

})

