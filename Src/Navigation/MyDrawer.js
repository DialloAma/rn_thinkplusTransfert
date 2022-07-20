import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer'
import MyTabs from './MyTabs'

const Drawer = createDrawerNavigator()

const MyDrawer = () => {
  return (
   <Drawer.Navigator screenOptions={{ headerShown:false}}>
    <Drawer.Screen name='Acceuil' component={MyTabs}/>
   </Drawer.Navigator>
  )
}

export default MyDrawer

const styles = StyleSheet.create({})