import React, { Component } from 'react'
import Divider from '@material-ui/core/Divider';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Typography from '@material-ui/core/Typography';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import FilterIcon from '@material-ui/icons/FilterList';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import UserList from './UserList';
import DrawerUI from '@material-ui/core/Drawer';
import IconButton from '@material-ui/core/IconButton';
import { connect } from 'react-redux';
import SearchBar from './SearchBar';
import { fetchUsers } from './../redux/actions'
import withSizes from 'react-sizes'
import { withStyles } from '@material-ui/core';
import styled from 'styled-components'
const drawerWidth = 280;

const Footer = styled.div`
  width: 100%;
  margin-top: 20px;
  margin-bottom: 20px;
  position: absolute;
  bottom: 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-left: 20px;
  padding-right: 20px;
  background-color: #18171c;
  a {
    font-size: 10px;
    color: white;
  }
`;

const styles = theme => ({
  root: {
    display: 'flex',
  },
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
  menuButton: {
    marginLeft: 12,
    marginRight: 20,
  },
  hide: {
    display: 'none',
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
    backgroundColor: '#18171c'
  },
  drawerHeader: {
    display: 'flex',
    alignItems: 'center',
    padding: '0 8px',
    ...theme.mixins.toolbar,
    justifyContent: 'flex-end',
  },
  content: {
    flexGrow: 1,
    marginTop: 50,
    padding: theme.spacing.unit * 3,
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: -drawerWidth,
  },
  contentShift: {
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: 0,
  },
});


class Drawer extends Component {
  state = {
    expandedAge: true,
    isMobile: false,
    error: false
  }
  _onEnterPress = (payload) => {
    return this.props.fetchUsers(payload);
  }
  // componentDidMount() {
  //   if (this.props.isMobile) {
  //     this.setState({ open: false });
  //   }
  // }

  handleDrawerClose = () => {
    this.props.handleDrawerClose()
  }
  handleDrawerOpen = () => {
    this.props.handleDrawerOpen()
  }
  render() {
    const { classes, theme } = this.props;
    return (
      <DrawerUI
        className={classes.drawer}
        variant="persistent"
        anchor="left"
        open={this.props.isOpen}
        classes={{
          paper: classes.drawerPaper,
        }}
      >

        <div className={classes.drawerHeader}>
          <SearchBar
            onEnterPress={this._onEnterPress}
            toggleError={(error) => this.setState({ error })}
          />
        </div>
        <List>
          <ExpansionPanel
            expanded={this.state.expandedAge}
            onChange={() => this.setState({ expandedAge: !this.state.expandedAge })}
            style={{ boxShadow: 'none', backgroundColor: 'transparent' }}
          >
            <ExpansionPanelSummary style={{ paddingLeft: 0 }} expandIcon={<ExpandMoreIcon color={'secondary'}/>}>
              <ListItem>
                <ListItemIcon>
                  <FilterIcon color={'secondary'}/>
                </ListItemIcon>
                <ListItemText
                  primary={
                    <Typography
                      type="body2"
                      style={{ color: '#FFFFFF', fontFamily: 'Gotham Rounded' }}
                    >
                      List of Users
                    </Typography>
                  }
                />
              </ListItem>
            </ExpansionPanelSummary>
            <ExpansionPanelDetails style={{ flexDirection: 'column' }}>
              {this.state.error ? <p>No results found</p> : <UserList onSelect={this.props.onSelect} />}
            </ExpansionPanelDetails>
          </ExpansionPanel>
          <Divider />
        </List>
      </DrawerUI>
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchUsers: (payload) => dispatch(fetchUsers(payload))
  }
}

const mapSizesToProps = ({ width }) => ({
  isMobile: width < 600,
})

const StyledDrawer = withStyles(styles, { withTheme: true })(Drawer)
const withSize = withSizes(mapSizesToProps)(StyledDrawer)
export default connect(null, mapDispatchToProps)(withSize)