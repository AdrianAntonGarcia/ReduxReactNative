import {createStore, combineReducers, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import moviesReducer from './movies/MoviesReducer';

const rootReducer = combineReducers({
  moviesReducer,
});
export const store = createStore(rootReducer, applyMiddleware(thunk));
