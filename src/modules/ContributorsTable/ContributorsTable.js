import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Avatar from '@material-ui/core/Avatar';
import ContributorsPagination from './components/ContributorsPagination';

const tableStyles = theme => ({ // eslint-disable-line no-unused-vars
  table: {
    position: 'relative',
  },
});

class ContributorsTable extends Component {
  render() {
    const { classes, contributorsInfo } = this.props;
    const { contributors } = contributorsInfo;
    const { pagination } = contributorsInfo;

    return (
      <Paper>
        <Table className={classes.table}>
          <TableHead>
            <TableRow>
              <TableCell>
                Contributor
              </TableCell>
              <TableCell>
                GH Name
              </TableCell>
              <TableCell>
                Contributions
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {contributors &&
              contributors.map((contributor) => {
                const item = (
                  <TableRow key={contributor.id}>
                    <TableCell>
                      <Avatar alt="user" src={contributor.avatar_url} />
                    </TableCell>
                    <TableCell>
                      {contributor.login}
                    </TableCell>
                    <TableCell>
                      {contributor.contributions}
                    </TableCell>
                  </TableRow>
                );

                return item;
              })
            }
          </TableBody>
          {pagination &&
            <ContributorsPagination {...{ pagination }} />
          }
        </Table>
      </Paper>
    );
  }
}

ContributorsTable.propTypes = {
  classes: PropTypes.object.isRequired,
  contributorsInfo: PropTypes.object,
};

ContributorsTable.defaultProps = {
  contributorsInfo: {},
};

export default withStyles(tableStyles, { withTheme: true })(ContributorsTable);
