import { combineReducers } from 'redux';
import session from './session_reducer';
import users from './users_reducer';
import errorsReducer from './errors_reducer';

export const rootReducer = combineReducers({
  users,
  session,
  errorsReducer
});
