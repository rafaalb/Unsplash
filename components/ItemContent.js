import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Avatar from '@material-ui/core/Avatar';
import ImageIcon from '@material-ui/icons/Image';
import FaceIcon from '@material-ui/icons/Face';
import WorkIcon from '@material-ui/icons/Work';
import Typography from '@material-ui/core/Typography';
import styled from 'styled-components';
import StringByCommas from './../lib/StringByCommas';

const styles = theme => ({
  root: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
  secondaryText: {
    color: theme.palette.primary.main,
    padding: 0
  }
});

const StyledText = styled(Typography)`
  && {
    color: ${props => props.theme.black};
    padding: 0;
    font-size: 1rem;
    font-weight: 400;
    line-height: 1;
  }
`;

const StyledPrimary = styled(Typography)`
  && {
    color: ${props => props.theme.blue};
    font-weight: 600;
    font-size: 1.3rem;
    @media screen and (max-width: 550px) {
      font-size: 1rem;
    }
  }
`;

class ItemContainer extends Component {
  render() {
    const { classes, item } = this.props;
    return (
      <List className={classes.root}>
        <ListItem>
          <Avatar>
            <ImageIcon />
          </Avatar>
          <ListItemText
            primary={<StyledPrimary>Weight / Height</StyledPrimary>}
            secondary={
              <StyledText>
                {`${item.weight} x ${item.height}`}
              </StyledText>
            }
          />
        </ListItem>
        <ListItem>
          <Avatar>
            <FaceIcon />
          </Avatar>
          <ListItemText
            primary={<StyledPrimary>Hair Color</StyledPrimary>}
            secondary={<StyledText>{item.hair_color}</StyledText>}
          />
        </ListItem>
        <ListItem>
          <Avatar>
            <WorkIcon />
          </Avatar>
          <ListItemText
            primary={<StyledPrimary>Professions</StyledPrimary>}
            secondary={
              <StyledText>
                {StringByCommas(item.professions)}
              </StyledText>
            }
            classes={classes.listText}
          />
        </ListItem>
      </List>
    );
  }
}

ItemContainer.propTypes = {
  classes: PropTypes.object.isRequired,
};


export default withStyles(styles)(ItemContainer);