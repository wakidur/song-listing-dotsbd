import { setError } from '../errorAction/errorAction';
import { loading } from '../loadingAction/loadingAction';
import AxiosCommonUrl from '../../axios/CommonAxios';
import { SET_USER, CREATE_USER } from '../actionTypes';

export const userSignup = (userData, history) => async (dispatch) => {
  try {
    dispatch(loading(true));
    const response = await AxiosCommonUrl.post('/signup', userData);
    dispatch(setError());
    dispatch(loading());
    dispatch({ type: CREATE_USER, payload: response.data });
    history.push('/singin');
  } catch (error) {
    dispatch(loading());
    dispatch(setError({ message: 'Some this wrong' }));
  }
};
export const userSingin = (userData, history) => async (dispatch) => {
  try {
    dispatch(loading(true));
    const response = await AxiosCommonUrl.post('/signin', userData);
    const { token } = response.data;
    dispatch(setError());
    localStorage.setItem('dotsbd_jwt', token);
    history.push('/home');
  } catch (error) {
    dispatch(loading());
    dispatch(setError({ message: 'Invalid login credentials' }));
  }
};

export const signout = () => {
  localStorage.removeItem('dotsbd_jwt');

  return {
    type: SET_USER,
    payload: '',
  };
};
export const getCurrentUser = () => {
  const dotsbd = localStorage.getItem('dotsbd_jwt');

  return {
    type: SET_USER,
    payload: dotsbd,
  };
};
