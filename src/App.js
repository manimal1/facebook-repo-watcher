import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { BrowserRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import CssBaseline from '@material-ui/core/CssBaseline';
import { repoActions } from './actions';
import { SidebarNav } from './modules';

class App extends Component {
  componentDidMount() {
    const { handleFetchRepos } = this.props;
    handleFetchRepos();
  }

  render() {
    const {
      reposInfo = [],
      handleFetchPreviousRepos,
      handleFetchNextRepos,
    } = this.props;

    return (
      <BrowserRouter>
        <React.Fragment>
          <CssBaseline />
          <div className="app">
            <SidebarNav {...{ reposInfo, handleFetchPreviousRepos, handleFetchNextRepos }} />
            {/* <Route exact path="/" component={} /> */}

            {/* {repos && repos.length > 0
              ? repos.map(repo => (
                <Route
                  exact
                  path={`/${repo.name}`}
                  key={repo.id}
                  render={() => <Repo {...{ repo }} />}
                />
              )) : <div />
            } */}
          </div>
        </React.Fragment>
      </BrowserRouter>
    );
  }
}


App.propTypes = {
  handleFetchRepos: PropTypes.func,
  handleFetchPreviousRepos: PropTypes.func,
  handleFetchNextRepos: PropTypes.func,
  reposInfo: PropTypes.object,
};

App.defaultProps = {
  handleFetchRepos: () => undefined,
  handleFetchPreviousRepos: () => undefined,
  handleFetchNextRepos: () => undefined,
  reposInfo: {},
};

const mapDispatchToProps = dispatch => ({
  handleFetchRepos: () => {
    dispatch(repoActions.fetchRepos());
  },
  handleFetchPreviousRepos: (url) => {
    dispatch(repoActions.fetchReposByPreviousPagination(url));
  },
  handleFetchNextRepos: (url) => {
    dispatch(repoActions.fetchReposByNextPagination(url));
  },
});

function mapStateToProps({ reposInfo }) {
  return { reposInfo };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(App);
