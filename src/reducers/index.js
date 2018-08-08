import { combineReducers } from 'redux';
import reposReducer from './reposReducer';
import topReposReducer from './topReposReducer';
import contributorsReducer from './contributorsReducer';

export default combineReducers({
  reposInfo: reposReducer,
  topRepos: topReposReducer,
  contributorsInfo: contributorsReducer,
});
