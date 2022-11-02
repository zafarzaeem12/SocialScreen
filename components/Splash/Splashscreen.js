/* eslint-disable prettier/prettier */
import { StyleSheet, Text, View , ImageBackground ,Image } from 'react-native'
import React from 'react'
import img1 from './Images/bg.png'

const Splashscreen = () => {
  return (
    
        <ImageBackground 
            style={styles.backgroundimage} 
            resizeMode='cover'  
            source={img1} 
        >
            <View style={styles.logospace}>
                <Image style={styles.image} source={require('../Splash/Images/logo.png')} />
            </View>
        </ImageBackground>
    

  )
}

export default Splashscreen

const styles = StyleSheet.create({
    container:{
        flex:1
    },
    backgroundimage:{
        width:'100%',
        height: '100%',
    },
    image:{
        width:250,
        height:250,
        resizeMode:"contain",
        alignSelf:"center"
    },
    logospace:{
        paddingTop:240
        
    }
})