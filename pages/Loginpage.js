import { Button, Keyboard, StyleSheet, Text, TextInput, TouchableWithoutFeedback, View } from 'react-native'
import { useEffect, useState } from 'react';

import Card from '../components/Card/index';
import { Listpage } from './Listpage';
import React from 'react'

export const Loginpage = () => {
    const [usernameValue, setUsernameValue] = useState('');
    const [phoneValue, setPhoneValue] = useState('');
    const [emailValue, setEmailValue] = useState('');
    const [confirmed, setConfirmed] = useState(false);
    const [incorrectEmail, setIncorrectEmail] = useState(false)

    const handlerInputUsername = () => {
        setUsernameValue()
    }

    const handlerInputNumber = text => {
        setPhoneValue(text.replace(/[^0-9]/g, ''))
    }


    const handlerInputEmail = text => {
        setEmailValue(text.replace(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3,4})+$/))
    }


    const handlerResetInput = () => {
        setConfirmed(false);
        setUsernameValue('');
        setPhoneValue('');
        setEmailValue('');
        setIncorrectEmail(false);

    }

    function handlerConfirmInput() {
        let putEmail = emailValue;
        let emailRegex = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;
        if (emailRegex.test(putEmail)) {
            setConfirmed(true);
            setIncorrectEmail(false);

        } else {
            alert("La dirección de email es incorrecta. ");
            setIncorrectEmail(true);
        }
    }



    return (

        <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>

            {confirmed ? (<Listpage></Listpage>) :

                <Card style={{ ...styles.inputContainer }}>
                    <Text style={styles.login}> Welcome onboard with us! </Text>
                    <Text style={{ fontFamily: 'MontBold', fontSize: 20, padding: 8 }} > Login </Text>

                    <View >
                        <TextInput
                            style={styles.textinput}
                            placeholder='Username'
                            value={usernameValue}
                            maxLength={15}
                            autoCorrect={false}
                            blurOnSubmit
                            onChangeText={handlerInputUsername}

                        ></TextInput>

                        <TextInput
                            style={styles.textinput}
                            placeholder='Phone number'
                            autoCapitalize='none'
                            autoCorrect={false}
                            keyboardType='numeric'
                            maxLength={10}
                            value={phoneValue}
                            blurOnSubmit
                            onChangeText={handlerInputNumber}
                        ></TextInput>

                        <TextInput
                            style={styles.textinput}
                            placeholder='Email'
                            autoCapitalize='none'
                            value={emailValue}
                            autoCorrect={false}
                            blurOnSubmit
                            onChangeText={handlerInputEmail}

                        ></TextInput>
                        {incorrectEmail && (<Text> Incorrect email </Text>)}
                    </View>
                    <View style={styles.buttons} >
                        <Button title='Clean' onPress={() => handlerResetInput()} />
                        <Button title='Start' onPress={() => handlerConfirmInput()} disabled={phoneValue.length < 2 || emailValue.length < 2 ? true : false} />
                    </View>
                </Card>

            }
        </TouchableWithoutFeedback>

    )
}


const styles = StyleSheet.create({

    login: {
        fontFamily: 'MontMedium',
        padding: 5,
    },

    textinput: {
        margin: 10,
        padding: 10,
        backgroundColor: 'white',

        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.25,
        shadowRadius: 1.84,
        elevation: 2,
    },

    buttons: {
        marginTop: 15,
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'space-between',
        paddingHorizontal: 15,
    }
})