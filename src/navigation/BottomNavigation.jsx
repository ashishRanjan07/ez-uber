import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import Account from '../screen/Account'
import Activity from '../screen/Activity'
import Services from '../screen/Services'
import Home from '../screen/Home'
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'

const Tab = createBottomTabNavigator();
const BottomNavigation = () => {
  return (
    <NavigationContainer>
    <Tab.Navigator>
        <Tab.Screen name='Home' component={Home} options={{
           headerShown:false ,
           tabBarIcon:({color,size}) => (
            <Ionicons name="home" color={color} size={size} />  
          )
        }}/>
        <Tab.Screen name='Services' component={Services} options={{
           headerShown:false ,
           tabBarIcon:({color,size}) => (
            <MaterialCommunityIcons name="dots-grid" color={color} size={size} />  
          )
        }}/>
        <Tab.Screen name='Activity' component={Activity} options={{
           headerShown:false ,
           tabBarIcon:({color,size}) => (
            <MaterialIcons name="leaderboard" color={color} size={size} />  
          )
        }}/>
        <Tab.Screen name='Account' component={Account} options={{
           headerShown:false ,
           tabBarIcon:({color,size}) => (
            <FontAwesome name="user" color={color} size={size} />  
          )  
        }}/>
    </Tab.Navigator>
   </NavigationContainer>
  )
}

export default BottomNavigation

const styles = StyleSheet.create({})