/* eslint-disable prettier/prettier */
import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Splashscreen from './components/Splash/Splashscreen'
import PreLogin from './components/Auth/PreLogin'
import Login from './components/Auth/Login'

const App = () => {
  return (
    <View>
      {/* <Splashscreen /> */}
      {/* <PreLogin /> */}
      <Login />
    </View>
  )
}

export default App

const styles = StyleSheet.create({})