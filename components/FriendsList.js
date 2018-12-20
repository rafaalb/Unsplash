import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import Chip from '@material-ui/core/Chip';
import styled from 'styled-components';
import _ from 'lodash';

const styles = theme => ({
  root: {
    width: '100%',
    maxWidth: 360,
    display: 'flex',
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
    backgroundColor: theme.palette.background.paper,
  },
  secondaryText: {
    color: theme.palette.primary.main,
    padding: 0
  },
  chip: {
    margin: theme.spacing.unit,
  },
});


const StyledPrimary = styled(Typography)`
  && {
    color: ${props => props.theme.blue};
    font-weight: 600;
    font-size: 1.3rem;
  }
`;

class FriendsList extends Component {
  static defaultProps = {
    classes: {}
  }
  renderFriends = () => {
    const { item, classes } = this.props;
    return item.friends.map((friend, i) => (
      <Chip
        avatar={<Avatar alt="Natacha" src={item.thumbnail} />}
        label={friend}
        className={classes.chip}
        key={`${friend}_${i}`}
      />
    ))
  }
  render() {
    const { classes, item } = this.props;
    return (
      <List className={classes.root}>
        <div className={classes.listText}>
          <StyledPrimary>
            {!_.size(item.friends) && `No `}
            Friends
          </StyledPrimary>
          {this.renderFriends()}
        </div>
      </List>
    );
  }
}

FriendsList.propTypes = {
  classes: PropTypes.object.isRequired,
};


export default withStyles(styles)(FriendsList);
export { FriendsList };