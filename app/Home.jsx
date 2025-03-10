import { StyleSheet, Text, View, Button } from 'react-native';
import React, { useState, useEffect } from 'react';
import ScreenWrapper from '../components/ScreenWrapper.jsx';
import { theme } from '../constants/theme';
import { wp, hp } from '../helpers/common';
import { useRouter } from 'expo-router';
import { ref, get } from 'firebase/database';
import { database } from '../firebase.config.js'; // Import your Firebase database instance

const Home = () => {
  const [ultrasonic, setUltrasonic] = useState('');
  const [turbidity, setTurbidity] = useState('');
  const [Ph, setPh] = useState(7);
  const router = useRouter();

  const fetchData = async () => {
    const turbidityRef = ref(database, '/turbidity');
    const ultrasonicRef = ref(database, '/ultasonic');
    const pHRef = ref(database,'/pH')
    try {
      const turbiditySnapshot = await get(turbidityRef);
      const ultrasonicSnapshot = await get(ultrasonicRef);
      const pHSnapshot = await get(pHRef);

      setTurbidity(turbiditySnapshot.val());
      setUltrasonic(ultrasonicSnapshot.val());
      setPh(pHSnapshot.val())
    } catch (error) {
      console.log('Error fetching data:', error);
    }
  };

  useEffect(() => {
    // Fetch data immediately when the component mounts
    fetchData();

    // Set up an interval to fetch data every second (1000ms)
    const interval = setInterval(fetchData, 1000);

    // Clean up the interval when the component unmounts
    return () => clearInterval(interval);
  }, []);

  return (
    <ScreenWrapper bg="#fff">
      <View style={styles.container}>
        <View style={styles.waterLevel}>
          <Text style={styles.waterLevelText}>{ultrasonic} L</Text>
          <Text onPress={() => router.push('sections/secret')} style={styles.remainingText}>
            Remaining: 603 L
          </Text>
        </View>

        <View style={styles.waterItemsContainer}>
          <View style={styles.waterItem}>
            <Text style={styles.waterItemText}>{turbidity}</Text>
          </View>
          <View style={[styles.waterItem, {backgroundColor: '#bde0fe'}]}>
            <Text style={styles.waterItemText}>{Ph}</Text>
          </View>
          <View style={[styles.waterItem, {backgroundColor: '#fefae0'}]}>
            <Text style={styles.waterItemText}>3</Text>
          </View>
          <View style={[styles.waterItem, {backgroundColor: '#588157'}]}>
            <Text style={styles.waterItemText}>4</Text>
          </View>
        </View>
      </View>
    </ScreenWrapper>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
  waterLevel: {
    marginTop: wp(15),
    alignItems: 'center',
  },
  waterLevelText: {
    color: theme.colors.darkblue,
    fontSize: wp(15),
  },
  remainingText: {
    color: theme.colors.darkblue,
    fontSize: wp(3),
  },
  waterItemsContainer: {
    marginTop: hp(25),
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    gap: wp(8),
  },
  waterItem: {
    alignItems: 'center',
    borderRadius: wp(3),
    backgroundColor: theme.colors.paleorange,
    width: wp(35),
    height: hp(15),
    justifyContent: 'center',
  },
  waterItemText: {
    fontSize: hp(10),
    color: 'black',
  },
});