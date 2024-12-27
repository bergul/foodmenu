import { StyleSheet, Text, View, Image, Pressable } from 'react-native'
import { Ionicons } from '@expo/vector-icons';
import React, { useLayoutEffect } from 'react'
import { useRoute, RouteProp, useNavigation } from '@react-navigation/native';
import { FOODS } from '../../../data/dummy-data';
import { useContext } from 'react';
import { FavoritesContext } from '../../../store/favoritesContext';
import { useEffect } from 'react';


type UpdatesRouteProp = RouteProp<{ params: { query: string } }, 'params'>;

const CategoryMeals = () => {
    const
        favoritesContext = useContext(FavoritesContext);

    const route = useRoute<UpdatesRouteProp>();
    const query = route.params?.query;
    const isfavv = favoritesContext.ids.includes(query);
    const selectedFood = FOODS.filter((food) => { return food.id === query });
    const navigation = useNavigation();
    const pressHandler = () => {
        //navigation.navigate('Favorites', { id: query });
        console.log('pressed');
    }
    function changeFavorite() {

        if (isfavv) {
            favoritesContext.removeFavorite(query);
        }
        else {
            favoritesContext.addFavorite(query);
        }

    }
    useLayoutEffect(() => {
        navigation.setOptions({
            headerRight: () => {
                return <Pressable style={({ pressed }) => (pressed ? styles.pressed : null)}><Ionicons name={isfavv ? 'star' : 'star-outline'} color='black' size={24} onPress={changeFavorite} /></Pressable>
            }
        })
    }, [navigation, isfavv, changeFavorite]);
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