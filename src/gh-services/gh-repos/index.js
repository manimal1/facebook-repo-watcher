import {
  fetchAppRepos,
  fetchReposByUrl,
  fetchRepoContributors,
} from './gh-repos';

const repoService = {
  fetchAppRepos,
  fetchReposByUrl,
  fetchRepoContributors,
};

export default repoService;
