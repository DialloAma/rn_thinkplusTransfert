import { Dimensions, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import { useNavigation } from '@react-navigation/native'
const {width} = Dimensions.get('window')

const Header = () => {
  const navigation = useNavigation()
  return (
    <View style={styles.headerContainer}>
      <View style={styles.contenu}>
        <TouchableOpacity onPress={()=>navigation.openDrawer()} >
           <FontAwesome5 name='align-justify' size={30} color='#551E18'/>
        </TouchableOpacity>
        <Image source={require('../Images/logo.png')} style={{ width:200, height:60,marginVertical:5,resizeMode:'contain'}}/>
        <TouchableOpacity>
        <FontAwesome name='bell' size={30} color='#551E18'  />
            </TouchableOpacity>
      </View>
    </View>
  )
}

export default Header

const styles = StyleSheet.create({
    headerContainer:{
        width:width,
        height:width/5-10,
        backgroundColor:'white',
        elevation:8

    },
    contenu:{
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
          marginHorizontal:30

    }
})