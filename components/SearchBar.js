import React, { Component } from 'react'
import { withStyles } from '@material-ui/core/styles'
import InputBase from '@material-ui/core/InputBase';
import { fade } from '@material-ui/core/styles/colorManipulator';
import SearchIcon from '@material-ui/icons/Search';
import Loading from './Loading'
import _size from 'lodash/size'
import { connect } from 'react-redux'

const styles = (theme) => ({
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    color: 'white',
    backgroundColor: fade(theme.palette.common.white, 0.15),
    marginRight: 5,
    '&:hover': {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginLeft: '20px!important',
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing.unit,
      width: 'auto',
    },
    [theme.breakpoints.down('xs')]: {
      marginLeft: '0px!important',
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
    fontFamily: 'Gotham Rounded'
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
})

class SearchBar extends Component {
  state = {
    searchText: '',
  }
  _onEnterPress = (ev) => {
    if (ev.key === 'Enter') {
      this.props.toggleError(false)
      ev.preventDefault();
      this.props.onEnterPress(this.state.searchText).then((res) => {
        if (!_size(this.props.users.data)) {
          this.props.toggleError(true)
        }
      })
    }
  }
  render() {
    const { classes } = this.props;
    if (this.props.users.loading) return <Loading /> 
    return (
      <div className={classes.search}>
        <div className={classes.searchIcon}>
          <SearchIcon color="primary" />
        </div>
        <InputBase
          placeholder="Search"
          value={this.state.searchText}
          classes={{
            root: classes.inputRoot,
            input: classes.inputInput,
          }}
          onChange={(e) => this.setState({ searchText: e.target.value })}
          onKeyPress={this._onEnterPress}
        />
      </div>
    )
  }
}

const StyledSearch = withStyles(styles)(SearchBar)
export default connect(state => state)(StyledSearch)