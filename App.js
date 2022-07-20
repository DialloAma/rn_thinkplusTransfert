import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import MyDrawer from './Src/Navigation/MyDrawer'

const App = () => {
  return (
  <NavigationContainer>
    <MyDrawer/>
    </NavigationContainer>
  )
}

export default App

const styles = StyleSheet.create({})