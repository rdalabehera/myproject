import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import {Link} from 'react-router-dom'

const styles = {
  menuItem: {
    marginRight: 15,
    color: '#fff',
    textDecoration: 'none'
  },
};

class MenuBar extends React.Component {
  render() {
    const { classes } = this.props;
    return (
      <div className="App">
        <table>
          <tr>
            <td>
<div>
<table>
  <tr>
    <td> <img src="../Logo.png" alt="ProcessMAP Inida Pvt. Ltd"></img></td>
    <td></td>
  </tr>
</table>
</div>
            </td>
          </tr>
          <tr>
            <td>
            <img src="../EHSImage.jpg" alt="EHS" className="imgClass"></img>
        <AppBar position="static">
          <Toolbar>
            <Link className={classes.menuItem} exact  to="/">Home</Link>
            <Link className={classes.menuItem} to="/registration">Link to Details</Link>
            <Link className={classes.menuItem} to="/details">Link to List</Link>
          </Toolbar>
        </AppBar>
            </td>
          </tr>
        </table>
      
      </div>
    );
  }
}

MenuBar.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(MenuBar);
