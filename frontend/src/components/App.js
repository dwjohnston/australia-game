import React, { Component } from 'react';
import { connect } from 'react-redux';

import CssBaseline from '@material-ui/core/CssBaseline';
import { requestFetchAllStudents } from '../redux/actions';
import Router from './Router';
import Header from "./layouts/Header";
import ErrorPanel from './ErrorPanel/ErrorPanel';
class App extends Component {

  constructor(props) {
    super(props);

    props.fetchAllStudents();
  }

  render() {
    return (
      <CssBaseline>
        <Header />
        <ErrorPanel />
        <Router />
      </CssBaseline>
    );
  }
}




const mapStateToProps = (
  state,
  ownProps
) => {
  return {};
};

const mapDispatchToProps = dispatch => {
  return {
    fetchAllStudents: () => dispatch(requestFetchAllStudents()),
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
