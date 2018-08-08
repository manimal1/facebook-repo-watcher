import { combineReducers } from 'redux';
import reposReducer from './reposReducer';
import contributorsReducer from './contributorsReducer';

export default combineReducers({
  reposInfo: reposReducer,
  contributorsInfo: contributorsReducer,
});
