import { repoService } from '../gh-services';
import { reposConstants } from '../constants';

const fetchRepos = () => async (dispatch) => {
  const repos = await repoService.fetchAppRepos();

  dispatch({ type: reposConstants.FETCH_REPOS, payload: repos });
};

export default fetchRepos;
