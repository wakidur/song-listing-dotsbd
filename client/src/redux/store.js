import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import RootReducer from './reducers/root-reducer';

// const middlewares = [logger];
const middlewares = [thunk];

const store = createStore(RootReducer, applyMiddleware(...middlewares));
export default store;
