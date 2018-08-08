import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { BrowserRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import CssBaseline from '@material-ui/core/CssBaseline';
import { repoActions, fetchTopRepos } from './actions';
import { SidebarNav } from './modules';

class App extends Component {
  componentDidMount() {
    const {
      handleFetchRepos,
      handleFetchTopRepos,
    } = this.props;
    handleFetchRepos();
    handleFetchTopRepos();
  }

  render() {
    const {
      reposInfo,
      topRepos,
      handleFetchPreviousRepos,
      handleFetchNextRepos,
    } = this.props;

    return (
      <BrowserRouter>
        <React.Fragment>
          <CssBaseline />
          <div className="app">
            <SidebarNav
              {...{
                reposInfo,
                topRepos,
                handleFetchPreviousRepos,
                handleFetchNextRepos,
              }}
            />
          </div>
        </React.Fragment>
      </BrowserRouter>
    );
  }
}


App.propTypes = {
  handleFetchRepos: PropTypes.func,
  handleFetchTopRepos: PropTypes.func,
  handleFetchPreviousRepos: PropTypes.func,
  handleFetchNextRepos: PropTypes.func,
  reposInfo: PropTypes.object,
  topRepos: PropTypes.array,
};

App.defaultProps = {
  handleFetchRepos: () => undefined,
  handleFetchTopRepos: () => undefined,
  handleFetchPreviousRepos: () => undefined,
  handleFetchNextRepos: () => undefined,
  reposInfo: {},
  topRepos: [],
};

const mapDispatchToProps = dispatch => ({
  handleFetchRepos: () => {
    dispatch(repoActions.fetchRepos());
  },
  handleFetchTopRepos: () => {
    dispatch(fetchTopRepos());
  },
  handleFetchPreviousRepos: (url) => {
    dispatch(repoActions.fetchReposByPreviousPagination(url));
  },
  handleFetchNextRepos: (url) => {
    dispatch(repoActions.fetchReposByNextPagination(url));
  },
});

function mapStateToProps({ reposInfo, topRepos }) {
  return { reposInfo, topRepos };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(App);
