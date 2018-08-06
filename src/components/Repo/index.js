import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({ // eslint-disable-line no-unused-vars
  repo: {
    position: 'absolute',
    top: '64px',
    left: '0px',
    paddingLeft: '32px',
    paddingTop: '32px',
    [theme.breakpoints.up('md')]: {
      left: '240px',
    },
  },
});

const Repo = (props) => {
  const { repo = {}, classes = {} } = props;

  return (
    <main className={classes.repo}>
      <h1>
        {repo.name}
      </h1>
    </main>
  );
};

Repo.propTypes = {
  repo: PropTypes.object,
  classes: PropTypes.object,
};

Repo.defaultProps = {
  repo: {},
  classes: {},
};

export default withStyles(styles, { withTheme: true })(Repo);
