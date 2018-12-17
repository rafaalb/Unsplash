import React, { Component } from 'react'
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import DrawerUI from '@material-ui/core/Drawer';
import IconButton from '@material-ui/core/IconButton';
import CssBaseline from '@material-ui/core/CssBaseline';
import Divider from '@material-ui/core/Divider';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import FilterIcon from '@material-ui/icons/FilterList';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import SortByAlphaIcon from '@material-ui/icons/SortByAlpha';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import AgeSlider from './AgeSlider';
import SortIcon from '@material-ui/icons/Sort';
import SearchAppBar from './SearchAppBar';
import { sortByName, filterByAge } from './../redux/actions';
import { connect } from 'react-redux';

const drawerWidth = 280;

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
  constructor(props) {
    super(props);
    this.state = {
      open: false,
      expandedAge: false
    }
  }
  handleDrawerOpen = () => {
    this.setState({ open: true });
  };

  handleDrawerClose = () => {
    this.setState({ open: false });
  };
  onClickSort = (property, order) => {
    const { dispatch } = this.props;
    dispatch(sortByName(property, order));
  }
  onClickFilter = (min, max) => {
    const { dispatch } = this.props;
    dispatch(filterByAge(min, max));
  }
  render() {
    const { classes, theme } = this.props;
    const { open, expandedAge } = this.state;

    return (
      <div className={classes.root}>
        <CssBaseline />
        <SearchAppBar
          isOpen={open}
          onOpen={() => this.setState({ open: !this.state.open })}
        />
        <DrawerUI
          className={classes.drawer}
          variant="persistent"
          anchor="left"
          open={open}
          classes={{
            paper: classes.drawerPaper,
          }}
        >
          <div className={classes.drawerHeader}>
            <IconButton onClick={this.handleDrawerClose}>
              {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
            </IconButton>
          </div>
          <Divider />
          <List>
            <ListItem button disabled>
              <ListItemText primary={'Sort options'} />
            </ListItem>
            <ListItem button onClick={() => this.onClickSort('name', 'asc')}>
              <ListItemIcon><SortByAlphaIcon /></ListItemIcon>
              <ListItemText primary={'Sort by name ASC'} />
            </ListItem>
            <ListItem button onClick={() => this.onClickSort('name', 'desc')}>
              <ListItemIcon><SortIcon /></ListItemIcon>
              <ListItemText primary={'Sort by name DESC'} />
            </ListItem>
            <ListItem button onClick={() => this.onClickSort('age', 'asc')}>
              <ListItemIcon><SortByAlphaIcon /></ListItemIcon>
              <ListItemText primary={'Sort by age'} />
            </ListItem>
          </List>
          <Divider />
          <List>
            <ExpansionPanel
              expanded={expandedAge}
              onChange={() => this.setState({ expandedAge: !this.state.expandedAge })}
              style={{ boxShadow: 'none' }}
            >
              <ExpansionPanelSummary style={{ paddingLeft: 0 }} expandIcon={<ExpandMoreIcon />}>
                <ListItem>
                  <ListItemIcon>
                    <FilterIcon />
                  </ListItemIcon>
                  <ListItemText primary={'Filter by age'} />
                </ListItem>
              </ExpansionPanelSummary>
              <ExpansionPanelDetails>
                <AgeSlider onFilter={this.onClickFilter} />
              </ExpansionPanelDetails>
            </ExpansionPanel>
            <Divider />
          </List>
        </DrawerUI>
        <main
          className={classNames(classes.content, {
            [classes.contentShift]: open,
          })}
        >
          <div className={classes.drawerHeader} />
          {this.props.children}
        </main>
      </div>
    );
  }
}

const StyledDrawer = withStyles(styles, { withTheme: true })(Drawer);
export default connect()(StyledDrawer);
export { drawerWidth };