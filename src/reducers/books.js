import { GET_BOOK_LIST, GET_BOOK_LIST_SUCCESS } from '../actionTypes';
import initialState from '../store/initialState';

const books = (state = { ...initialState.books }, action) => {
  switch (action.type) {
    case GET_BOOK_LIST_SUCCESS:
      console.log(action.res);
      return { ...state, items: action.res.items };
    case GET_BOOK_LIST:
      return { ...state };
    default:
      return state;
  }
};

export default books;
