import Axios from 'axios';
import { GET_BOOK_LIST_SUCCESS, GET_BOOK_LIST } from '../actionTypes';

export const getBookList = () => {
  return async dispatch => {
    const res = await Axios.get(
      'https://www.googleapis.com/books/v1/volumes?q=kaplan%20test%20prep'
    );
    dispatch(getBookListSuccess(res.data));
    // .catch(err => console.log(err));
  };
};

export const getBookListSuccess = res => ({
  type: GET_BOOK_LIST_SUCCESS,
  res
});

export const getUserData = userId => ({
  type: GET_BOOK_LIST,
  userId
});
