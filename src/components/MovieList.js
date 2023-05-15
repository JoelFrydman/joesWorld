import { FlatList, View } from 'react-native';

import MovieCard from './MovieCard';
import React from 'react';

const MovieList = ({ movies }) => {
  return (
    <View>
      <FlatList
        data={movies}
        renderItem={({ item }) => <MovieCard movie={item} />}
        keyExtractor={(item) => item.id.toString()}
      />
    </View>
  );
};

export default MovieList;
