import {createStore, applyMiddleware} from 'redux'
import thunkMiddleware from 'redux-thunk'

import rootReducer from '../modules/index'


export default configureStore = (initialState) => {
  const finalCreateStore = applyMiddleware(thunkMiddleware)(createStore);
  const store = finalCreateStore(rootReducer, initialState);

  return store;
}
