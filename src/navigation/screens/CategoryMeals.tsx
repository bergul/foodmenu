import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import { useRoute, RouteProp } from '@react-navigation/native';
import { FOODS } from '../../../data/dummy-data';

type UpdatesRouteProp = RouteProp<{ params: { query: string } }, 'params'>;

const CategoryMeals = () => {
    const route = useRoute<UpdatesRouteProp>();
    const query = route.params?.query;
    const selectedFood = FOODS.filter((food) => { return food.id === query });
    return (
        <View>

            <Image source={{ uri: selectedFood[0].imageUrl }} style={{ height: 100, width: 100 }} />
            <Text>{selectedFood[0].title}</Text>
            <Text>{selectedFood[0].ingredients}</Text>



        </View>
    )
}

export default CategoryMeals

const styles = StyleSheet.create({})