import React, {useEffect} from 'react';
import {
  View,
  Text,
  FlatList,
  Image,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {getMovies} from '../services/MoviesService';
import {RootState} from '../redux/store';

export const MoviesScreen = () => {
  const {movies} = useSelector((state: RootState) => state.moviesReducer);
  return (
    <View style={styles.container}>
      <Text>Movies</Text>
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
