import { repoService } from '../gh-services';
import { reposConstants } from '../constants';

const fetchContributors = url => async (dispatch) => {
  const repos = await repoService.fetchRepoContributors(url);

  dispatch({ type: reposConstants.FETCH_CONTRIBUTORS, payload: repos });
};

const fetchContributorsByPreviousPagination = url => async (dispatch) => {
  const ContributorsInfo = await repoService.fetchRepoContributors(url);

  dispatch({ type: reposConstants.FETCH_PREVIOUS_CONTRIBUTORS, payload: ContributorsInfo });
};

const fetchContributorsByNextPagination = url => async (dispatch) => {
  const ContributorsInfo = await repoService.fetchRepoContributors(url);

  dispatch({ type: reposConstants.FETCH_NEXT_CONTRIBUTORS, payload: ContributorsInfo });
};

const fetchContributorsByFirstPagination = url => async (dispatch) => {
  const ContributorsInfo = await repoService.fetchRepoContributors(url);

  dispatch({ type: reposConstants.FETCH_FIRST_CONTRIBUTORS, payload: ContributorsInfo });
};

const fetchContributorsByLastPagination = url => async (dispatch) => {
  const ContributorsInfo = await repoService.fetchRepoContributors(url);

  dispatch({ type: reposConstants.FETCH_LAST_CONTRIBUTORS, payload: ContributorsInfo });
};

const contributorsActions = {
  fetchContributors,
  fetchContributorsByPreviousPagination,
  fetchContributorsByNextPagination,
  fetchContributorsByFirstPagination,
  fetchContributorsByLastPagination,
};

export default contributorsActions;
