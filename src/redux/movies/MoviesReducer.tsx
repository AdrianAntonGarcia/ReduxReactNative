import {
  MovieAction,
  Movie,
  GET_MOVIES,
  ADD_FAVORITE_ITEM,
  REMOVE_FAVORITE_ITEM,
} from './MoviesActions';

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
    case GET_MOVIES:
      return {...state, movies: action.payload};
    case ADD_FAVORITE_ITEM:
      return {...state, favorites: [...state.favorites, action.payload]};
    case REMOVE_FAVORITE_ITEM:
      return {
        ...state,
        favorites: state.favorites.filter(
          movie => movie.id !== action.payload.id,
        ),
      };
    default:
      return state;
  }
}

export default moviesReducer;
