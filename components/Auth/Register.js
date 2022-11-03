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

const Register = () => {
    const [icon, Seticon] = useState('eye-with-line');
    const [ricon, Setricon] = useState('lock');
    const [passwordvisible, Setpasswordvisible] = useState(true);
    const [password, Setpassword] = useState("");
    const [confirmpassword, Setconfirmpassword] = useState("");
    const [icons, Seticons] = useState('eye-with-line');
    const [ricons, Setricons] = useState('lock');
    const [confirmpasswordvisible, Setconfirmpasswordvisible] = useState(true);
    const [validationlength,Setvalidationlength] = useState("");
    const [confirmvalidationlength,Setconfirmvalidationlength] = useState("");

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

    const validation = () => {
        if( password?.length < 6){
            Setvalidationlength("Password must be greater than 6 digits")
        }else if( password?.length > 10 ){
            Setvalidationlength("Password must be less than 10 digits")
            Setpassword(password.slice(0,10))
        }
    }

    const Confirmvalidation = () => {

        if(confirmpassword?.length < 6){
            Setconfirmvalidationlength("Confirm Password must be greater than 6 digits")
        }
        
        else if(confirmpassword?.length > 10 ){
            Setconfirmvalidationlength("Confirm Password must be less than 10 digits")
            Setconfirmpassword(confirmpassword.slice(0,10))
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
                    {/* <Image style={styles.image} source={require('../Auth/Images/logo.png')} /> */}
                    <MaterialIcons style={styles.image} name='add-a-photo' size={140} color="#fff" />
                </View>
                <View style={{ alignItems: "center", padding: 30 }}>

                    <View style={{ height: 65, width: 330 }}>
                        <Text style={styles.logintxt}>Username ***</Text>
                        <View style={{ display: "flex", flexDirection: "row", alignItems: "center" }}>
                            <View style={{ padding: 10 }}>
                                <SimpleLineIcons name="user" size={28} color="#fff" />
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
                                <SimpleLineIcons name="envelope" size={28} color="#fff" />
                            </View>
                            <TextInput placeholder="admin.342@admin.com" keyboardType="email-address" />
                        </View>
                        <Divider />
                        <Divider />
                        <Divider />
                    </View>

                    <View style={{ paddingBottom: 20 }} />

                    <View style={{ height: 75, width: 330 }}>
                    {validationlength?.length ? <Text>{validationlength}</Text> : null }                
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
                            <View style={{ paddingLeft: 170 }}>
                                <Entypo 
                                    name={icon} 
                                    size={30} 
                                    color="#fff" 
                                    onPress={() => {
                                        showandhide()
                                        validation()
                                        } } />
                            </View>
                        </View>
                        <Divider />
                        <Divider />
                        <Divider />
                    </View>
                    <View style={{ paddingBottom: 20 }} />

                    <View style={{ height: 75, width: 330 }}>
                    {confirmvalidationlength?.length ? <Text>{confirmvalidationlength}</Text> : null }                
                    <Text style={styles.logintxt}>Confirm Password ***</Text>
                                    <View style={{ display: "flex", flexDirection: "row", alignItems: "center" }}>
                                        <View style={{ padding: 10 }}>
                                            <FontAwesome name={ricons} size={30} color="#fff" />
                                        </View>
                                        <TextInput
                                            placeholder="123456789"
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
                                                    Confirmvalidation()
                                                    }
                                                } />
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
                                <FontAwesome name="phone" size={28} color="#fff" />
                            </View>
                            <TextInput placeholder="0347235643" keyboardType="numeric" />
                        </View>
                        <Divider />
                        <Divider />
                        <Divider />
                    </View>


                    <TouchableOpacity style={styles.googleBtn}>
                        <View style={{ display: "flex", flexDirection: "row", alignItems: "center" }}>
                            <Text style={{ fontSize: 20, color: "#fff" }}   >Sign up</Text>
                        </View>
                    </TouchableOpacity>
                    <View style={{ paddingTop: 100 }}>
                        <Text style={{ padding: 10, color: "#fff" }} >Already have account Login user</Text>
                    </View>
                </View>

            </ScrollView>

            </ImageBackground>
        </View>
    )
}

export default Register

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
