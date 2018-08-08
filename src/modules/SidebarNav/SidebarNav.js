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
import { contributorsActions } from '../../actions';
import { Repo, ReposList } from '../../components';

const drawerWidth = 240;

const styles = theme => ({
  root: {
    flexGrow: 1,
    zIndex: 1,
    height: '100%',
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
  },
});

class SidebarNav extends React.Component {
  state = {
    isMobileOpen: false,
    isRepoOpen: false,
    repo: {},
  };

  getRepoWithContributors = async (repo, url) => {
    const { handlefetchContributors } = this.props; // eslint-disable-line no-shadow
    await handlefetchContributors(url);
    this.setState({ repo });
    this.setState({ isRepoOpen: true });
  };

  handleLogoClick = (e) => {
    e.preventDefault();
    this.setState({ isRepoOpen: false });
  }

  handleDrawerToggle = () => {
    this.setState(state => ({ isMobileOpen: !state.isMobileOpen }));
  };

  render() {
    const {
      classes,
      theme,
      reposInfo,
      topRepos,
      contributorsInfo,
      handleFetchPreviousRepos,
      handleFetchNextRepos,
    } = this.props;
    const {
      isMobileOpen,
      isRepoOpen,
      repo,
    } = this.state;
    const {
      getRepoWithContributors,
      handleLogoClick,
    } = this;

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
              Repo Information
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
                handleLogoClick,
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
                handleLogoClick,
              }}
            />
          </Drawer>
        </Hidden>
        <main className={classes.content}>
          <div className={classes.toolbar} />
          {!isRepoOpen &&
            <ReposList {...{ topRepos, getRepoWithContributors }} />
          }
          {isRepoOpen && contributorsInfo && contributorsInfo.contributors &&
            <Repo {...{ repo, contributorsInfo }} />
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
  topRepos: PropTypes.array,
  contributorsInfo: PropTypes.object,
  handleFetchPreviousRepos: PropTypes.func,
  handleFetchNextRepos: PropTypes.func,
};

SidebarNav.defaultProps = {
  reposInfo: {},
  topRepos: [],
  contributorsInfo: {},
  handleFetchPreviousRepos: () => undefined,
  handleFetchNextRepos: () => undefined,
};

const mapDispatchToProps = dispatch => ({
  handlefetchContributors: (url) => {
    dispatch(contributorsActions.fetchContributors(url));
  },
});

function mapStateToProps({ contributorsInfo }) {
  return { contributorsInfo };
}

export default compose(
  withStyles(styles, { withTheme: true }),
  connect(
    mapStateToProps,
    mapDispatchToProps,
  ),
)(SidebarNav);
