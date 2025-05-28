import React from 'react';
import { StyleSheet, TextInput, View } from 'react-native';

const DarkTextInput = ({placeholder}) => {
  return (
    <View style={styles.container}>
      <TextInput
        placeholder={placeholder}
        placeholderTextColor="#6c7a89"
        style={styles.input}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#DBE2EF',
    borderRadius: 10,
    paddingHorizontal: 15,
    paddingVertical: 9,
    width: '100%',
    alignSelf: 'center',
    marginTop:5
  },
  input: {
    fontSize: 16,
    color: '#000',
  },
});

export default DarkTextInput;