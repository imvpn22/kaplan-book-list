import {
  GET_BOOK_LIST,
  GET_BOOK_LIST_SUCCESS,
  CREATE_BOOK
} from '../actionTypes';
import initialState from '../store/initialState';

const books = (state = { ...initialState.books }, action) => {
  switch (action.type) {
    case GET_BOOK_LIST_SUCCESS:
      // Set new data is localstorage to persist
      localStorage.setItem('bookList', JSON.stringify(action.res.items));
      return { ...state, items: action.res.items };
    case GET_BOOK_LIST:
      return { ...state };
    case CREATE_BOOK:
      const items = [...state.items, { ...action.data }];
      localStorage.setItem('bookList', JSON.stringify(items));
      return { ...state, items };
    default:
      return state;
  }
};

export default books;
