import { repoService } from '../gh-services';
import { reposConstants } from '../constants';

const fetchRepos = () => async (dispatch) => {
  const reposInfo = await repoService.fetchAppRepos();

  dispatch({ type: reposConstants.FETCH_REPOS, payload: reposInfo });
};

const fetchReposByPreviousPagination = url => async (dispatch) => {
  const reposInfo = await repoService.fetchSortedReposByUrl(url);

  dispatch({ type: reposConstants.FETCH_PREVIOUS_REPOS, payload: reposInfo });
};

const fetchReposByNextPagination = url => async (dispatch) => {
  const reposInfo = await repoService.fetchSortedReposByUrl(url);

  dispatch({ type: reposConstants.FETCH_NEXT_REPOS, payload: reposInfo });
};

const repoActions = {
  fetchRepos,
  fetchReposByPreviousPagination,
  fetchReposByNextPagination,
};

export default repoActions;
