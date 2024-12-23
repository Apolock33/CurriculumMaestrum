import { View, TextInput, StyleSheet } from 'react-native'
import React from 'react'
import Label from './label';


interface InputProps {
    placeholder: string;
    autocapitalize?: "none" | "sentences" | "words" | "characters" | undefined;
    autocomplete?: any;
    inputWidth: number;
    labelText?: string;
    labelColor?: string;
    labelSize?: number;
    isPassword?: boolean;
    value: string;
    handleChange?: (e: any) => void;
}

export default function Input({
    placeholder,
    autocapitalize,
    autocomplete,
    inputWidth,
    labelText,
    labelColor,
    labelSize,
    isPassword = false,
    value,
    handleChange
}: InputProps) {

    const styles = StyleSheet.create({
        input: {
            padding: 10,
            width: inputWidth,
            height: 40,
            backgroundColor: '#fff',
            borderRadius: 5,
            borderWidth: 1,
            borderColor: '#1c1c1c',
            fontSize: 16,
            fontFamily: 'Arvo-Regular',
            color: '#1c1c1c'
        }
    });

    return (
        <View style={{
            marginVertical: 10
        }}>
            <Label
                text={labelText}
                fontColor={labelColor}
                fontSize={labelSize}
            />
            <TextInput
                autoCapitalize={autocapitalize}
                autoComplete={autocomplete}
                autoCorrect={false}
                placeholder={placeholder}
                style={styles.input}
                inputMode={isPassword ? 'text' : 'email'}
                secureTextEntry={isPassword}
                returnKeyType='done'
                value={value}
                onChangeText={handleChange}
            />
        </View>
    )
}

