import axios from 'axios';

export interface MovieAction {
  type: string;
  payload?: any;
}

export const GET_MOVIES = 'GET_MOVIES';

/**
 * Acciones asíncronas para llamar a servicios
 * @returns Retorna una accón síncrona
 */
export const getMovies = () => {
  const API_URL = 'https://api.themoviedb.org/3/movie/popular';
  const API_KEY = '8a7fd4415553a735edf68497c23ca3f2';
  const PARAMS = 'page=1';
  const BASE_URL = `${API_URL}?api_key=${API_KEY}&${PARAMS}`;
  try {
    console.log('entro');
    return async (dispatch: any) => {
      const res = await axios.get(`${BASE_URL}`);
      if (res.data) {
        dispatch({
          type: GET_MOVIES,
          payload: res.data.results,
        });
      } else {
        console.log('Unable to fetch');
      }
    };
  } catch (error) {
    // Add custom logic to handle errors
  }
};
