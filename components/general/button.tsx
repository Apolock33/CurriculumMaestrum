import { View, TouchableOpacity, StyleSheet, Image } from 'react-native'
import React from 'react'
import Label from './label';
import Colors from '@/constants/colors';

interface ButtonProps {
    buttonWidth: number;
    buttonText: any;
    buttonTextColor: string;
    buttonBgColor?: string;
    hasIcon?: boolean;
    clickEvent?: any;
    isLoading?: boolean;
}

export default function Button({
    buttonWidth,
    buttonText,
    buttonTextColor,
    buttonBgColor = Colors.black,
    hasIcon = false,
    clickEvent,
    isLoading
}: ButtonProps) {

    const styles = StyleSheet.create({
        button: {
            width: buttonWidth,
            height: 40,
            backgroundColor: buttonBgColor,
            borderRadius: 5,
            alignItems: 'center',
            justifyContent: 'center',
            flexDirection: hasIcon ? 'row' : 'column'
        },
        textButton: {
            color: buttonTextColor,
            fontSize: 16,
            fontFamily: 'Arvo-Regular'
        }
    })

    return (
        <View style={{
            marginVertical: 15
        }}>
            <TouchableOpacity style={styles.button} onPress={clickEvent} disabled={isLoading} >
                {hasIcon && <Image
                    source={require('../../assets/icons/google.png')}
                    style={{
                        marginRight: 10,
                        width: 20,
                        height: 20
                    }}
                />}
                <Label
                    text={buttonText}
                    fontColor={buttonTextColor}
                    fontSize={16}
                />
            </TouchableOpacity>
        </View>
    )
}