import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Slider from '@material-ui/lab/Slider';
import Button from '@material-ui/core/Button';

const styles = theme => ({
  root: {
    width: 300,
  },
  slider: {
    padding: '22px 0px',
  },
  button: {
    margin: theme.spacing.unit,
  },
  error: {
    color: 'red',
    fontSize: '1rem'
  }
});

class AgeSlider extends React.Component {
  static defaultProps = {
    classes: {},
    onFilter: () => {}
  };

  state = {
     min: 0,
     max: 100,
     error: null
  };

  onClick = () => {
    const { min, max } = this.state;
    if (min < max) {
      this.props.onFilter(min * 5, max * 5);
    } else {
      this.setState({ error: 'Check your values again' });
    }
  }
  render() {
    const { classes } = this.props;
    const { min, max, error } = this.state;

    return (
      <div className={classes.root}>
        <Typography id="label">Min age: {Math.ceil(min * 5)}</Typography>
        <Slider
          classes={{ container: classes.slider }}
          value={min}
          aria-labelledby="Min Age"
          onChange={(e, val) => this.setState({ min: val, error: null })}
        />
        <Typography id="label">Max age: {Math.ceil(max * 5)}</Typography>
        <Slider
          classes={{ container: classes.slider }}
          value={max}
          aria-labelledby="Max Age"
          onChange={(e, val) => this.setState({ max: val, error: null })}
        />
        {error && <p className={classes.error}>{error}</p>}
        <Button
          variant="outlined"
          color="primary"
          className={classes.button}
          onClick={this.onClick}
        >
          Filter
        </Button>
      </div>
    );
  }
}

AgeSlider.propTypes = {
  classes: PropTypes.object.isRequired,
  onFilter: PropTypes.func,
};

export default withStyles(styles)(AgeSlider);
export { AgeSlider };
