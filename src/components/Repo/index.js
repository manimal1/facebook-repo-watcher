import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { ContributorsTable } from '../../modules';

const styles = theme => ({ // eslint-disable-line no-unused-vars
  repo: {
    position: 'relative',
  },
  header: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  title: {
    display: 'inline',
  },
  subtitle: {
    display: 'inline',
  },
});

const Repo = (props) => {
  const { classes, repo, contributorsInfo } = props;

  return (
    <section className={classes.repo}>
      <div className={classes.header}>
        <h1 className={classes.title}>
          {repo.name}
        </h1>
        <p className={classes.subtitle}>
          <span>
            # watchers :
          </span>
          <span>
            {repo.watchers}
          </span>
        </p>
      </div>
      <ContributorsTable {...{ contributorsInfo }} />
    </section>
  );
};

Repo.propTypes = {
  classes: PropTypes.object.isRequired,
  repo: PropTypes.object,
  contributorsInfo: PropTypes.object,
};

Repo.defaultProps = {
  repo: {},
  contributorsInfo: {},
};

export default withStyles(styles, { withTheme: true })(Repo);
