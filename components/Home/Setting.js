/* eslint-disable prettier/prettier */
import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Settingcomponents from './Settingcomponents'

const Setting = () => {
  return (
    <View>
    <View style={{alignSelf:"center",marginTop:10}}>
        <Text style={{fontSize:20,color:"black",fontWeight:"bold"}}>Settings</Text>
    </View>
       <Settingcomponents name="User Details" icon="user" />

       <Settingcomponents name="Card Details" icon="credit-card" />

       <Settingcomponents name="Recived Push Notification" icon="bell" />

       <Settingcomponents name="Logout" icon="logout" />
    </View>
  )
}

export default Setting

const styles = StyleSheet.create({})