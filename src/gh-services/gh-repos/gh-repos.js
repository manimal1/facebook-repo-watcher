import axios from 'axios';
import _ from 'lodash';
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

/* eslint-disable import/prefer-default-export */
export const fetchAppRepos = () => fetchFacebookRepos()
  .then(repos => reposSortedByWatchersCount(repos));
