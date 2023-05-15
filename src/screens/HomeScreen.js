import { FlatList, Text, TouchableOpacity, View } from 'react-native';
import React, { useEffect, useState } from 'react';

import { getPopularMovies } from '../services/movieService';

const HomeScreen = ({ navigation }) => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    loadMovies();
  }, []);

  const loadMovies = async () => {
    try {
      const popularMovies = await getPopularMovies();
      setMovies(popularMovies);
    } catch (error) {
      console.error('Error al cargar las películas:', error);
    }
  };

  const renderMovieItem = ({ item }) => {
    return (
      <TouchableOpacity
        onPress={() => navigation.navigate('MovieDetails', { movieId: item.id })}
        style={{ padding: 16, borderBottomWidth: 1, borderBottomColor: '#ccc' }}
      >
        <Text>{item.title}</Text>
      </TouchableOpacity>
    );
  };

  return (
    <View>
      <FlatList
        data={movies}
        keyExtractor={(item) => item.id.toString()}
        renderItem={renderMovieItem}
      />
    </View>
  );
};

export default HomeScreen;
