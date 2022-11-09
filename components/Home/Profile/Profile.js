/* eslint-disable prettier/prettier */
import React, { useState, useEffect } from 'react'
import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  Image,
  TextInput,
  TouchableOpacity,
  ScrollView,
  Platform
} from 'react-native'
import * as ImagePicker from 'react-native-image-picker';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import Entypo from 'react-native-vector-icons/Entypo';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { Divider } from 'react-native-paper';

const Profile = ({ navigation }) => {
  const [icon, Seticon] = useState('eye-with-line');
  const [ricon, Setricon] = useState('lock');
  const [passwordvisible, Setpasswordvisible] = useState(true);
  const [password, Setpassword] = useState("");
  const [validationlength, Setvalidationlength] = useState("");
  const [filePath, setFilePath] = useState("");


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


  const validation = () => {
    if (password?.length < 6 || password?.length > 0) {
      Setvalidationlength("Password must be greater than 6 digits")
      Setpassword(password)
    } else if (password?.length > 10) {
      Setvalidationlength("Password must be less than 10 digits")
      Setpassword(password.slice(0, 10))
    }
  }

  const Camera = async () => {

    if (Platform.OS !== "web") {
      const data = await ImagePicker.launchCamera()
      console.log(data)
      const img = data?.assets[0]?.uri
      setFilePath(img)

    }
  }

  return (
    <View>
      <ScrollView>
        <View style={{ alignItems: "center", padding: 30 }}>
          {
            filePath !== "" ?
              (
                <TouchableOpacity>
                  <Image source={{ uri: filePath }} style={styles.image} />
                  <View style={{ padding: 10, bottom: 5, right: 6, backgroundColor: "green", position: "absolute", borderRadius: 80, alignItems: "center", justifyContent: "center" }}>
                    <MaterialIcons style={{ resizeMode: "contain", width: 30, height: 30 }} onPress={() => Camera()} name='add-a-photo' size={30} color="#fff" />
                  </View>
                </TouchableOpacity>
              )
              :
              (
                <TouchableOpacity style={[styles.logospace, styles.image]}>
                  <View style={{ padding: 10, bottom: 5, right: 6, backgroundColor: "green", position: "absolute", borderRadius: 80, alignItems: "center", justifyContent: "center" }}>
                    <MaterialIcons style={{ resizeMode: "contain", width: 30, height: 30 }} onPress={() => Camera()} name='add-a-photo' size={30} color="#fff" />
                  </View>
                </TouchableOpacity>
              )
          }
          <View style={{ alignItems: "center", padding: 30 }}></View>
          <View style={{ paddingBottom: 20 }} />
          <View style={{ height: 65, width: 330 }}>
            <Text style={styles.logintxt}>Username ***</Text>
            <View style={{ display: "flex", flexDirection: "row", alignItems: "center" }}>
              <View style={{ padding: 10 }}>
                <SimpleLineIcons name="user" size={28} color="#F28C28" />
              </View>
              <TextInput placeholder="Mark Zebarak" keyboardType="email-address" />
            </View>
            <Divider />
            <Divider />
            <Divider />
          </View>
          <View style={{ paddingBottom: 20 }} />
          <View style={{ height: 65, width: 330 }}>
            <Text style={styles.logintxt}>Email Address ***</Text>
            <View style={{ display: "flex", flexDirection: "row", alignItems: "center" }}>
              <View style={{ padding: 10 }}>
                <SimpleLineIcons name="envelope" size={28} color="#F28C28" />
              </View>
              <TextInput placeholder="admin.342@admin.com" keyboardType="email-address" />
            </View>
            <Divider />
            <Divider />
            <Divider />
          </View>

          <View style={{ paddingBottom: 20 }} />

          <View style={{ height: 65, width: 330 }}>
            <Text style={styles.logintxt}>Address ***</Text>
            <View style={{ display: "flex", flexDirection: "row", alignItems: "center" }}>
              <View style={{ padding: 10 }}>
                <Ionicons name="location-sharp" size={28} color="#F28C28" />
              </View>
              <TextInput placeholder="San Franico ,SA" keyboardType="email-address" />
            </View>
            <Divider />
            <Divider />
            <Divider />
          </View>

          <View style={{ paddingBottom: 20 }} />

          <View style={{ height: 75, width: 330 }}>
            {validationlength?.length ? <Text>{validationlength}</Text> : null}
            <Text style={styles.logintxt}>Password ***</Text>
            <View style={{ display: "flex", flexDirection: "row", alignItems: "center" }}>
              <View style={{ padding: 10 }}>
                <FontAwesome name={ricon} size={30} color="#F28C28" />
              </View>
              <TextInput
                placeholder="123456789"
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
                    validation()
                  }} />
              </View>
            </View>
            <Divider />
            <Divider />
            <Divider />
          </View>



          <View style={{ paddingBottom: 20 }} />
          <View style={{ height: 65, width: 330 }}>
            <Text style={styles.logintxt}>Phone ***</Text>
            <View style={{ display: "flex", flexDirection: "row", alignItems: "center" }}>
              <View style={{ padding: 10 }}>
                <FontAwesome name="phone" size={28} color="#F28C28" />
              </View>
              <TextInput placeholder="0347235643" keyboardType="numeric" />
            </View>
            <Divider />
            <Divider />
            <Divider />
          </View>


          <TouchableOpacity style={styles.googleBtn}>
            <View style={{ display: "flex", flexDirection: "row", alignItems: "center" }}>
              <Text style={{ fontSize: 20, color: "#fff" }}   >Save Changes</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity style={styles.googleBtn}>
            <View style={{ display: "flex", flexDirection: "row", alignItems: "center" }}>
              <Text style={{ fontSize: 20, color: "#fff" }} onPress={() => navigation.navigate('Setting')}   >Setting</Text>
            </View>
          </TouchableOpacity>
          <View style={{paddingBottom:50}} />
        </View>
      </ScrollView>


    </View>
  )
}

export default Profile

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
    width: 200,
    height: 200,
    resizeMode: "contain",
    alignSelf: "center",
    borderWidth: 10,
    borderRadius: 200,
    borderColor: "#F28C28",

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
    color: "grey",
    fontSize: 16,
    paddingLeft: 40

  },
  lineStyle: {
    borderWidth: 4,
    borderColor: 'black',
    margin: 10,
  }

})
