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
  const { classes = {}, repo = {}, contributorsInfo = [] } = props;
  const { contributors } = contributorsInfo;

  return (
    <main className={classes.repo}>
      <h1>
        {repo.name}
      </h1>
      <ul>
        {contributors &&
          contributors.map((contributor) => {
            const item = (
              <li>
                {contributor.login}
              </li>
            );
            return item;
          })
        }
      </ul>
    </main>
  );
};

Repo.propTypes = {
  classes: PropTypes.object,
  repo: PropTypes.object,
  contributorsInfo: PropTypes.object,
};

Repo.defaultProps = {
  classes: {},
  repo: {},
  contributorsInfo: {},
};

export default withStyles(styles, { withTheme: true })(Repo);
