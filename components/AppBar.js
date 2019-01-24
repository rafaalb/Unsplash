import React, { Component } from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Badge from '@material-ui/core/Badge';
import MailIcon from '@material-ui/icons/Mail';
import NotificationsIcon from '@material-ui/icons/Notifications';
import { withStyles } from '@material-ui/core/styles';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import { searchItems } from '../redux/actions'
import { connect } from 'react-redux';
import styled from 'styled-components';
import { drawerWidth } from './Main'

const logo = 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4a/Unsplash_wordmark_logo.svg/2000px-Unsplash_wordmark_logo.svg.png';
const profileImage = 'https://www.rafaelpina.com/static/profile-f0b81bf77c315c437f6e0955dfcca663.jpg';

const Logo = styled.div`
  @media screen and (max-width: 500px) {
    display: none;
  }
`;

const styles = theme => ({
  appBar: {
    backgroundColor: 'white',
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  grow: {
    flexGrow: 1,
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
    [theme.breakpoints.down('xs')]: {
      marginRight: 0,
    },
  },
  title: {
    transform: 'skew(-5deg) rotate(-4deg)'
  },
  imageProfile: {
    borderRadius: 15,
    height: 30,
    width: 'auto',
    marginLeft: 10,
    border: '1px solid white',
    cursor: 'pointer',
    '&:hover': {
      opacity: 0.7
    },
  },
  inputInput: {
    paddingTop: theme.spacing.unit,
    paddingRight: theme.spacing.unit,
    paddingBottom: theme.spacing.unit,
    paddingLeft: theme.spacing.unit * 10,
    transition: theme.transitions.create('width'),
    width: '100%',
    fontSize: 18,
    [theme.breakpoints.up('sm')]: {
      width: 180,
      paddingLeft: 60,
      '&:focus': {
        width: 250,
      },
    },
    [theme.breakpoints.down('xs')]: {
      paddingLeft: 50,
    },
  },
});

class SearchAppBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchText: ''
    }
  }
  _onEnterPress = (ev) => {
    const { dispatch } = this.props;
    if (ev.key === 'Enter') {
      ev.preventDefault();
      dispatch(searchItems(this.state.searchText));
    }
  }
  handleDrawerClose = () => {
    this.props.handleDrawerClose()
  }
  handleDrawerOpen = () => {
    this.props.handleDrawerOpen()
  }
  render() {
    const { classes, isOpen, onOpen, theme } = this.props;
    return (
      <AppBar
        position="fixed"
        className={classNames(classes.appBar, {
          [classes.appBarShift]: isOpen,
        })}
      >
        <Toolbar>
          {!isOpen && 
            <IconButton
              onClick={onOpen}
              className={classes.menuButton}
              color="inherit"
              aria-label="Open drawer"
            >
              <MenuIcon />
            </IconButton>
          }
          {isOpen &&
            <IconButton onClick={this.handleDrawerClose}>
              {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
            </IconButton>
          }
          <Logo>
            <img
              src={logo}
              alt="logo-image"
              height={25}
              className={classes.title}
            />
          </Logo>
          <div className={classes.grow} />
          <img
            src={profileImage}
            alt="profile-image"
            className={classes.imageProfile}
          />
        </Toolbar>
      </AppBar>
    )
  }
}

SearchAppBar.propTypes = {
  classes: PropTypes.object.isRequired,
};

const Search = withStyles(styles, { withTheme: true })(SearchAppBar);
export default connect()(Search);