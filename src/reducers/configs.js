import { TOGGLE_CREATE_BOOK } from '../actionTypes';
import initialState from '../store/initialState';

const books = (state = { ...initialState.configs }, action) => {
  switch (action.type) {
    case TOGGLE_CREATE_BOOK:
      return { ...state, showNewBookPopup: action.data };
    default:
      return state;
  }
};

export default books;
