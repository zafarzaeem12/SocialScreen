/* eslint-disable prettier/prettier */
import React, { useEffect,useState } from 'react'
import { StyleSheet, Text, View, ImageBackground, Image, TouchableOpacity,Platform,Alert } from 'react-native'
import img1 from '../Auth/Images/bg.png'
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import AuthLogin from '../../components/socialLogin';
import messaging from '@react-native-firebase/messaging';
import auth, { firebase } from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';




const PreLogin = ({ navigation }) => {

  
  
  const saveTokenToDatabase = async (token) => {
    // Assume user is already signed in
    const userId = auth()?.currentUser?.uid;
   
        const data = { tokens: token }
        console.log({userId})
        console.log({data})
 
  }



  useEffect(() => {
 
    
  //  console.log("firestore",firebase.apps[0]._options)
    
    // Get the device token
    messaging()
      .getToken()
      .then(token => {
        console.log("tokentokentoken",token)
        return saveTokenToDatabase(token);
      });

      messaging().onMessage(async remoteMessage => {
        console.log('Message handled in the background!', remoteMessage);
      });
  

    // Listen to whether the token changes
    return messaging().onTokenRefresh(token => {
      saveTokenToDatabase(token);
    });
  }, []);


  const FacebookLogin = () => {
    AuthLogin.Facebook().then((data) => navigation.navigate('Profile', data))
  }
  const GoogleLogin = async () => {
    const data = await AuthLogin.Google();
    navigation.navigate('Profile', data)
  }
  const AppleLogin = async () => {
    await AuthLogin.Apple();
  }



  return (
    <View>
      <ImageBackground
        style={{ width: '100%', height: '100%', opacity: 1, resizeMode: 'cover' }}
        source={img1}
      >
        <View style={styles.logospace}>
          <Image style={styles.image} source={require('../Splash/Images/logo.png')} />
        </View>
        <View style={{ alignItems: "center" }}>
          <TouchableOpacity style={styles.emailBtn}>
            <View style={{ display: "flex", flexDirection: "row", alignItems: "center" }}>
              <View style={{ padding: 15 }}>
                <SimpleLineIcons name="envelope" size={30} color="#fff" />
              </View>
              <Text style={styles.logintxt} onPress={() => navigation.navigate('Login')}   >Sign in with Email</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity style={styles.appleBtn} onPress={() => AppleLogin()}>
            <View style={{ display: "flex", flexDirection: "row", alignItems: "center" }}>
              <View style={{ padding: 15 }}>
                <AntDesign name="apple-o" size={30} color="#fff" />
              </View>
              <Text style={styles.logintxt}   >Sign in with Apple ID</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity style={styles.facebookBtn} onPress={() => FacebookLogin()}>
            <View style={{ display: "flex", flexDirection: "row", alignItems: "center" }}>
              <View style={{ padding: 15 }}>
                <AntDesign name="facebook-square" size={30} color="#fff" />
              </View>
              <Text style={styles.logintxt}   >Sign in with Facebook</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity style={styles.googleBtn} onPress={() => GoogleLogin()}>
            <View style={{ display: "flex", flexDirection: "row", alignItems: "center" }}>
              <View style={{ padding: 15 }}>
                <AntDesign name="google" size={30} color="#fff" />
              </View>
              <Text style={styles.logintxt}   >Sign in with Google</Text>

            </View>
          </TouchableOpacity>

          <Text style={{ padding: 10, color: "#fff" }} onPress={() => navigation.navigate('Register')} >Donot have a account Register User</Text>
        </View>
      </ImageBackground>
    </View>
  )
}

export default PreLogin

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  backgroundimage: {
    width: '100%',
    height: '100%',
    opacity: 1
  },
  image: {
    width: 250,
    height: 250,
    resizeMode: "contain",
    alignSelf: "center"
  },
  logospace: {
    paddingTop: 40

  },
  emailBtn: {
    textAlign: "center",
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
    textAlign: "center",
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
    textAlign: "center",
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
    textAlign: "center",
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
  logintxt: {
    color: "white",
    fontSize: 20
  }

})
