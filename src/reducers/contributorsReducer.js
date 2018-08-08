import { reposConstants } from '../constants';

export default function(state = null, action) {
  switch (action.type) {
    case reposConstants.FETCH_CONTRIBUTORS:
      return action.payload || false;
    case reposConstants.FETCH_PREVIOUS_CONTRIBUTORS:
      return action.payload || false;
    case reposConstants.FETCH_NEXT_CONTRIBUTORS:
      return action.payload || false;
    case reposConstants.FETCH_FIRST_CONTRIBUTORS:
      return action.payload || false;
    case reposConstants.FETCH_LAST_CONTRIBUTORS:
      return action.payload || false;
    default:
      return state;
  }
}
