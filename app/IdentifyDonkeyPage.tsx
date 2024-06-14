import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const IdentifyDonkeyPage = () => {
  return (
    <View style={styles.container}>
      <Text>Identify Your Donkey</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFF',
  }
});

export default IdentifyDonkeyPage;
