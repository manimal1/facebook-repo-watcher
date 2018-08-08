import axios from 'axios';
import _ from 'lodash';
import parse from 'parse-link-header';
import { GH_ORGS } from '../gh-types';

const fetchFacebookRepos = async () => {
  const repos = await axios({
    method: 'GET',
    header: { 'content-type': 'application/json' },
    url: `${GH_ORGS}/facebook/repos?page=1&per_page=10`,
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
  console.log(parsedLinkHeader);
  return parsedLinkHeader;
};

export const fetchAppRepos = () => fetchFacebookRepos()
  .then((repos) => {
    const { headers } = repos;
    const pagination = getPaginationInfo(headers.link);

    return { repos, pagination };
  })
  .then((reposInfo) => {
    const repos = reposSortedByWatchersCount(reposInfo.repos);
    const { pagination } = reposInfo;

    return { repos, pagination };
  });

export const fetchSortedReposByUrl = async (url) => {
  const reposApi = await axios.get(url);
  const { headers } = reposApi;
  const repos = reposApi.data;
  const pagination = getPaginationInfo(headers.link);

  return { repos, pagination };
};
