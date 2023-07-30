import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

const ScreenIndicator = ({ count, activeIndex }: { count: number, activeIndex: number }) => {
    return (
        <View style={styles.container}>
            {new Array(count).fill("1").map((_, i) => (
                <View
                    key={i}
                    style={{
                        ...styles.dot,
                        backgroundColor: i === activeIndex ? '#000' : '#0003'
                    }}
                />
            ))}
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 8,
        marginVertical: 32
    },
    dot: {
        width: 8,
        height: 8,
        borderRadius: 8,
    }
})

export default ScreenIndicator