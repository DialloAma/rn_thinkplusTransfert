import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomePages from '../Pages/HomePages';
import Importer from '../Pages/Importer';
import Historique from '../Pages/Historique';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

const Tabs = createBottomTabNavigator();
const MyTabs = () => {
  return (
    <Tabs.Navigator
      screenOptions={{headerShown: false,tabBarStyle:{ height:80}}}
      initialRouteName="home" >
      <Tabs.Screen
        options={{
          tabBarIcon: ({focused}) => (
            <FontAwesome
              name="home"
              size={30}
              color={focused ? '#551E18' : '#000'}
            />
          ),
          tabBarLabel: () => (
            <Text style={{fontSize: 20, fontWeight: 'bold'}}>Acceuil</Text>
          ),
        }}
        name="home"
        component={HomePages}
      />
      <Tabs.Screen
        options={{
          tabBarIcon: ({focused}) => (
            <FontAwesome5
              name="file-import"
              size={30}
              color={focused ? '#551E18' : '#000'}
            />
          ),
          tabBarLabel: () => (
            <Text style={{fontSize: 20, fontWeight: 'bold'}}>Importer</Text>
          ),
        }}
        name="Importer"
        component={Importer}
      />
      <Tabs.Screen
        options={{
          tabBarIcon: ({focused}) => (
            <FontAwesome5
              name="history"
              size={30}
              color={focused ? '#551E18' : '#000'}
            />
          ),
          tabBarLabel: () => (
            <Text style={{fontSize: 20, fontWeight: 'bold'}}>Historique</Text>
          ),
        }}
        name="Historique"
        component={Historique}
      />
    </Tabs.Navigator>
  );
};

export default MyTabs;

const styles = StyleSheet.create({});
