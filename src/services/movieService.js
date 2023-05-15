import axios from 'axios';

const API_KEY = 'b1268430894bba5e28572b4835400372'; 
const API_URL = 'https://api.themoviedb.org/3'; 

export const getPopularMovies = async () => {
  try {
    const response = await axios.get(`${API_URL}/movie/popular?api_key=${API_KEY}`);
    return response.data.results;
  } catch (error) {
    console.error('Error al obtener las películas populares:', error);
    return [];
  }
};

export const getMovieDetails = async (movieId) => {
  try {
    const response = await axios.get(`${API_URL}/movie/${movieId}?api_key=${API_KEY}`);
    return response.data;
  } catch (error) {
    console.error(`Error al obtener los detalles de la película con ID ${movieId}:`, error);
    return null;
  }
};
