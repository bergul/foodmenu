import { Text } from '@react-navigation/elements';
import { StyleSheet, View, FlatList } from 'react-native';
import { CATEGORIES } from '../../../data/dummy-data';
import React from 'react';
import CategoryGrid from '../../../components/CategoryGrid';




export function Settings() {
  function renderCategoryItem({ itemData }) {

    return (<CategoryGrid title={itemData.item.title} color={itemData.item.color} />);

  }
  return (
    <View style={styles.container}>
      <FlatList data={CATEGORIES} keyExtractor={(item) => item.id} renderItem={renderCategoryItem} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    gap: 10,
  },
  row: {
    flexDirection: 'row',
    gap: 10,
  },
});
