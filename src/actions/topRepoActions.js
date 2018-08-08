import { repoService } from '../gh-services';
import { reposConstants } from '../constants';

const fetchTopRepos = () => async (dispatch) => {
  const topRepos = await repoService.fetchTopRepos();

  dispatch({ type: reposConstants.FETCH_TOP_REPOS, payload: topRepos });
};

export default fetchTopRepos;
