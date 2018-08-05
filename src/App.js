import React, { Component } from 'react';
import {
  BrowserRouter,
  Route,
} from 'react-router-dom';
import { connect } from 'react-redux';
import CssBaseline from '@material-ui/core/CssBaseline';

class App extends Component {

  render() {
    return (
      <BrowserRouter>
        <React.Fragment>
          <CssBaseline />
          <div className="app">
          <Route exact path="/" component={} />
          </div>
        </React.Fragment>
      </BrowserRouter>
    );
  }
}

function mapStateToProps({  }) {
  return {  };
}

export default connect(
  mapStateToProps,
  {  },
)(App);
