import React from 'react';
import PropTypes from 'prop-types';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { withStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import Hidden from '@material-ui/core/Hidden';
import MenuIcon from '@material-ui/icons/Menu';
import SidebarMenu from './components';
import { fetchContributors } from '../../actions';
import { Repo } from '../../components';

const drawerWidth = 240;

const styles = theme => ({
  root: {
    flexGrow: 1,
    zIndex: 1,
    height: '100%',
    overflow: 'hidden',
    position: 'relative',
    display: 'flex',
    width: '100%',
  },
  appBar: {
    [theme.breakpoints.up('md')]: {
      width: `calc(100% - ${drawerWidth}px)`,
    },
  },
  navIconHide: {
    [theme.breakpoints.up('md')]: {
      display: 'none',
    },
  },
  toolbar: theme.mixins.toolbar,
  drawerPaper: {
    width: drawerWidth,
    [theme.breakpoints.up('md')]: {
      position: 'relative',
    },
  },
  content: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.default,
    padding: theme.spacing.unit * 3,
    // [theme.breakpoints.up('md')]: {
    //   display: 'none',
    // },
  },
});

class SidebarNav extends React.Component {
  state = {
    isMobileOpen: false,
    repo: {},
  };

  getRepoWithContributors = async (repo, url) => {
    const { fetchContributors } = this.props; // eslint-disable-line no-shadow
    await fetchContributors(url);
    this.setState({ repo });
  };

  handleDrawerToggle = () => {
    this.setState(state => ({ isMobileOpen: !state.isMobileOpen }));
  };

  render() {
    const {
      classes,
      theme,
      reposInfo,
      contributorsInfo,
      handleFetchPreviousRepos,
      handleFetchNextRepos,
    } = this.props;
    const { isMobileOpen, repo } = this.state;
    const { getRepoWithContributors } = this;

    return (
      <div className={classes.root}>
        <AppBar className={classes.appBar}>
          <Toolbar>
            <IconButton
              color="inherit"
              aria-label="Open drawer"
              onClick={this.handleDrawerToggle}
              className={classes.navIconHide}
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="title" color="inherit" noWrap>
              Responsive drawer
            </Typography>
          </Toolbar>
        </AppBar>
        <Hidden mdUp>
          <Drawer
            variant="temporary"
            anchor={theme.direction === 'rtl' ? 'right' : 'left'}
            open={isMobileOpen}
            onClose={this.handleDrawerToggle}
            classes={{
              paper: classes.drawerPaper,
            }}
            ModalProps={{
              keepMounted: true, // Better open performance on mobile.
            }}
          >
            <SidebarMenu
              {...{
                reposInfo,
                getRepoWithContributors,
                handleFetchPreviousRepos,
                handleFetchNextRepos,
              }}
            />
          </Drawer>
        </Hidden>
        <Hidden smDown implementation="css">
          <Drawer
            variant="permanent"
            open
            classes={{
              paper: classes.drawerPaper,
            }}
          >
            <SidebarMenu
              {...{
                reposInfo,
                getRepoWithContributors,
                handleFetchPreviousRepos,
                handleFetchNextRepos,
              }}
            />
          </Drawer>
        </Hidden>
        <main className={classes.content}>
          <div className={classes.toolbar} />
          {contributorsInfo && contributorsInfo.contributors.length > 0 &&
            <Repo {...{ classes, repo, contributorsInfo }} />
          }
        </main>
      </div>
    );
  }
}

SidebarNav.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired,
  reposInfo: PropTypes.object,
  contributorsInfo: PropTypes.object,
  handleFetchPreviousRepos: PropTypes.func,
  handleFetchNextRepos: PropTypes.func,
};

SidebarNav.defaultProps = {
  reposInfo: {},
  contributorsInfo: {},
  handleFetchPreviousRepos: () => undefined,
  handleFetchNextRepos: () => undefined,
};

function mapStateToProps({ contributorsInfo }) {
  return { contributorsInfo };
}

export default compose(
  withStyles(styles, { withTheme: true }),
  connect(
    mapStateToProps,
    { fetchContributors },
  ),
)(SidebarNav);
