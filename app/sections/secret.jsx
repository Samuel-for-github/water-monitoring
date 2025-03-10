import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import ScreenWrapper from '../../components/ScreenWrapper.jsx'
import { StatusBar } from 'expo-status-bar';
const Secret = () => {
  return (
    <ScreenWrapper>
        <StatusBar style="dark" />
        <Text style={styles.secretText}>Secret Section</Text>
    </ScreenWrapper>
  )
}

export default Secret

const styles = StyleSheet.create({
  secretText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'darkblue',
    textAlign: 'center',
    marginTop: 20
  }
})
