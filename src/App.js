import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  BrowserRouter,
  // Route,
} from 'react-router-dom';
import { connect } from 'react-redux';
import CssBaseline from '@material-ui/core/CssBaseline';
import { fetchRepos } from './actions';

class App extends Component {
  componentDidMount() {
    const {
      fetchRepos, // eslint-disable-line no-shadow
    } = this.props;
    fetchRepos();
  }

  render() {
    // const { repos = [] } = this.props;

    return (
      <BrowserRouter>
        <React.Fragment>
          <CssBaseline />
          <div className="app">
            This is a good start!
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
  fetchRepos: PropTypes.func,
  // repos: PropTypes.array,
};

App.defaultProps = {
  fetchRepos: () => undefined,
  // repos: [],
};

function mapStateToProps({ repos }) {
  return { repos };
}

export default connect(
  mapStateToProps,
  { fetchRepos },
)(App);
