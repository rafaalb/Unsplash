import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import CircularProgress from '@material-ui/core/CircularProgress';
import styled from 'styled-components';

const Center = styled.div`
  text-align: center;
`;

const styles = theme => ({
  progress: {
    margin: theme.spacing.unit * 2,
  },
});

function CircularIndeterminate(props) {
  const { classes } = props;
  return (
    <Center>
      <CircularProgress className={classes.progress} />
    </Center>
  );
}

CircularIndeterminate.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(CircularIndeterminate);
