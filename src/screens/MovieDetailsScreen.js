import { Image, Text, View } from 'react-native';
import React, { useEffect, useState } from 'react';

import { getMovieDetails } from '../services/movieService';

const MovieDetailsScreen = ({ route }) => {
  const { movieId } = route.params;
  const [movieDetails, setMovieDetails] = useState(null);

  useEffect(() => {
    loadMovieDetails();
  }, []);

  const loadMovieDetails = async () => {
    try {
      const details = await getMovieDetails(movieId);
      setMovieDetails(details);
    } catch (error) {
      console.error(`Error al cargar los detalles de la película con ID ${movieId}:`, error);
    }
  };

  return (
    <View>
      {movieDetails ? (
        <View>
          {movieDetails.poster && (
            <Image source={{ uri: movieDetails.poster }} />
          )}
          <Text>Title: {movieDetails.title}</Text>
          <Text>Overview: {movieDetails.overview}</Text>
          <Text>Release Date: {movieDetails.release_date}</Text>
        </View>
      ) : (
        <Text>Loading movie details...</Text>
      )}
    </View>
  );
};

export default MovieDetailsScreen;


