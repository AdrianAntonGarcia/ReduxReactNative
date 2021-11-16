import {MovieAction} from './MoviesActions';

const initialState = {
  movies: [],
  favorites: [],
};

function moviesReducer(state = initialState, action: MovieAction) {
  switch (action.type) {
    case 'GET_MOVIES':
      return {...state, movies: action.payload};
    default:
      return state;
  }
}
export default moviesReducer;
