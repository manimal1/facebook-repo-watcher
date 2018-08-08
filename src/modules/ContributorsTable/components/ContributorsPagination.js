import React from 'react';
import PropTypes from 'prop-types';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { withStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import FirstPageIcon from '@material-ui/icons/FirstPage';
import KeyboardArrowLeft from '@material-ui/icons/KeyboardArrowLeft';
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight';
import LastPageIcon from '@material-ui/icons/LastPage';
import { contributorsActions } from '../../../actions';

const actionsStyles = theme => ({
  root: {
    flexShrink: 0,
    color: theme.palette.text.secondary,
    marginLeft: theme.spacing.unit * 2.5,
  },
});

const TablePaginationActions = (props) => {
  const {
    classes,
    theme,
    pagination,
    handlePreviousButtonClick,
    handleNextButtonClick,
    handleFirstPageButtonClick,
    handleLastPageButtonClick,
  } = props;

  return (
    <tfoot className={classes.root}>
      {pagination &&
        (
          <tr>
            <td>
              <IconButton
                onClick={() => handleFirstPageButtonClick(pagination.first.url)}
                disabled={!pagination.first}
                aria-label="First Page"
              >
                {theme.direction === 'rtl' ? <LastPageIcon /> : <FirstPageIcon />}
              </IconButton>
              <IconButton
                onClick={() => handlePreviousButtonClick(pagination.prev.url)}
                disabled={!pagination.prev}
                aria-label="Previous Page"
              >
                {theme.direction === 'rtl' ? <KeyboardArrowRight /> : <KeyboardArrowLeft />}
              </IconButton>
            </td>
            <td>
              <IconButton
                onClick={() => handleNextButtonClick(pagination.next.url)}
                disabled={!pagination.next}
                aria-label="Next Page"
              >
                {theme.direction === 'rtl' ? <KeyboardArrowLeft /> : <KeyboardArrowRight />}
              </IconButton>
              <IconButton
                onClick={() => handleLastPageButtonClick(pagination.last.url)}
                disabled={!pagination.last}
                aria-label="Last Page"
              >
                {theme.direction === 'rtl' ? <FirstPageIcon /> : <LastPageIcon />}
              </IconButton>
            </td>
          </tr>
        )
      }
    </tfoot>
  );
};

TablePaginationActions.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired,
  pagination: PropTypes.object,
  handlePreviousButtonClick: PropTypes.func,
  handleNextButtonClick: PropTypes.func,
  handleFirstPageButtonClick: PropTypes.func,
  handleLastPageButtonClick: PropTypes.func,

};

TablePaginationActions.defaultProps = {
  pagination: {},
  handlePreviousButtonClick: () => undefined,
  handleNextButtonClick: () => undefined,
  handleFirstPageButtonClick: () => undefined,
  handleLastPageButtonClick: () => undefined,
};

const mapDispatchToProps = dispatch => ({
  handlePreviousButtonClick: (url) => {
    dispatch(contributorsActions.fetchContributorsByPreviousPagination(url));
  },
  handleNextButtonClick: (url) => {
    dispatch(contributorsActions.fetchContributorsByNextPagination(url));
  },
  handleFirstPageButtonClick: (url) => {
    dispatch(contributorsActions.fetchContributorsByFirstPagination(url));
  },
  handleLastPageButtonClick: (url) => {
    dispatch(contributorsActions.fetchContributorsByNextPagination(url));
  },
});

function mapStateToProps({}) { // eslint-disable-line no-empty-pattern
  return {};
}
export default compose(
  withStyles(actionsStyles, { withTheme: true }),
  connect(
    mapStateToProps,
    mapDispatchToProps,
  ),
)(TablePaginationActions);
