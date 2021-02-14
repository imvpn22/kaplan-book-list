import Axios from 'axios';
import { GET_BOOK_LIST_SUCCESS, TOGGLE_CREATE_BOOK } from '../actionTypes';

const API_URL =
  'https://www.googleapis.com/books/v1/volumes?q=kaplan%20test%20prep';

export const getBookList = () => {
  return async dispatch => {
    const res = await Axios.get(API_URL);
    dispatch(getBookListSuccess(res.data));
    // .catch(err => console.log(err));
  };
};

export const getBookListSuccess = res => ({
  type: GET_BOOK_LIST_SUCCESS,
  res
});

export const toggleNewBookPopup = showNewBookPopup => ({
  type: TOGGLE_CREATE_BOOK,
  data: showNewBookPopup
});
