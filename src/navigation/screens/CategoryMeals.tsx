import { StyleSheet, Text, View, Image, Pressable } from 'react-native'
import { Ionicons } from '@expo/vector-icons';
import React, { useLayoutEffect } from 'react'
import { useRoute, RouteProp, useNavigation } from '@react-navigation/native';
import { FOODS } from '../../../data/dummy-data';

type UpdatesRouteProp = RouteProp<{ params: { query: string } }, 'params'>;

const CategoryMeals = () => {
    const route = useRoute<UpdatesRouteProp>();
    const query = route.params?.query;
    const selectedFood = FOODS.filter((food) => { return food.id === query });
    const navigation = useNavigation();
    const pressHandler = () => {
        navigation.navigate('Favorites', { id: query });

    }
    useLayoutEffect(() => {
        navigation.setOptions({
            headerRight: () => {
                return <Pressable onPress={pressHandler} style={({ pressed }) => (pressed ? styles.pressed : null)}><Ionicons name='star-half' color='black' size={24} /></Pressable>
            }
        })
    }, [navigation]);
    return (
        <View>

            <Image source={{ uri: selectedFood[0].imageUrl }} style={{ height: 100, width: 100 }} />
            <Text>{selectedFood[0].title}</Text>
            <Text>{selectedFood[0].ingredients}</Text>



        </View>
    )
}

export default CategoryMeals

const styles = StyleSheet.create({
    pressed: {

        opacity: 0.5,



    }

})