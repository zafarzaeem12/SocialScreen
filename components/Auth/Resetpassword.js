/* eslint-disable prettier/prettier */
import React, { useState } from 'react'
import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  Image,
  TextInput,
  TouchableOpacity,
  ScrollView
} from 'react-native'
import img1 from '../Auth/Images/bg.png'
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import Entypo from 'react-native-vector-icons/Entypo';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { Divider } from 'react-native-paper';

const Resetpassword = () => {
  const [icon, Seticon] = useState('eye-with-line');
  const [ricon, Setricon] = useState('lock');
  const [passwordvisible, Setpasswordvisible] = useState(true);
  const [password, Setpassword] = useState("");
  const [confirmpassword, Setconfirmpassword] = useState("");
  const [icons, Seticons] = useState('eye-with-line');
  const [ricons, Setricons] = useState('lock');
  const [confirmpasswordvisible, Setconfirmpasswordvisible] = useState(true);
  

  const showandhide = (e) => {
    if (icon === 'eye-with-line' && ricon === 'lock') {
      Seticon('eye')
      Setricon('unlock')
      Setpasswordvisible(!passwordvisible)
    } else if (icon === 'eye' && ricon === 'unlock') {
      Seticon('eye-with-line')
      Setricon('lock')
      Setpasswordvisible(!passwordvisible)
    }
  }

  const showandhideconfirm = (e) => {
    if (icons === 'eye-with-line' && ricons === 'lock') {
      Seticons('eye')
      Setricons('unlock')
      Setconfirmpasswordvisible(!confirmpasswordvisible)
    } else if (icons === 'eye' && ricons === 'unlock') {
      Seticons('eye-with-line')
      Setricons('lock')
      Setconfirmpasswordvisible(!confirmpasswordvisible)
    }
  }

 
  return (
    <View>
      <ImageBackground
        style={{ width: '100%', height: '100%', opacity: 1, resizeMode: 'cover' }}
        source={img1}
      >
        <ScrollView>
          <View style={styles.logospace}>
            <Image style={styles.image} source={require('../Auth/Images/logo.png')} />
          </View>
          <View style={{ alignItems: "center", padding: 30 }}>


            <View style={{ paddingBottom: 20 }} />

            <View style={{ height: 75, width: 330 }}>
              
              <Text style={styles.logintxt}>New Password ***</Text>
              <View style={{ display: "flex", flexDirection: "row", alignItems: "center" }}>
                <View style={{ padding: 10 }}>
                  <FontAwesome name={ricon} size={30} color="#fff" />
                </View>
                <TextInput
                   placeholder="********"
                  value={password}
                  secureTextEntry={passwordvisible}
                  onChangeText={(text) => Setpassword(text)}
                />
                <View style={{ paddingLeft: 170 }}>
                  <Entypo
                    name={icon}
                    size={30}
                    color="#fff"
                    onPress={() => {
                      showandhide()
                    }} />
                </View>
              </View>
              <Divider />
              <Divider />
              <Divider />
            </View>
            <View style={{ paddingBottom: 20 }} />

            <View style={{ height: 75, width: 330 }}>
              <Text style={styles.logintxt}>Confirm New Password ***</Text>
              <View style={{ display: "flex", flexDirection: "row", alignItems: "center" }}>
                <View style={{ padding: 10 }}>
                  <FontAwesome name={ricons} size={30} color="#fff" />
                </View>
                <TextInput
                  placeholder="********"
                  value={confirmpassword}
                  secureTextEntry={confirmpasswordvisible}
                  onChangeText={(text) => Setconfirmpassword(text)}
                />
                <View style={{ paddingLeft: 170 }}>
                  <Entypo
                    name={icons}
                    size={30}
                    color="#fff"
                    onPress={() => {
                      showandhideconfirm()
                    }
                    } />
                </View>
              </View>
              <Divider />
              <Divider />
              <Divider />
            </View>
            <View style={{ paddingBottom: 20 }} />
           


            <TouchableOpacity style={styles.googleBtn}>
              <View style={{ display: "flex", flexDirection: "row", alignItems: "center" }}>
                <Text style={{ fontSize: 20, color: "#fff" }}   >Reset</Text>
              </View>
            </TouchableOpacity>
          </View>

        </ScrollView>

      </ImageBackground>
    </View>
  )
}

export default Resetpassword

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
  googleBtn: {
    textAlign: "center",
    height: 65,
    width: 330,
    borderRadius: 35,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 40,
    backgroundColor: "#F28C28",
    borderWidth: 2.5,
    borderColor: "white"

  },
  logintxt: {
    color: "white",
    fontSize: 16,
    paddingLeft: 40

  },
  lineStyle: {
    borderWidth: 4,
    borderColor: 'black',
    margin: 10,
  }

})