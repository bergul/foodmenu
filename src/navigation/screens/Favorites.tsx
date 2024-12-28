import { StyleSheet, Text, View } from 'react-native'
import React, { useContext } from 'react'
import { FavoritesContext } from '../../../store/favoritesContext';
import { FOODS } from '../../../data/dummy-data';
import Food from '../../../models/food';
import FoodList from '../../../components/FoodList';
import { useSelector } from 'react-redux';
import { store } from '../../../store/redux/store';
export default function Favorites() {
    //const favoritesContext = useContext(FavoritesContext);
    const favoriteFoodsIds = useSelector((state: any) => state.favoriteFoods.ids);
    const favs = FOODS.filter((food) => favoriteFoodsIds.includes(food.id));
    if (favs.length === 0) {
        return (
            <View style={styles.container}>
                <Text>No favorites found. Start adding some!</Text>
            </View>)
    }
    else return (
        <FoodList items={favs} />
    )
}

const styles = StyleSheet.create({})