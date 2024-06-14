import React, { useState } from 'react';
import { View, Text, Button, StyleSheet,TextInput, Image, TouchableOpacity, ScrollView } from 'react-native';


export default function HomeScreen() {
  const [section, setSection] = useState('home');

  const renderContent = () => {
    switch (section) {
      case 'home':
        return (
          <View style={styles.contentContainer}>
            <Text style={styles.title}>Welcome to Donkey Diary</Text>
            <Text>This is the home page of Donkey Diary, your app for managing donkeys and their healthcare workers.</Text>
            
          </View>
        ); //    Put this inside view   <Image source={require('C:\Users\DELL 7490\DonkeyID\assets\images\OIP.jpeg')} style={styles.image} />

      case 'donkeys':
        return (
          <View style={styles.contentContainer}>
            <Text style={styles.title}>Donkeys</Text>
            <Text>Here you can manage your donkeys.</Text>
            <Text> </Text>
            <Text style={styles.leftAlignedText}>Donkey Name</Text>
            <TextInput
            style={styles.input}
            placeholder="Enter Donkey Name"
          />
          <Text style={styles.leftAlignedText}>Donkey Age </Text>
          <TextInput
            style={styles.input}
            placeholder="Enter Donkey Age"
          />
           <Text style={styles.leftAlignedText}>Donkey Owner Name </Text>
          <TextInput
            style={styles.input}
            placeholder="Enter Donkey Owner Name"
          />
        
        <TouchableOpacity style={styles.button}
      onPress={() => console.log('Button Pressed')} >
      <Text style={styles.buttonText}>Add Donkey</Text>
    </TouchableOpacity>
  
          </View>
        );
        
        case 'healthcare-workers':
          return (
          <View style={styles.contentContainer}>
            <Text style={styles.title}>Healthcare Workers</Text>
            <Text >Here you can manage the donkey records.</Text>
            <Text> </Text>
            <Text style={styles.leftAlignedText}>Enter staff ID </Text>
            <TextInput
            style={styles.input}
            placeholder="Enter Worker ID"          
          />
          <Text> </Text>
            <Text style={styles.leftAlignedText}>Enter password </Text>
            <TextInput
            style={styles.input}
            placeholder="Enter Worker Password"
          />
          </View>
        );
        case 'Identify donkey':
        return (
          <View style={styles.contentContainer}>
            <Text style={styles.title}>Identify Donkey</Text>
            <Text>Find a donkey.</Text>
            <Text> </Text>
            <Text style={styles.leftAlignedText}>Donkey unique ID</Text>
            <TextInput
            style={styles.input}
            placeholder="Enter Donkey Unique ID"
          />
          </View>
        );
      default:
        return null;
    }



  };

  return (
    <View style={styles.container}>
      <View style={styles.menuStrip}>
        <Button title="Home" onPress={() => setSection('home')} />
        <Button title="Donkeys" onPress={() => setSection('donkeys')} />
        <Button title="Staff" onPress={() => setSection('healthcare-workers')} />
        <Button title="Identify Donkey" onPress={() => setSection('Identify Donkey')} />
      </View>
      {renderContent()}
    </View>
  );
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#F5F5F5',
  },
  menuStrip: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 20,
    padding: 10,
    backgroundColor: '#D2B48C',
  },
  label: {
    fontSize: 16,
    marginBottom: 10,
  },
  contentContainer: {
    alignItems: 'center',
  },
  picker: {
    width: 200,
    height: 44,
    backgroundColor: '#FFF',
    borderColor: '#CCC',
    borderWidth: 1,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
input: {
  height: 40,
  marginVertical: 10,
  width: '90%',
  borderWidth: 1,
  padding: 10,
  borderColor: '#ccc',
  borderRadius: 5,
},
leftAlignedText: {
  textAlign: 'left',  // Aligns text to the left
  width: '100%',      
},
image: {
  width: 200, // Specify the width
  height: 200, // Specify the height
  marginBottom: 20,
},

button: {
  //backgroundColor: '#007BFF',
  padding: 15,
  borderRadius: 10,
  
  backgroundColor: 'white', // Change background color as needed
  borderWidth: 2, // Define the thickness of the border
  borderColor: 'black', // Set the border color
  //borderRadius: 5, // Optional: if you want rounded corners
  alignItems: 'center', // Center the text inside the button
  width: '45%',
},
buttonText: {
  color: 'black',
  textAlign: 'center',
},
header: {
  fontSize: 24,
  fontWeight: 'bold',
  marginBottom: 20,
  textAlign: 'center',
}

});
