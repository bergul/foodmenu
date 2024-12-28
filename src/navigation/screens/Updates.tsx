import { Text } from '@react-navigation/elements';
import { StyleSheet, View, FlatList } from 'react-native';
import { useRoute, RouteProp, useNavigation } from '@react-navigation/native';
import { FOODS, CATEGORIES } from '../../../data/dummy-data';
import FoodItem from '../../../components/FoodItem';
import { useEffect, useLayoutEffect } from 'react';
import FoodList from '../../../components/FoodList';

type UpdatesRouteProp = RouteProp<{ params: { query: string } }, 'params'>;

export function Updates() {
  const route = useRoute<UpdatesRouteProp>();
  const query = route.params?.query;
  const navigation = useNavigation();
  const selectedFood = FOODS.filter((food) => { return food.categoryIds.indexOf(query) >= 0 });
  console.log(selectedFood);
  const categoryTitle = CATEGORIES.find((category) => category.id === query)?.title;

  useLayoutEffect(() => { navigation.setOptions({ title: categoryTitle }) }, [navigation, categoryTitle]);




  return (
    <FoodList items={selectedFood} />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

});


