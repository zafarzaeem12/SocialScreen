/* eslint-disable prettier/prettier */
import React, { useState,useEffect,useRef } from 'react'
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
import CountDown from 'react-native-countdown-component';
import img1 from '../Auth/Images/bg.png'
import OTPInputView from '@twotalltotems/react-native-otp-input'
const Verification = ({navigation}) => {
    const [timer, Settimer] = useState(0);
    const [time, setTime] = useState(10);
    const timerRef = useRef(time);

    const TimerFunction = (e, timer) => {
        if (e?._dispatchInstances?.memoizedProps?.children === "Didn't Recieved code ?Resend") {
            Settimer(timer)

        } 
    }



useEffect(() => {
    const timerId = setInterval(() => {
        timerRef.current -= 1;
        if (timerRef.current < 0) {
          clearInterval(timerId);
          Settimer(timer)
        } else {
          setTime(timerRef.current);
        }
      }, 1000);
     
})

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
                        <View style={{ height: 85, width: 330 }}>
                            <Text style={styles.logintxt}>
                                We have sent you an email containing VERIFICATION CODE and instrutions.
                                please follow the instructions to verify your email address</Text>
                        </View>


                        <OTPInputView
                            style={{ width: '80%', height: 100 }}
                            pinCount={6}
                            autoFocusOnLoad
                            codeInputFieldStyle={styles.underlineStyleBase}
                            codeInputHighlightStyle={styles.underlineStyleHighLighted}
                            onCodeFilled={(code) => {
                                if(code){
                                    navigation.navigate('Login')

                                }
                            }}
                        />

                       
                        {
                            timer > 1 ?
                                (
                                    <View style={{ paddingTop: 100 }}>
                                          <Text> {time} </Text>
                                    </View>
                                ) : 
                                (
                                    <TouchableOpacity>
                                        <View style={{ paddingTop: 100 }}>
                                            <Text onPress={(e) => TimerFunction(e, timer)} style={{ padding: 10, color: "#fff" }} >Didn't Recieved code ?Resend</Text>
                                        </View>
                                    </TouchableOpacity>
                                ) 
                                
                        }
                       
                    </View>

                </ScrollView>

            </ImageBackground>
        </View>
    )
}

export default Verification

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
        backgroundColor: "#454545",
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
    },
    borderStyleBase: {
        width: 30,
        height: 45
    },

    borderStyleHighLighted: {
        borderColor: "#03DAC6",
    },

    underlineStyleBase: {
        width: 30,
        height: 55,
        borderWidth: 0,
        fontSize: 25,
        borderBottomWidth: 1,
    },

    underlineStyleHighLighted: {
        borderColor: "#03DAC6",
    },

})
