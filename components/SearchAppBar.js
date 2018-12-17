import React, { Component } from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import InputBase from '@material-ui/core/InputBase';
import { fade } from '@material-ui/core/styles/colorManipulator';
import { withStyles } from '@material-ui/core/styles';
import MenuIcon from '@material-ui/icons/Menu';
import { searchItems } from '../redux/actions'
import { connect } from 'react-redux';
import SearchIcon from '@material-ui/icons/Search';

import { drawerWidth } from './Drawer'

const styles = theme => ({
  appBar: {
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
  },
  title: {
    display: 'none',
    [theme.breakpoints.up('sm')]: {
      display: 'block',
      fontFamily: 'radnika_next',
      transform: 'skew(-5deg) rotate(-1deg)'
    },
  },
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing.unit,
      width: 'auto',
    },
  },
  searchIcon: {
    width: theme.spacing.unit * 9,
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputRoot: {
    color: 'inherit',
    width: '100%',
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
      '&:focus': {
        width: 250,
      },
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
  render() {
    const { classes, isOpen, onOpen } = this.props;
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
          <Typography className={classes.title} variant="h3" color="inherit" noWrap>
            Brastlewark
          </Typography>
          <div className={classes.grow} />
          <div className={classes.search}>
            <div className={classes.searchIcon}>
              <SearchIcon />
            </div>
            <InputBase
              placeholder="Filter by name"
              value={this.state.searchText}
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}
              onChange={(e) => this.setState({ searchText: e.target.value })}
              onKeyPress={this._onEnterPress}
            />
          </div>
        </Toolbar>
      </AppBar>
    )
  }
}

SearchAppBar.propTypes = {
  classes: PropTypes.object.isRequired,
};

const Search = withStyles(styles)(SearchAppBar);
export default connect()(Search);