import axios from 'axios';
import _ from 'lodash';
import parse from 'parse-link-header';
import { GH_ORGS } from '../gh-types';

const fetchFacebookRepos = async () => {
  const repos = await axios({
    method: 'GET',
    header: { 'content-type': 'application/json' },
    url: `${GH_ORGS}/facebook/repos`,
  });

  return repos;
};

const reposSortedByWatchersCount = (repos) => {
  const reposSortedByWatchers = _.reverse(
    _.sortBy(repos.data, ['watchers']),
  );

  return reposSortedByWatchers;
};

const getPaginationInfo = (headerLink) => {
  const parsedLinkHeader = parse(headerLink);
  return parsedLinkHeader;
};

export const fetchAppRepos = () => fetchFacebookRepos()
  .then((reposInfo) => {
    const { headers } = reposInfo;
    const repos = reposSortedByWatchersCount(reposInfo);
    const pagination = getPaginationInfo(headers.link);

    return { repos, pagination };
  });

export const fetchTopRepos = () => fetchFacebookRepos()
  .then(repos => reposSortedByWatchersCount(repos))
  .then(repos => repos.slice(0, 5));

export const fetchReposByUrl = async (url) => {
  const reposApi = await axios.get(url);
  const { headers } = reposApi;
  const repos = reposApi.data;
  const pagination = getPaginationInfo(headers.link);

  return { repos, pagination };
};

export const fetchRepoContributors = async (contributorsUrl) => {
  const contributorsApi = await axios.get(`${contributorsUrl}?page=1&per_page=10`);
  const { headers } = contributorsApi;
  const contributors = contributorsApi.data;
  const pagination = getPaginationInfo(headers.link);

  return { contributors, pagination };
};
