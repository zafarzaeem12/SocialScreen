/* eslint-disable prettier/prettier */
import React from 'react'
import { View, Text } from 'react-native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from './components/Home/Home/Home'
import Calender from './components/Home/Calender/Calender'
import Poll from './components/Home/Poll/Poll'
import Profile from './components/Home/Profile/Profile'

export default function TabNavigator() {


    const Tab = createBottomTabNavigator()

    return (
        <Tab.Navigator initialRouteName='Home'>
            <Tab.Screen  name='Home' component={Home} />  
            <Tab.Screen  name='Calender' component={Calender} />  
            <Tab.Screen  name='Poll' component={Poll} />  
            <Tab.Screen  name='Profile' component={Profile} />  
        </Tab.Navigator>
    )
}
