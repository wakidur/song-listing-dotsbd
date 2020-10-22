import { combineReducers } from 'redux';

import errorReducer from './errorReducer/errorReducer';
import infoReducer from './infoReducer/infoReducer';
import authReducer from './authReducers/authReducers';
import metaReducer from './metaReducer/metaReducer';

export default combineReducers({
  error: errorReducer,
  info: infoReducer,
  auth: authReducer,
  meta: metaReducer,
});
