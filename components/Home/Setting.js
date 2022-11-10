/* eslint-disable prettier/prettier */
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'
import Settingcomponents from './Settingcomponents'

const Setting = ({ navigation }) => {
    return (
        <View>
            <View style={{ alignSelf: "center", marginTop: 10 }}>
                <Text style={{ fontSize: 20, color: "black", fontWeight: "bold" }}>Settings</Text>
            </View>
            <View>
                <TouchableOpacity onPress={() => navigation.navigate('Profile')}>
                        <Settingcomponents name="User Details" icon="user" />
                </TouchableOpacity>
            </View>
            <View>
                <TouchableOpacity onPress={() => navigation.navigate('CardDetails')}>
                        <Settingcomponents name="Card Details" icon="credit-card" />
                </TouchableOpacity>
            </View>
            <View>
                <TouchableOpacity>
                        <Settingcomponents name="Recived Push Notification" icon="bell" />
                </TouchableOpacity>
            </View>
                <TouchableOpacity onPress={() => navigation.navigate('Login')}>
                        <Settingcomponents name="Logout" icon="logout" />
                </TouchableOpacity>
     



        </View>
    )
}

export default Setting

const styles = StyleSheet.create({})