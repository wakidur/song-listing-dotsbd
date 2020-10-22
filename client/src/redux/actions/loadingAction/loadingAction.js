import { LOADING_STATE } from '../actionTypes';

export const loading = (data) => ({
  type: LOADING_STATE,
  payload: data ? data : false,
});
