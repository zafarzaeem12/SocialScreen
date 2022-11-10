/* eslint-disable prettier/prettier */
import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { CreditCardInput, LiteCreditCardInput } from "react-native-credit-card-input-view";

const CardDetails = ({navigation}) => {
    
    
    // const USE_LITE_CREDIT_CARD_INPUT = true;
    // console.log(USE_LITE_CREDIT_CARD_INPUT)
    const handlechange = () => {
        console.log("changes required");
    }

    // const _onFocus = (field) => {
    //     console.log(field);
    // }


    return (
        
        <CreditCardInput
                autoFocus

                requiresName
                requiresCVC
                requiresPostalCode

                labelStyle={styles.label}
                inputStyle={styles.input}
                validColor={"black"}
                invalidColor={"red"}
                placeholderColor={"darkgray"}
                onChange={() => handlechange()} 

                // onFocus={() => _onFocus()}

                />
      
    )
}

export default CardDetails

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#F5F5F5",
        marginTop: 60,
      },
      label: {
        color: "black",
        fontSize: 12,
      },
      input: {
        fontSize: 16,
        color: "black",
      },
})
