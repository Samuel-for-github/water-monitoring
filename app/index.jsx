import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Home from './Home'
import ScreenWrapper from '../components/ScreenWrapper'
import { StatusBar } from 'expo-status-bar';
const index = () => {
  return (
    <ScreenWrapper>
      <StatusBar style="dark" />
      <Home/>
      
    </ScreenWrapper>
  )
}

export default index

const styles = StyleSheet.create({
background:{
// backgroundColor: 'black'
},
  text: {
  color: 'black'
}
})