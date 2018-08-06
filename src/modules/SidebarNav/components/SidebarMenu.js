import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
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
  const { classes = {}, repos = [] } = props;

  return (
    <div className="sidebar-menu">
      <div style={{ paddingTop: '64px' }} />
      <Divider />
      <MenuList>
        {repos &&
          repos.map((repo) => {
            const menuItem = (
              <div key={repo.id}>
                <MenuItem
                  component={Link}
                  to={`/${repo.name}`}
                >
                  <ListItemText inset primary={repo.name} className={classes.listItemText} />
                </MenuItem>
                <Divider />
              </div>
            );
            return menuItem;
          })
        }
      </MenuList>
    </div>
  );
};

SidebarMenu.propTypes = {
  classes: PropTypes.object,
  repos: PropTypes.array,
};

SidebarMenu.defaultProps = {
  classes: {},
  repos: [],
};

export default withStyles(styles, { withTheme: true })(SidebarMenu);
