import { Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function CategoryGrid({ title, color }) {
    return (
        <View style={styles.gridItem}>
            <Pressable style={{ backgroundColor: color, flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <View style={{ backgroundColor: 'white', padding: 10, borderRadius: 10 }}>
                    <Text>{title}</Text>
                </View>
            </Pressable>
        </View>
    )
}

const styles = StyleSheet.create({
    gridItem: {
        flex: 1,
        margin: 15,
        height: 150,
        elevation: 5,
        shadowColor: '#171717',
        shadowOffset: { width: -2, height: 4 },
        shadowOpacity: 0.26,
        shadowRadius: 10,
        borderRadius: 10,
    }

})