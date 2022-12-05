/* eslint-disable prettier/prettier */
import React,{useState} from 'react'
import { StyleSheet, Text, View, ImageBackground, Image, TextInput, TouchableOpacity } from 'react-native'
import img1 from '../Auth/Images/bg.png'
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import Entypo from 'react-native-vector-icons/Entypo';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { Divider } from 'react-native-paper';

const Login = ({navigation}) => {
  const [icon,Seticon] = useState('eye-with-line');
  const [ricon , Setricon] = useState('lock');
  const [passwordvisible,Setpasswordvisible] = useState(true);
  const [password,Setpassword] = useState("");
  const [email,setEmail] = useState("");
  const [profiledata,setData] = useState({});

  const showandhide = (e) => {
   if(icon === 'eye-with-line' && ricon === 'lock'){
      Seticon('eye')
      Setricon('unlock')
      Setpasswordvisible(!passwordvisible)
   }else if( icon === 'eye'&& ricon === 'unlock'){
    Seticon('eye-with-line')
    Setricon('lock')
    Setpasswordvisible(!passwordvisible)
   }
  }

  const Login_Api_Integration = async () => {
    try{
      const payload ={
        email : email,
        password: password 
      }
    
      const datas = await fetch(`http://10.0.4.79:3000/users/login`, {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(payload)
    });
      const User_LoggedIn = await datas.json();
      console.log("User_LoggedIn",User_LoggedIn)
      if(User_LoggedIn.status === 200){
        setData(User_LoggedIn?.data)
        navigation.navigate('Profile',  profiledata)
      }else{
        navigation.navigate('Login')  

      }
    } catch(err){
      console.log('',err)
    }

    
  }

  console.log(data);

  return (
    <View>
      <ImageBackground
        style={{ width: '100%', height: '100%', opacity: 1, resizeMode: 'cover' }}
        source={img1}
      >
        <View style={styles.logospace}>
          <Image style={styles.image} source={require('../Splash/Images/logo.png')} />
        </View>
        <View style={{ alignItems: "center", padding: 30 }}>
        
          <View style={{ height: 65, width: 330 }}>
            <Text style={styles.logintxt}>Email Address ***</Text>
            <View style={{ display: "flex", flexDirection: "row", alignItems: "center" }}>
              <View style={{ padding: 10 }}>
                <SimpleLineIcons name="envelope" size={28} color="#fff" />
              </View>
              <TextInput 
                placeholder="admin.342@admin.com" 
                keyboardType="email-address"
                onChangeText={(text) => setEmail(text)} 
                value={email}
                 />
            </View>
            <Divider />
          </View>
          
            <View style={{paddingBottom:20}} />

          <View style={{ height: 65, width: 330 }}>
            <Text style={styles.logintxt}>Password ***</Text>
            <View style={{ display: "flex", flexDirection: "row", alignItems: "center" }}>
              <View style={{ padding: 10 }}>
                <FontAwesome name={ricon} size={30} color="#fff" />
              </View>
                <TextInput 
                  placeholder="123456789" 
                  value={password} 
                  secureTextEntry={passwordvisible} 
                  onChangeText={(text) => Setpassword(text)} 
                  />
                <View style={{paddingLeft:170 }}>
                  <Entypo name={icon} size={30} color="#fff" onPress={() => showandhide()} />
                </View>
            </View>
            <Divider />
            <Divider />
          </View>

          <View style={{paddingTop:20}}>
              <Text style={{ padding: 10, color: "#fff",fontSize:22 }} onPress={() => navigation.navigate('Forgetpassword')} >Forget Password?</Text>
            </View>
          

            <TouchableOpacity style={styles.googleBtn} onPress={() => Login_Api_Integration()}>
              <View style={{ display: "flex", flexDirection: "row", alignItems: "center" }}>
                <Text style={{fontSize:20,color:"#fff"}}    >Login</Text>
              </View>
            </TouchableOpacity>
            <View style={{paddingTop:80}}>
              <Text style={{ padding: 10, color: "#fff" }} onPress={() => navigation.navigate('Register')} >Donot have a account Register User</Text>
            </View>
          </View>
        
      </ImageBackground>
    </View>
  )
}

export default Login

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
    fontSize: 16
  },
  lineStyle: {
    borderWidth: 4,
    borderColor: 'black',
    margin: 10,
  }

})
