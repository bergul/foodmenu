import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useRoute, RouteProp } from '@react-navigation/native';
type UpdatesRouteProp = RouteProp<{ params: { query: string } }, 'params'>;

const CategoryMeals = () => {
    const route = useRoute<UpdatesRouteProp>();
    const query = route.params?.query;
    return (
        <View>
            <Text>{query}</Text>
        </View>
    )
}

export default CategoryMeals

const styles = StyleSheet.create({})