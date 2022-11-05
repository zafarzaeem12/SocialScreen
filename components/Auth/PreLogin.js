/* eslint-disable prettier/prettier */
import React from 'react'
import { StyleSheet, Text, View , ImageBackground ,Image,TextInput ,TouchableOpacity } from 'react-native'
import img1 from '../Auth/Images/bg.png'
import Icon from 'react-native-vector-icons/FontAwesome';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';

const PreLogin = ({navigation}) => {
    return (
        <View>
            <ImageBackground 
            style={{  width:'100%',height: '100%', opacity:1 ,resizeMode:'cover'  }} 
            source={img1} 
        >
            <View style={styles.logospace}>
                <Image style={styles.image} source={require('../Splash/Images/logo.png')} />
            </View>
            <View style={{alignItems:"center"}}> 
              <TouchableOpacity style={styles.emailBtn}>
                <View style={{display:"flex",flexDirection:"row",alignItems:"center"}}>
                <View style={{padding:15}}>
                    <SimpleLineIcons name="envelope" size={30} color="#fff" />
                </View>
                    <Text style={styles.logintxt} onPress={() => navigation.navigate('Login')}   >Sign in with Email</Text>
                </View>
              </TouchableOpacity>

              <TouchableOpacity style={styles.appleBtn}>
              <View style={{display:"flex",flexDirection:"row",alignItems:"center"}}>
              <View style={{padding:15}}>
                <AntDesign name="apple-o" size={30} color="#fff" />
              </View>
                    <Text style={styles.logintxt}   >Sign in with Apple ID</Text>
              </View>
              </TouchableOpacity>

              <TouchableOpacity style={styles.facebookBtn}>
              <View style={{display:"flex",flexDirection:"row",alignItems:"center"}}>
              <View style={{padding:15}}>
                <AntDesign name="facebook-square" size={30} color="#fff" />
              </View>
                    <Text style={styles.logintxt}   >Sign in with Facebook</Text>
              </View>
              </TouchableOpacity>

              <TouchableOpacity style={styles.googleBtn}>
              <View style={{display:"flex",flexDirection:"row",alignItems:"center"}}>
              <View style={{padding:15}}>
                <AntDesign name="google" size={30} color="#fff" />
              </View>
                <Text style={styles.logintxt}   >Sign in with Google</Text>

              </View>
              </TouchableOpacity>

              <Text style={{padding:10 ,color:"#fff"}} onPress={() => navigation.navigate('Register')} >Donot have a account Register User</Text>
            </View>           
        </ImageBackground>
        </View>
    )
}

export default PreLogin

const styles = StyleSheet.create({
    container:{
        flex:1
    },
    backgroundimage:{
        width:'100%',
        height: '100%',
        opacity:1
    },
    image:{
        width:250,
        height:250,
        resizeMode:"contain",
        alignSelf:"center"
    },
    logospace:{
        paddingTop:40
        
    },
    emailBtn: {
        textAlign:"center",
        height: 65,
        width: 330,
        borderRadius: 35,
        alignItems: "center",
        justifyContent: "center",
        marginTop: 40,
        backgroundColor: "#17a2de",
        borderWidth: 2.5,
        borderColor: "white"
    
      },
      appleBtn: {
        textAlign:"center",
        height: 65,
        width: 330,
        borderRadius: 35,
        alignItems: "center",
        justifyContent: "center",
        marginTop: 40,
        backgroundColor: "black",
        borderWidth: 2.5,
        borderColor: "white"
    
      },
      facebookBtn: {
        textAlign:"center",
        height: 65,
        width: 330,
        borderRadius: 35,
        alignItems: "center",
        justifyContent: "center",
        marginTop: 40,
        backgroundColor: 'rgba(24,119,242,255)',
        borderWidth: 2.5,
        borderColor: "white"
    
      },
      googleBtn: {
        textAlign:"center",
        height: 65,
        width: 330,
        borderRadius: 35,
        alignItems: "center",
        justifyContent: "center",
        marginTop: 40,
        backgroundColor: 'rgba(236,63,63,255)',
        borderWidth: 2.5,
        borderColor: "white"
    
      },
      logintxt:{
        color:"white",
        fontSize:20
      }

})
