import { View, Text, StyleProp, ViewStyle, TextStyle, TouchableOpacity, StyleSheet } from 'react-native'
import React, { FC } from 'react'

interface Props {
    onPress?: () => void
    label: string,
    style?: StyleProp<ViewStyle>
    labelStyle?: StyleProp<TextStyle>
}

const PrimaryButton: FC<Props> = ({ onPress, label, style, labelStyle }) => {
    return (
        <TouchableOpacity
            onPress={onPress}
            style={styles.buttonContainer}
        >
            <Text style={[styles.text, labelStyle]}>
                {label}
            </Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    buttonContainer: {
        backgroundColor: '#000',
        paddingHorizontal: 16,
        height: 52,
        borderRadius: 100,
        alignItems: 'center',
        justifyContent: 'center'
    },
    text: {
        fontSize: 16,
        fontWeight: "600",
        color: "#fff"
    }
})

export default PrimaryButton