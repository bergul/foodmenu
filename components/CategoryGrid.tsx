import { Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Link from 'next/link'

export default function CategoryGrid({ title, color, source }) {


    return (
        <View style={styles.gridItem}>

            <View style={{ backgroundColor: 'white', padding: 10, borderRadius: 10 }}>
                <Link style={{ backgroundColor: color, flex: 1, justifyContent: 'center', alignItems: 'center' }} href={`./updates/?query=${source}`}> {title}</Link>
            </View>

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