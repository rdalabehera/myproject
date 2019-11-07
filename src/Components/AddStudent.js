import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import MenuBar from './MenuBar';
import { allActions } from '../Actions/AllActions';
import { connect } from 'react-redux';
import { Row, Form, Col } from 'react-bootstrap';
const styles = theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  input: {
    margin: theme.spacing.unit,
  },
  button: {
    margin: theme.spacing.unit,
  },
  gapSmall: {
    marginTop:50,
  }
});

class AddPlayer extends React.Component {

  constructor(props) {
      super(props);
      this.state = {
        firstName: '',
        lastName: '',
        emailid:'',
        mobileno:'',
        address:'',
        state:'',          
        country: '',
        pincode:''
      };
  }

  handleValidation(){    
    let errors = {};
    let formIsValid = true;

    //Name
    if(this.state.firstName.length==0){
       formIsValid = false;
       errors["name"] = "Cannot be empty";
       alert("Please eneter name")
    }

    if(typeof this.state.mobileno !== "undefined"){
       if(!this.state.mobileno.match(/^[0-9]+$/)){
          formIsValid = false;
          errors["name"] = "Only letters";
          alert("Mobile number shoud be number only.")
       }        
    }

    //Email
    if(!this.state.emailid){
       formIsValid = false;
       errors["email"] = "Cannot be empty";
       alert("Please enter email id.")
    }

    if(typeof this.state.emailid!== "undefined"){
       let lastAtPos = this.state.emailid.lastIndexOf('@');
       let lastDotPos = this.state.emailid.lastIndexOf('.');

       if (!(lastAtPos < lastDotPos && lastAtPos > 0 && this.state.emailid.indexOf('@@') == -1 && lastDotPos > 2 && (this.state.emailid.length - lastDotPos) > 2)) {
          formIsValid = false;
          errors["email"] = "Email is not valid";
          alert("Email Id is not valid")
        }
   }  

   this.setState({errors: errors});
   return formIsValid;
}
  handleChange(e) {
      this.setState({...this.state, [e.target.name]: e.target.value})
  }

  handleSubmit(e) {
      e.preventDefault();  
      if(this.handleValidation())    
      {
      const { dispatch } = this.props;
      dispatch(allActions.addStudent(this.state));
      this.setState({
          firstName: '',
          lastName: '',
          emailid:'',
          mobileno:'',
          address:'',
          state:'',          
          country: '',
          pincode:''
      });
      alert("Registartion complted sucessfully")
    }
   
 
  }

  render() {
    const { classes, student } = this.props;
    return (
      <div>
        <MenuBar/>
        <h1>Online Student Registration Form</h1>
        <form onSubmit={(e)=>this.handleSubmit(e)}>
        <Form.Group controlId="firstName">
               
                <TextField name="firstName" value={this.state.firstName} label="First Name" className={classes.input} inputProps={{'aria-label': 'Description',}} onChange={(e)=>this.handleChange(e)}/>
                </Form.Group>
                <Form.Group controlId="lastName">
          <TextField name="lastName" value={this.state.lastName} label="Last Name" className={classes.input} inputProps={{'aria-label': 'Description',}} onChange={(e)=>this.handleChange(e)}/>
          </Form.Group>
          <Form.Group controlId="emailid">
          <TextField name="emailid" value={this.state.emailid} label="Email ID" className={classes.input} inputProps={{'aria-label': 'Description',}} onChange={(e)=>this.handleChange(e)}/>
          </Form.Group>
          <Form.Group controlId="mobileno">
          <TextField name="mobileno" value={this.state.mobileno} label="Mobile No" className={classes.input} inputProps={{'aria-label': 'Description',}} onChange={(e)=>this.handleChange(e)}/>
          </Form.Group>
          <Form.Group controlId="address">
          <TextField name="address" value={this.state.address} label="Address" className={classes.input} inputProps={{'aria-label': 'Description',}} onChange={(e)=>this.handleChange(e)}/>
          </Form.Group>
          <Form.Group controlId="state">
          <TextField name="state" value={this.state.state} label="State" className={classes.input} inputProps={{'aria-label': 'Description',}} onChange={(e)=>this.handleChange(e)}/>
          </Form.Group>
          <Form.Group controlId="country">
          <TextField name="country" value={this.state.country} label="Country" className={classes.input} inputProps={{'aria-label': 'Description',}} onChange={(e)=>this.handleChange(e)}/>
          </Form.Group>
          <Form.Group controlId="pincode">
          <TextField name="pincode" value={this.state.pincode} label="Pin Code" className={classes.input} inputProps={{'aria-label': 'Description',}} onChange={(e)=>this.handleChange(e)}/>
          </Form.Group>
          <div>
            <Button type="submit" variant="contained" color="primary" className={classes.button}>
              Add 
            </Button>
          </div>
        </form>
        <div className={classes.gapSmall} style={{display:Object.keys(student).length === 0 ? 'none' : ''}}>
          <h3>Last Added Record</h3>
          <span>
            <p>{'First Name: ' + student.firstName}</p>
            <p>{'Last Name: ' + student.lastName}</p>
            <p>{'Email ID: ' + student.emailid}</p>
            <p>{'Mobile No: ' + student.mobileno}</p>
            <p>{'Address: ' + student.address}</p>
            <p>{'State ' + student.state}</p>
            <p>{'Country: ' + student.country}</p>
            <p>{'Pin Code: ' + student.pincode}</p>
          </span>
        </div>
      </div>
    );
  }
}

AddPlayer.propTypes = {
  classes: PropTypes.object.isRequired,
};

function mapStateToProps(state) {
    const { student } = state.crudStudent;
    return {
        student
    };
}

export default connect(mapStateToProps)(withStyles(styles)(AddPlayer));
