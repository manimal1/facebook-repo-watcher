import {
  fetchAppRepos,
  fetchTopRepos,
  fetchReposByUrl,
  fetchRepoContributors,
} from './gh-repos';

const repoService = {
  fetchAppRepos,
  fetchTopRepos,
  fetchReposByUrl,
  fetchRepoContributors,
};

export default repoService;
