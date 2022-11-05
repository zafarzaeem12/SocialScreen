/* eslint-disable prettier/prettier */
import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Calendar, CalendarList, Agenda } from 'react-native-calendars';

const Calender = () => {

    return (
        <View >
            <View style={{ padding:40,  flexDirection: 'column',justifyContent: 'center',alignItems: 'center',}} ><Text style={{ fontSize: 20 }}>Calendar</Text></View>
            <CalendarList
                // Callback which gets executed when visible months change in scroll view. Default = undefined
                onVisibleMonthsChange={(months) => { months.map((data) => data) }}
                // Max amount of months allowed to scroll to the past. Default = 50
                pastScrollRange={50}
                // Max amount of months allowed to scroll to the future. Default = 50
                futureScrollRange={50}
                // Enable or disable scrolling of calendar list
                scrollEnabled={true}
                // Enable or disable vertical scroll indicator. Default = false
                showScrollIndicator={true}
                selectedDayTextColor="#FFFFFF"
            />

        </View>

    )
}

export default Calender

const styles = StyleSheet.create({})