import { LOADING_STATE, SET_MESSAGE } from '../../actions/actionTypes';

const initialState = {
  isLoading: false,
  message: {},
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case LOADING_STATE:
      return { ...state, isLoading: payload };
    case SET_MESSAGE:
      return { ...state, message: payload };

    default:
      return state;
  }
};
