import { reposConstants } from '../constants';

export default function(state = null, action) {
  switch (action.type) {
    case reposConstants.FETCH_TOP_REPOS:
      return action.payload || false;
    default:
      return state;
  }
}
