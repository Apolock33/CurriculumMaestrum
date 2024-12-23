import { View, Text } from 'react-native'
import React from 'react'

interface LabelProps {
    fontColor?: string;
    fontSize?: number;
    text?: string;
    labelHorizontalMargin?: number;
}

export default function Label({ fontColor, fontSize, labelHorizontalMargin, text }: LabelProps) {
    if (!text) return null;

    return (
        <Text style={{
            color: fontColor,
            fontSize: fontSize,
            marginHorizontal: labelHorizontalMargin,
            marginVertical: 5,
            fontFamily: 'Arvo-Regular'
        }}>
            {text}
        </Text>
    )
}