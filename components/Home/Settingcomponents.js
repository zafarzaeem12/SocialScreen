/* eslint-disable prettier/prettier */
import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import ToggleSwitch from 'toggle-switch-react-native';
const Settingcomponents = ({ name, icon }) => {
    return (
        <View
            style={{
                width: '90%',
                backgroundColor: "#ffffff",
                height: '9%',
                marginTop: 40,
                borderRadius: 16,
                alignItems: 'center',
                alignSelf: "center",
                paddingHorizontal: 20,
                paddingTop: 10,

            }}
        >
            <View style={{ display: "flex", flexDirection: "row", alignSelf: "flex-start", paddingLeft: 20, alignItems: "center" }}>
                {
                    icon === "logout" ?
                        (
                            <View>
                                <AntDesign name={icon} size={25} color="#F28C28" style={{ transform: [{ rotate: '270deg' }] }} />
                            </View>
                        ) :
                        icon === "bell" ?
                            (
                                <>
                                    <View>
                                        <SimpleLineIcons name={icon} size={25} color="#F28C28" />
                                    </View>

                                </>
                            ) :
                            (
                                <View>
                                    <SimpleLineIcons name={icon} size={25} color="#F28C28" />
                                </View>
                            )
                }
                {
                    name === "Recived Push Notification" ?
                        (
                            <>
                                <View style={{ paddingLeft: 20 }}>
                                    <Text style={{ fontSize: 18, fontWeight: "300" }}>{name}</Text>
                                </View>
                                <View style={{ paddingLeft: 10 }}>
                                    <ToggleSwitch
                                        isOn={true}
                                        onColor="green"
                                        offColor="red"
                                        size="small"
                                        onToggle={isOn => console.log("changed to : ", isOn)}
                                    />
                                </View>
                            </>
                        ) :
                        (
                            <View style={{ paddingLeft: 20 }}>
                                <Text style={{ fontSize: 18, fontWeight: "300" }}>{name}</Text>
                            </View>
                        )
                }

            </View>
        </View>
    )
}

export default Settingcomponents

const styles = StyleSheet.create({})
