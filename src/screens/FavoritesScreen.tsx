import React from 'react';
import {Text, View, StyleSheet} from 'react-native';

export const FavoritesScreen = () => {
  return (
    <View style={styles.container}>
      <Text>Favorites</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
