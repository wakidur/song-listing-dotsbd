import { SET_USER, CREATE_USER } from '../../actions/actionTypes';
const initialState = {
  isUserAuthenticated: false,
  user: {},
  createUser: {},
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case SET_USER:
      return {
        ...state,
        isUserAuthenticated: payload ? true : false,
        user: payload,
      };
    case CREATE_USER:
      return {
        ...state,
        createUser: payload,
      };

    default:
      return state;
  }
};
