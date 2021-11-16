import {MovieAction, Movie} from './MoviesActions';

export interface MoviesState {
  movies: Movie[];
  favorites: any[];
}
const initialState = {
  movies: [],
  favorites: [],
};

function moviesReducer(state: MoviesState = initialState, action: MovieAction) {
  switch (action.type) {
    case 'GET_MOVIES':
      return {...state, movies: action.payload};
    default:
      return state;
  }
}

export default moviesReducer;
