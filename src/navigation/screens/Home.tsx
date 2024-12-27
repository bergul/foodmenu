import { Button, Text } from '@react-navigation/elements';
import { StyleSheet, View } from 'react-native';
import FavoritesContextProvider from '../../../store/favoritesContext';

export function Home() {
  return (

    <View style={styles.container}>
      <Text>Home Screen</Text>
      <Text>Open up 'src/App.tsx' to start working on your app!</Text>
      <Button screen="Profile" params={{ user: 'jane' }}>
        Go to Profile
      </Button>
      <Button screen="Settings">Categories</Button>
      <Button screen="CategoryMeals">Meals</Button>
      <Button screen="Favorites">Favorites</Button>
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
});
