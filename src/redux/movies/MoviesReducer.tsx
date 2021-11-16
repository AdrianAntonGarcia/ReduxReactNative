import {GET_MOVIES} from './MoviesActions';

const initialState = {
  movies: [],
  favorites: [],
};

function moviesReducer(
  state = initialState,
  action: {type: any; payload: any},
) {
  switch (action.type) {
    case GET_MOVIES:
      return {...state, movies: action.payload};
    default:
      return state;
  }
}
export default moviesReducer;
