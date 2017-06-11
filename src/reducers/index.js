/* eslint-disable import/max-dependencies */
import {combineReducers} from 'redux';
import { routerReducer } from 'react-router-redux'
import { reducer as formReducer } from 'redux-form'

const reducers = combineReducers({
  router: routerReducer
  , form: formReducer
});

export default reducers;
