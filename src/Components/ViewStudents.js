import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import MenuBar from './MenuBar';
import { allActions } from '../Actions/AllActions';
import { connect } from 'react-redux';
import { Table,Button } from 'react-bootstrap';
const styles = theme => ({
  tableContainer: {
    width: '50%',
    margin: 'auto'
  }
});

class ViewPlayers extends React.Component {
  
 
  componentDidMount(){
    const { dispatch } = this.props;
    dispatch(allActions.viewStudents());
  }

  clickHandler(e) {       
    const { dispatch } = this.props;
    dispatch(allActions.deleteStudent(e));
    dispatch(allActions.viewStudents());
     }


  
  render() {
    const {classes, students } = this.props;
    return (
      <div>
        <MenuBar/>
        <h1>Registration List</h1>
        <span style={{display:(students.length === 0 || students === undefined) ? 'block' : 'none'}}>No records found</span>
        <div>
          <table  className={classes.tableContainer} style={{display:(students.length === 0 || students === undefined) ? 'none' : ''}}>
            <thead>
              <tr>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Email ID</th>
                <th>Mobile No</th>
                <th>Address</th>
                <th>State</th>
                <th>Country</th>
                <th>Pin Code</th>
              </tr>
            </thead>
            <tbody>
              
              {students.map(( student, index ) => {
                return (
                  <tr>
                    <td>{student.firstName}</td>
                    <td>{student.lastName}</td>
                    <td>{student.emailid}</td>
                    <td>{student.mobileno}</td>
                    <td>{student.address}</td>
                    <td>{student.state}</td>
                    <td>{student.country}</td>
                    <td>{student.pincode}</td>
                    <Button variant="danger" className="btn-danger" onClick={this.clickHandler.bind(this, index)}>Delete</Button>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

ViewPlayers.propTypes = {
  classes: PropTypes.object.isRequired,
};

function mapStateToProps(state) {
    const { students } = state.viewStudents;
    return {
        students
    };
}

export default connect(mapStateToProps)(withStyles(styles)(ViewPlayers));
