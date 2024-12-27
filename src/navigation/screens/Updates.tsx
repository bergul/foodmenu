import { Text } from '@react-navigation/elements';
import { StyleSheet, View, FlatList } from 'react-native';
import { useRoute, RouteProp } from '@react-navigation/native';
import { FOODS } from '../../../data/dummy-data';
import FoodItem from '../../../components/FoodItem';

type UpdatesRouteProp = RouteProp<{ params: { query: string } }, 'params'>;

export function Updates() {
  const route = useRoute<UpdatesRouteProp>();
  const query = route.params?.query;
  const selectedFood = FOODS.filter((food) => food.categoryIds.indexOf(query) >= 0);

  function renderFoodItem(item) {
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
    <View style={styles.container}>
      <Text>{query}</Text>
      <FlatList
        data={selectedFood}
        keyExtractor={(item) => item.id}
        renderItem={renderFoodItem}
      />
    </View>
  );
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
  },
});


