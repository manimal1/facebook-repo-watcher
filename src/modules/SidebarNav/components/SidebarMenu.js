import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import MenuList from '@material-ui/core/MenuList';
import MenuItem from '@material-ui/core/MenuItem';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import KeyboardArrowLeft from '@material-ui/icons/KeyboardArrowLeft';
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight';

const styles = theme => ({ // eslint-disable-line no-unused-vars
  logoDivArea: {
    height: '64px',
  },
  logoText: {
    lineHeight: '64px',
    margin: '0px',
    paddingLeft: '24px',
  },
  listItemText: {
    paddingLeft: '24px !important',
  },
  paginationButton: {
    margin: '0 auto',
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
      <div className={classes.logoDivArea}>
        <h3 className={classes.logoText}>
          Facebook Repos
        </h3>
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
                <IconButton
                  aria-label="Previous Page"
                  className={classes.paginationButton}
                >
                  <KeyboardArrowLeft />
                </IconButton>
              </MenuItem>
              <Divider />
            </div>
          )
        }
        {reposInfo && reposInfo.pagination.next &&
          (
            <div>
              <MenuItem onClick={() => handleFetchNextRepos(reposInfo.pagination.next.url)}>
                <IconButton
                  aria-label="Next Page"
                  className={classes.paginationButton}
                >
                  <KeyboardArrowRight />
                </IconButton>
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
