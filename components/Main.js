import React, { Component } from 'react'
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from './AppBar';
import Drawer from './Drawer';
import Items from './Items';
import { sortByName, filterByAge } from '../redux/actions';
import { connect } from 'react-redux';
import styled from 'styled-components'

const drawerWidth = 280;

const Footer = styled.div`
  position: absolute;
  width: 100%;
  bottom: -60px;
  display: flex;
  justify-content: center;
  a {
    margin-left: 10px;
    &:hover {
      color: white;
    }
    @media screen and (max-width: 600px) {
      font-size: 13px;
    }
  }
  @media screen and (max-width: 600px) {
    justify-content: flex-start;
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
    position: 'relative',
    marginBottom: 100,
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

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: true,
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
    const { classes } = this.props;
    const { open } = this.state;

    return (
      <div className={classes.root}>
        <CssBaseline />
        <AppBar
          isOpen={open}
          handleDrawerOpen={this.handleDrawerOpen}
          handleDrawerClose={this.handleDrawerClose}
          onOpen={() => this.setState({ open: !this.state.open })}
        />
        <Drawer
          isOpen={this.state.open}
          onSelect={() => this.setState({ open: false })}
        />
        <div
          className={classNames(classes.content, {
            [classes.contentShift]: open,
          })}
        >
          <div className={classes.drawerHeader} />
          <Items />
          {this.state.open && 
          <Footer>
            <a href="#" className="icon fa-twitter"><span className="label">Twitter</span></a>
            <a href="#" className="icon fa-facebook"><span className="label">Facebook</span></a>
            <a href="#" className="icon fa-instagram"><span className="label">Instagram</span></a>
            <a href="#" className="icon fa-github"><span className="label">GitHub</span></a>
          </Footer>}
        </div>
      </div>
    );
  }
}

const StyledMain = withStyles(styles, { withTheme: true })(Main);
export default connect()(StyledMain);
export { drawerWidth };