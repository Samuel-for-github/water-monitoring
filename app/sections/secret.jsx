import { Alert, StyleSheet, Text, View } from 'react-native';
import React, { useState, useEffect } from 'react';
import { useRouter } from 'expo-router';
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
import ScreenWrapper from '../../components/ScreenWrapper.jsx';
import { StatusBar } from 'expo-status-bar';
import { wp } from '../../helpers/common.js';
import Slider from '@react-native-community/slider'; // Import Slider

import { ref, set } from 'firebase/database';
import { database } from '../../firebase.config.js';

const Secret = () => {
  const [waterLevel, setwaterLevel] = useState(0); // Initialize with 0
  const [turbidity, setTurbidity] = useState(0);
  const [pH, setPH] = useState(7); // Initialize with 0

  // Write the updated waterLevel value to Firebase whenever it changes
  useEffect(() => {
    const writeWaterLevelToFirebase = async () => {
      if (waterLevel === null || waterLevel === undefined) return; // Skip if waterLevel is not set

      try {
        const newUltrasonicRef = ref(database, '/ultasonic');
        await set(newUltrasonicRef, waterLevel);
     
      } catch (error) {
        console.log('Error writing water level data:', error);
      }
    };

    writeWaterLevelToFirebase();
  }, [waterLevel]); // Trigger this effect whenever `waterLevel` changes

  // Write the updated turbidity value to Firebase whenever it changes
  useEffect(() => {
    const writeTurbidityToFirebase = async () => {
      if (turbidity === null || turbidity === undefined) return; // Skip if turbidity is not set

      try {
        const newTurbidityRef = ref(database, '/turbidity');
        await set(newTurbidityRef, turbidity);
       
      } catch (error) {
        console.log('Error writing turbidity data:', error);
      }
    };

    writeTurbidityToFirebase();
  }, [turbidity]); // Trigger this effect whenever `turbidity` changes

    // Write the updated pH value to Firebase whenever it changes
    useEffect(() => {
      const writePhToFirebase = async () => {
        if (pH === null || pH === undefined) return; // Skip if turbidity is not set
  
        try {
          const newPhRef = ref(database, '/pH');
          await set(newPhRef, pH);
          
        } catch (error) {
          console.log('Error writing turbidity data:', error);
        }
      };
  
    writePhToFirebase()
    }, [pH]); // Trigger this effect whenever `ph` changes
  

  const router = useRouter();
  return (
    <ScreenWrapper>
      <StatusBar style="dark" />
      <View style={{ paddingLeft: wp(5) }}>
        <FontAwesome5
          name="chevron-circle-left"
          onPress={() => router.back()}
          size={wp(9)}
          color="black"
        />
      </View>
      <Text style={styles.secretText}>Secret Section</Text>

      {/* Water Level Slider */}
      <View style={styles.sliderContainer}>
        <Text style={styles.sliderValue}>Selected Water Level: {waterLevel}</Text>
        <Slider
          style={styles.slider}
          minimumValue={0} // Minimum value of the slider
          maximumValue={100} // Maximum value of the slider
          step={1} // Step value (1 for whole numbers)
          value={waterLevel} // Current value
          onValueChange={(value) => setwaterLevel(value)} // Update state on change
          minimumTrackTintColor="#1fb28a" // Color of the track to the left of the thumb
          maximumTrackTintColor="#d3d3d3" // Color of the track to the right of the thumb
          thumbTintColor="#1fb28a" // Color of the thumb
        />
      </View>

      {/* Turbidity Slider */}
      <View style={styles.sliderContainer}>
        <Text style={styles.sliderValue}>Selected Turbidity: {turbidity}</Text>
        <Slider
          style={styles.slider}
          minimumValue={0} // Minimum value of the slider
          maximumValue={100} // Maximum value of the slider
          step={1} // Step value (1 for whole numbers)
          value={turbidity} // Current value
          onValueChange={(value) => setTurbidity(value)} // Update state on change
          minimumTrackTintColor="#1fb28a" // Color of the track to the left of the thumb
          maximumTrackTintColor="#d3d3d3" // Color of the track to the right of the thumb
          thumbTintColor="#1fb28a" // Color of the thumb
        />
      </View>
      <View style={styles.sliderContainer}>
        <Text style={styles.sliderValue}>Selected pH: {pH}</Text>
        <Slider
          style={styles.slider}
          minimumValue={0} // Minimum value of the slider
          maximumValue={14} // Maximum value of the slider
          step={1} // Step value (1 for whole numbers)
          value={pH} // Current value
          onValueChange={(value) => setPH(value)} // Update state on change
          minimumTrackTintColor="#1fb28a" // Color of the track to the left of the thumb
          maximumTrackTintColor="#d3d3d3" // Color of the track to the right of the thumb
          thumbTintColor="#1fb28a" // Color of the thumb
        />
      </View>
    </ScreenWrapper>
  );
};

export default Secret;

const styles = StyleSheet.create({
  secretText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'darkblue',
    textAlign: 'center',
    marginTop: 20,
  },
  sliderContainer: {
    marginTop: 20,
    paddingHorizontal: 20,
  },
  sliderValue: {
    fontSize: 18,
    textAlign: 'center',
    marginBottom: 10,
  },
  slider: {
    width: '100%',
    height: 40,
  },
});