import { combineReducers } from 'redux';
import { reducer as form } from 'redux-form';

const rootReducer = combineReducers({
  // same as form:form
  form
});

export default rootReducer;
