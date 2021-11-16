import axios from 'axios';
import {GET_MOVIES} from '../redux/movies/MoviesActions';

export const getMovies = () => {
  const API_URL = 'https://api.themoviedb.org/3/movie/popular';
  const API_KEY = '<your-api-key>';
  const PARAMS = 'page=1';
  const BASE_URL = `${API_URL}?api_key=${API_KEY}&${PARAMS}`;
  try {
    return async (dispatch: any) => {
      const res = await axios.get(`${BASE_URL}`);
      if (res.data) {
        dispatch({
          type: GET_MOVIES,
          payload: res.data,
        });
      } else {
        console.log('Unable to fetch');
      }
    };
  } catch (error) {
    // Add custom logic to handle errors
  }
};
