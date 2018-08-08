import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import StarIcon from '@material-ui/icons/Stars';

const styles = theme => ({ // eslint-disable-line no-unused-vars
  reposList: {
    position: 'relative',
  },
  card: {
    marginTop: '16px',
    marginBottom: '16px',
  },
  starsIcon: {
    display: 'inline-block',
    paddingLeft: '16px',
    paddingRight: '16px',
  },
  watchersItem: {
    display: 'flex',
    alignItems: 'center',
  },
  watchersTitle: {
    display: 'inline-block',
    paddingLeft: '16px',
    paddingRight: '16px',
  },
});

const ReposList = (props) => {
  const { classes, topRepos, getRepoWithContributors } = props;

  return (
    <section className={classes.reposList}>
      <h1>
        Top 5 Repos!
      </h1>
      {topRepos &&
        topRepos.map((repo) => {
          const card = (
            <Card className={classes.card} key={repo.id}>
              <CardContent>
                <h2>
                  {repo.name}
                </h2>
                <div className={classes.watchersItem}>
                  <StarIcon className={classes.starIcon} />
                  <h3 className={classes.watchersTitle}>
                    {`Number of Watchers: ${repo.watchers}`}
                  </h3>
                  <StarIcon className={classes.starIcon} />
                </div>
              </CardContent>
              <CardActions>
                <Button
                  size="small"
                  onClick={() => getRepoWithContributors(repo, repo.contributors_url)}
                >
                  Get Repo
                </Button>
              </CardActions>
            </Card>
          );
          return card;
        })
      }
    </section>
  );
};

ReposList.propTypes = {
  classes: PropTypes.object.isRequired,
  topRepos: PropTypes.array,
  getRepoWithContributors: PropTypes.func,
};

ReposList.defaultProps = {
  topRepos: [],
  getRepoWithContributors: () => undefined,
};

export default withStyles(styles, { withTheme: true })(ReposList);
