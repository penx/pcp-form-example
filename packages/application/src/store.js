import { createStore, combineReducers } from 'redux';
import { reducer as form } from 'redux-form';

const reducer = combineReducers({
  form,
});
const store = (window.devToolsExtension
  ? window.devToolsExtension()(createStore)
  : createStore)(reducer);

export default store;
