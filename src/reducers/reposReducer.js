import { reposConstants } from '../constants';

export default function(state = null, action) {
  switch (action.type) {
    case reposConstants.FETCH_REPOS:
      return action.payload || false;
    case reposConstants.FETCH_PREVIOUS_REPOS:
      return action.payload || false;
    case reposConstants.FETCH_NEXT_REPOS:
      return action.payload || false;
    default:
      return state;
  }
}
