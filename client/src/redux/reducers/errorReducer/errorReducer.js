import { CATCH_ERROR } from '../../actions/actionTypes';
const initialState = {};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case CATCH_ERROR:
      return { ...state, ...payload.error };

    default:
      return state;
  }
};
