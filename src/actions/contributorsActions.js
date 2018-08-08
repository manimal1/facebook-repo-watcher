import { repoService } from '../gh-services';
import { reposConstants } from '../constants';

const fetchContributors = url => async (dispatch) => {
  const repos = await repoService.fetchRepoContributors(url);

  dispatch({ type: reposConstants.FETCH_CONTRIBUTORS, payload: repos });
};

export default fetchContributors;
