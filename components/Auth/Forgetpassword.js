/* eslint-disable prettier/prettier */
import React from 'react'
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

const Forgetpassword = () => {
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
            <View style={{ height: 65, width: 330 }}>
                <Text style={styles.logintxt}>Enter Email Or Phone Number ***</Text>
                <View style={{ display: "flex", flexDirection: "row", alignItems: "center" }}>
                    <View style={{ padding: 10 }}>
                        <SimpleLineIcons name="envelope" size={28} color="#fff" />
                    </View>
                    <TextInput placeholder="admin.342@admin.com" keyboardType="email-address" />
                </View>
                <Divider />
                <Divider />
                <Divider />
            </View>
            <TouchableOpacity style={styles.googleBtn}>
                <View style={{ display: "flex", flexDirection: "row", alignItems: "center" }}>
                    <Text style={{ fontSize: 20, color: "#fff" }}   >Get Code</Text>
                </View>
            </TouchableOpacity>
        </View>

    </ScrollView>

    </ImageBackground>
</View>
  )
}

export default Forgetpassword

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
    width: 150,
    height: 150,
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
    backgroundColor: "#454545",
    borderWidth: 2.5,
    borderColor: "white"

},
logintxt: {
    color: "white",
    fontSize: 16,
    paddingLeft:40

},
lineStyle: {
    borderWidth: 4,
    borderColor: 'black',
    margin: 10,
}

})