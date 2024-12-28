import React from 'react';
import { View, FlatList, Text, StyleSheet } from 'react-native';
import FoodItem from './FoodItem';




export default function FoodList({ items }) {

    function renderFoodItem({ item }) {
        const foodItemProps = {
            id: item.id,
            title: item.title,
            imageUrl: item.imageUrl,
            complexity: item.complexity,
            affordability: item.affordability,
        };

        return <FoodItem {...foodItemProps} />
    };
    return (
        < View style={styles.container} >

            <FlatList
                data={items}
                keyExtractor={(item) => item.id}
                renderItem={renderFoodItem}
            />
        </View >
    )
}

const styles = StyleSheet.create({})

