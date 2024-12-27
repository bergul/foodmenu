import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import Link from 'next/link'

interface FoodItemProps {
    id: string;
    title: string;
    imageUrl: string;
    affordability: string;
    complexity: string;
}

export default function FoodItem({ id, title, imageUrl, affordability, complexity }: FoodItemProps) {
    return (
        <View>
            <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'flex-start' }}>
                <Image source={{ uri: imageUrl }} style={{ width: 200, height: 200 }} />
                <View>
                    <Text style={styles.item}>{title}</Text>

                    <Text style={styles.item}>{affordability}</Text>
                    <Text style={styles.item}>{complexity}</Text>
                </View></View><Link href={`../category-meals/?query=${id}`}>Incele</Link></View>
    )
}



const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    item: {
        padding: 10,
        marginVertical: 8,
        marginHorizontal: 16,
        backgroundColor: '#f9c2ff',
        textAlign: 'center',
        fontSize: 20,
        color: 'black',
    },
})