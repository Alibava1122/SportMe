import React from "react";
import { StyleSheet, Text, TextInput, View } from "react-native";

const CustomTextInput = ({ placeholder, value, onChangeText, onBlur, secureTextEntry, keyboardType, error, touched, Label }) => {
    return (
        <>

            <View style={styles.inputContainer}>

                <TextInput
                    style={styles.input}
                    placeholder={placeholder}
                    onChangeText={onChangeText}
                    onBlur={onBlur}
                    value={value}
                    secureTextEntry={secureTextEntry}
                    keyboardType={keyboardType}
                />

            </View>
            {touched && error && <Text style={styles.error}>{error}</Text>}

        </>
    );
};

const styles = StyleSheet.create({
    inputContainer: {
        marginBottom: 5,
        backgroundColor: '#F5F5F5',
        borderRadius: 17,


    },
    input: {
        height: 60,
        paddingHorizontal: 20,
    },
    error: {
        color: "red",
        fontSize: 12,
    },
    Label: {
        fontSize: 14,
        marginBottom: 7,
        fontFamily: 'Merriweather-Light',
        color: 'black'

    }
});

export default CustomTextInput;
