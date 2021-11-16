import * as React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {FavoritesScreen} from '../screens/Favorites';
import {MoviesScreen} from '../screens/Movies';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

const Tab = createBottomTabNavigator();
export const Navigation = () => {
  return (
    <>
      <Tab.Navigator
        screenOptions={{
          // Mostrar el texto del tab bar
          tabBarShowLabel: false,
          // Color del elemento seleccionado
          tabBarActiveTintColor: '#9381ff',
          // Estilos de la tabBar
          tabBarStyle: {
            height: '10%',
          },
          // Mostrar la cabecera
          headerShown: false,
        }}>
        <Tab.Screen
          name="FavoritesScreen"
          component={FavoritesScreen}
          options={{
            // Retorna el color y tamaño que se está aplicando a ese tab
            tabBarIcon: ({color, size}) => (
              <MaterialIcons name="movie-filter" color={color} size={size} />
            ),
          }}
        />
        <Tab.Screen
          name="MoviesScreen"
          component={MoviesScreen}
          options={{
            tabBarIcon: ({color, size}) => (
              <MaterialIcons name="favorite" color={color} size={size} />
            ),
          }}
        />
      </Tab.Navigator>
    </>
  );
};
