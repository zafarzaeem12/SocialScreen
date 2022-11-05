/* eslint-disable prettier/prettier */

import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Splashscreen from './components/Splash/Splashscreen'
import PreLogin from './components/Auth/PreLogin'
import Login from './components/Auth/Login'
import Register from './components/Auth/Register'
import Forgetpassword from './components/Auth/Forgetpassword'
import Verification from './components/Auth/Verification'
import Resetpassword from './components/Auth/Resetpassword'
import Calender from './components/Home/Calender/Calender'
import Home from './components/Home/Home/Home'
import Poll from './components/Home/Poll/Poll'
import Profile from './components/Home/Profile/Profile'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';


const App = () => {

  const Stack = createNativeStackNavigator()

  return (
      <NavigationContainer>
        <Stack.Navigator >
          <Stack.Screen name='Splashscreen' component={ Splashscreen } options={{headerShown:false}} />
          <Stack.Screen name='PreLogin' component={ PreLogin } options={{ headerShown:false}} />
          <Stack.Screen name='Login' component={ Login } options={{headerShown:false}} />
          <Stack.Screen name='Register' component={ Register } options={{headerShown:false}} />
          <Stack.Screen name='Forgetpassword' component={ Forgetpassword } options={{headerShown:false}} />
          <Stack.Screen name='Verification' component={ Verification } options={{headerShown:false}} />
          <Stack.Screen name='Resetpassword' component={ Resetpassword } options={{headerShown:false}} />
          <Stack.Screen name='Home' component={ Home } options={{headerShown:false}} />
        </Stack.Navigator>
      </NavigationContainer>
  )
}

export default App

const styles = StyleSheet.create({})