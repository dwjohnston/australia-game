import React, { Component } from 'react';
import { connect } from 'react-redux';

import CssBaseline from '@material-ui/core/CssBaseline';
import Router from './Router';
import Header from "./layouts/Header";
import ErrorPanel from './ErrorPanel/ErrorPanel';
import {fetchAllStudentsRedux, updateStudentRedux, deleteStudentRedux} from "../redux/Student/student";
import { createAnyLoadingSelector } from '../redux/genericReduxCreators';
import { withStyles } from '@material-ui/styles';

const styles =  {
  root: props =>  {
    return {
     cursor: props.isLoading? 'wait' : 'default', 
    }
  }
};

class App extends Component {

  constructor(props) {
    super(props);

  }

  render() {

    const {classes} = this.props; 
    console.log(this.props);
    return (
      <CssBaseline>
        <div className = {classes.root}>
          <Header />
          <ErrorPanel />
          <Router />
        </div>
      </CssBaseline>
    );
  }
}

const reduxes = [

]


const mapStateToProps = (
  state,
  ownProps
) => {
  console.log(state);
  return {
  };
};

const mapDispatchToProps = dispatch => {
  return {
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withStyles(styles)(App));
