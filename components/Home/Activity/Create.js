/* eslint-disable prettier/prettier */
import React from 'react'
import { StyleSheet, Text, View, TextInput, ScrollView, TouchableOpacity } from 'react-native'
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import { Divider } from 'react-native-paper';

const Create = () => {
    return (
        <View>
        <View style={{alignSelf:"center",marginTop:20}}>
            <Text style={{fontSize:23,fontWeight:"bold"}}>Activity Creation</Text>
        </View>
            <View
                style={{
                    width: '90%',
                    backgroundColor: "#ffffff",
                    height: '75%',
                    marginTop: 40,
                    borderRadius: 16,
                    padding: 4,
                    alignSelf: "center",
                    paddingHorizontal: 20,
                    paddingTop: 20,
                    alignItems: 'center'

                }}

            >
               
                <ScrollView>
                    <View style={{ paddingBottom: 10 }} />
                    <View style={{ height: 65, width: 330 }}>
                        <View style={{ display: "flex", flexDirection: "row", alignItems: "center" }}>
                            <TextInput style={{fontSize:20}} placeholder="Title" keyboardType="email-address" />
                        </View>
                        <Divider />
                        <Divider />
                        <Divider />
                    </View>
                    <View style={{ paddingBottom: 10 }} />
                    <View style={{ height: 65, width: 330 }}>
                        <View style={{ display: "flex", flexDirection: "row", alignItems: "center" }}>
                            <TextInput style={{fontSize:20}} placeholder="Type" keyboardType="email-address" />
                        </View>
                        <Divider />
                        <Divider />
                        <Divider />
                    </View>
                    <View style={{ paddingBottom: 10 }} />
                    <View style={{ height: 65, width: 330 }}>
                        <View style={{ display: "flex", flexDirection: "row", alignItems: "center" }}>
                            <TextInput style={{fontSize:20}} placeholder="Date" keyboardType="email-address" />
                        </View>
                        <Divider />
                        <Divider />
                        <Divider />
                    </View>
                    <View style={{ paddingBottom: 10 }} />
                    <View style={{ height: 65, width: 330 }}>
                        <View style={{ display: "flex", flexDirection: "row", alignItems: "center" }}>
                            <TextInput style={{fontSize:20}} placeholder="Start Time" keyboardType="email-address" />
                        </View>
                        <Divider />
                        <Divider />
                        <Divider />
                    </View>
                    <View style={{ paddingBottom: 10 }} />
                    <View style={{ height: 65, width: 330 }}>
                        <View style={{ display: "flex", flexDirection: "row", alignItems: "center" }}>
                            <TextInput style={{fontSize:20}} placeholder="End Time" keyboardType="email-address" />
                        </View>
                        <Divider />
                        <Divider />
                        <Divider />
                    </View>
                    <View style={{ paddingBottom: 10 }} />
                    <View style={{ height: 65, width: 330 }}>
                        <View style={{ display: "flex", flexDirection: "row", alignItems: "center" }}>
                            <TextInput style={{fontSize:20}} placeholder="Description" keyboardType="email-address" />
                        </View>
                        <Divider />
                        <Divider />
                        <Divider />
                    </View>
                    <View style={{ paddingBottom: 10 }} />
                    <View style={{ height: 65, width: 330 }}>
                        <View style={{ display: "flex", flexDirection: "row", alignItems: "center" }}>
                            <TextInput style={{fontSize:20}} placeholder="With Whom" keyboardType="email-address" />
                        </View>
                        <Divider />
                        <Divider />
                        <Divider />
                    </View>
                    <View style={{ paddingBottom: 10 }} />
                    <View style={{ height: 65, width: 330 }}>
                        <View style={{ display: "flex", flexDirection: "row", alignItems: "center" }}>
                            <TextInput  style={{fontSize:20}} placeholder="Set Reminder" keyboardType="email-address" />
                        </View>
                        <Divider />
                        <Divider />
                        <Divider />
                    </View>
                    <TouchableOpacity style={styles.googleBtn}>
                        <View style={{ display: "flex", flexDirection: "row", alignItems: "center" }}>
                            <Text style={{ fontSize: 20, color: "#fff" }}   >Create</Text>
                        </View>
                    </TouchableOpacity>
                    <View style={{paddingBottom:100}}>

                    </View>

                </ScrollView>

            </View>
        </View>
    )
}

export default Create

const styles = StyleSheet.create({
    googleBtn: {
        textAlign: "center",
        height: 65,
        width: 300,
        borderRadius: 35,
        alignItems: "center",
        justifyContent: "center",
        marginTop: 40,
        backgroundColor: "#F28C28",
        borderWidth: 2.5,
        borderColor: "white"
    
      },
})
