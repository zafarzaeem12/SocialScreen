/* eslint-disable prettier/prettier */
import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Splashscreen from './components/Splash/Splashscreen'
import PreLogin from './components/Auth/PreLogin'
import Login from './components/Auth/Login'
import Register from './components/Auth/Register'
import Forgetpassword from './components/Auth/Forgetpassword'
import Verification from './components/Auth/Verification'

const App = () => {
  return (
    <View>
      {/* <Splashscreen /> */}
      {/* <PreLogin /> */}
      {/* <Login /> */}
      {/* <Register /> */}
      {/* <Forgetpassword /> */}
      <Verification />
    </View>
  )
}

export default App

const styles = StyleSheet.create({})