import { Image, StyleSheet, Text, View } from 'react-native';

import React from 'react';

const MovieCard = ({ movie }) => {
  return (
    <View style={styles.container}>
      <Image source={{ uri: movie.poster }} style={styles.poster} />
      <Text style={styles.title}>{movie.title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    marginBottom: 10,
  },
  poster: {
    width: 200,
    height: 300,
    borderRadius: 10,
  },
  title: {
    marginTop: 5,
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default MovieCard;
