import {
  fetchAppRepos,
  fetchRepoContributors,
  fetchSortedReposByUrl,
} from './gh-repos';

const repoService = {
  fetchAppRepos,
  fetchRepoContributors,
  fetchSortedReposByUrl,
};

export default repoService;
