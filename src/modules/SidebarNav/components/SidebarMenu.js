import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import MenuList from '@material-ui/core/MenuList';
import MenuItem from '@material-ui/core/MenuItem';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';

const styles = theme => ({ // eslint-disable-line no-unused-vars
  listItemText: {
    paddingLeft: '24px !important',
  },
});

const SidebarMenu = (props) => {
  const {
    classes,
    reposInfo,
    getRepoWithContributors,
    handleFetchPreviousRepos,
    handleFetchNextRepos,
  } = props;
  let repos;
  if (reposInfo !== null) {
    repos = reposInfo.repos; // eslint-disable-line prefer-destructuring
  }

  return (
    <div className="sidebar-menu">
      <div style={{ height: '64px' }}>
        <h1 style={{ lineHeight: '64px', margin: '0px', paddingLeft: '24px' }}>
          Facebook Repos
        </h1>
      </div>
      <Divider />
      <MenuList>
        {repos && repos.length > 0 &&
          repos.map((repo) => {
            const menuItem = (
              <div key={repo.id}>
                <MenuItem
                  onClick={() => getRepoWithContributors(repo, repo.contributors_url)}
                >
                  <ListItemText inset primary={repo.name} className={classes.listItemText} />
                </MenuItem>
                <Divider />
              </div>
            );
            return menuItem;
          })
        }
        {reposInfo && reposInfo.pagination.prev &&
          (
            <div>
              <MenuItem onClick={() => handleFetchPreviousRepos(reposInfo.pagination.prev.url)}>
                <ListItemText primary="previous" />
              </MenuItem>
              <Divider />
            </div>
          )
        }
        {reposInfo && reposInfo.pagination.next &&
          (
            <div>
              <MenuItem onClick={() => handleFetchNextRepos(reposInfo.pagination.next.url)}>
                <ListItemText primary="next" />
              </MenuItem>
              <Divider />
            </div>
          )
        }
      </MenuList>
    </div>
  );
};

SidebarMenu.propTypes = {
  classes: PropTypes.object,
  reposInfo: PropTypes.object,
  getRepoWithContributors: PropTypes.func,
  handleFetchPreviousRepos: PropTypes.func,
  handleFetchNextRepos: PropTypes.func,
};

SidebarMenu.defaultProps = {
  classes: {},
  reposInfo: {},
  getRepoWithContributors: () => undefined,
  handleFetchPreviousRepos: () => undefined,
  handleFetchNextRepos: () => undefined,
};

export default withStyles(styles, { withTheme: true })(SidebarMenu);
