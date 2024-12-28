import { StyleSheet, Text, View, Image, Pressable } from 'react-native'
import { Ionicons } from '@expo/vector-icons';
import React, { useLayoutEffect } from 'react'
import { useRoute, RouteProp, useNavigation } from '@react-navigation/native';
import { FOODS } from '../../../data/dummy-data';
import { useContext } from 'react';
import { FavoritesContext } from '../../../store/favoritesContext';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addFavorite } from '../../../store/redux/favorites';
import { removeFavorite } from '../../../store/redux/favorites';
type UpdatesRouteProp = RouteProp<{ params: { query: string } }, 'params'>;

const CategoryMeals = () => {
    // const
    //     favoritesContext = useContext(FavoritesContext);
    // const favs = FOODS.filter((food) => favoritesContext.ids.includes(food.id));
    // if (favs.length === 0) {
    //     return (
    //         <View style={styles.container}>
    //             <Text>No favorites found. Start adding some!</Text>

    //         </View>)
    // }
    // else return (

    //     <FoodList items={favs} />
    // )
    const favoriteFoodsIds = useSelector((state: any) => state.favoriteFoods.ids);
    const route = useRoute<UpdatesRouteProp>();
    const foodId = route.params?.query;
    // const isfavv = favoritesContext.ids.includes(query);
    const dispatch = useDispatch();
    const selectedFood = FOODS.filter((food) => { return food.id === foodId });
    const isfavv = favoriteFoodsIds.includes(foodId);
    const navigation = useNavigation();
    const pressHandler = () => {
        //navigation.navigate('Favorites', { id: query });
        console.log('pressed');
    }
    function changeFavorite() {

        if (isfavv) {
            dispatch(removeFavorite(foodId));
        }
        else {
            dispatch(addFavorite(foodId));
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