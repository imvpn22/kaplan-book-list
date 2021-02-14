import { combineReducers } from 'redux';
import books from './books';
import configs from './configs';

export default combineReducers({
  books,
  configs
});
