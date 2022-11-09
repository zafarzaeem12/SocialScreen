/* eslint-disable prettier/prettier */
import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const Poll = () => {
    return (
        <View>
        <View style={{alignSelf:"center",marginTop:10}}>
            <Text style={{fontSize:20,color:"black",fontWeight:"bold"}}>Polls</Text>
        </View>
            <View
                style={{
                    width: '90%',
                    backgroundColor: "#ffffff",
                    height: '48%',
                    marginTop: 50,
                    borderRadius: 16,
                    padding: 4,
                    alignItems: 'center',
                    alignSelf:"center",
                    paddingHorizontal:20,
                    paddingTop:20,
                    
                }}>
                <View
                    style={{
                        flexDirection: 'row',
                        marginBottom: 20,
                    }}>
                    <View
                        style={{
                            alignItems: 'center',
                        }}>
                        <Text
                            style={{
                                color: "#F28C28",
                                fontWeight: 'bold',
                                backgroundColor: "#C9D4E7",
                                padding: 4,
                                borderRadius: 5,
                                fontSize: 18,
                                marginTop: 5,
                                marginLeft: 3
                                
                            }}>
                            Q
                        </Text>
                    </View>
                    <View
                        style={{
                            marginLeft: 5,
                        }}>
                        <Text
                            numberOfLines={2}
                            style={{
                                fontSize: 20,
                                fontWeight: 'bold',
                                color: "black",
                            }}>
                            Do you want to go ahead with in the proposal ?{' '}
                        </Text>
                    </View>
                </View>

                <View
                    style={{
                        width: '90%',
                        backgroundColor: "#C9D4E7",
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        height: 38,
                        borderRadius: 12,
                        // paddingHorizontal: 20,
                        alignItems: 'center',
                        marginBottom: 20,
                    }}>
                    <View
                        style={{
                            flex: 7,
                            backgroundColor: "#F28C28",
                            width: '100%',
                            height: '100%',
                            // borderTopLeftRadius: 12,
                            // borderBottomLeftRadius: 12,
                            borderRadius: 10,
                            justifyContent: 'center',
                        }}>
                        <Text style={{ left: 12, color: "white", fontWeight: 'bold' }}>
                            Yes
                        </Text>
                    </View>
                    <View
                        style={{
                            flex: 3,
                            width: '100%',
                            height: '100%',
                            alignItems: 'center',
                            justifyContent: 'center',
                        }}>
                        <Text
                            style={{
                                color: "black",
                                fontWeight: 'bold',
                                fontSize:20
                            }}>
                            75%
                        </Text>
                    </View>
                </View>
                <View
                    style={{
                        width: '90%',
                        backgroundColor: "#C9D4E7",
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        height: 38,
                        borderRadius: 12,
                        // paddingHorizontal: 20,
                        alignItems: 'center',
                    }}>
                    <View
                        style={{
                            flex: 3,
                            backgroundColor: "#F28C28",
                            width: '100%',
                            height: '100%',
                            // borderTopLeftRadius: 12,
                            // borderBottomLeftRadius: 12,
                            borderRadius: 10,
                            justifyContent: 'center',
                        }}>
                        <Text style={{ left: 12, color: "#fff", fontWeight: 'bold' }}>
                            No
                        </Text>
                    </View>
                    <View
                        style={{
                            flex: 7,
                            width: '100%',
                            height: '100%',
                            alignItems: 'center',
                            justifyContent: 'center',
                        }}>
                        <Text
                            style={{
                                color: "black",
                                fontWeight: 'bold',
                                paddingLeft: 120,
                                fontSize:20
                            }}>
                            25%
                        </Text>
                    </View>
                </View>
            </View>
        </View>
        
    )
}

export default Poll

const styles = StyleSheet.create({})
