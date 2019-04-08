import React from 'react';
import { makeStyles } from '@material-ui/styles';
import { Typography } from '@material-ui/core';
import StudentEditForm from './StudentEditForm';
import { connect } from 'react-redux';
import { selectStudentByStudentId } from '../../redux/selectors';
import StudentEditFormLayout from '../layouts/StudentEditFormLayout';
import {updateStudentRedux} from "../../redux/Student/student"; 

const useStyles = makeStyles({
    root: {

    },
});

function UpdateStudent({ studentData }) {
    const classes = useStyles();
    return <StudentEditFormLayout >
        <Typography variant="h2" gutterBottom>Update Student </Typography>
        {studentData && <StudentEditForm studentData={studentData} />}
    </StudentEditFormLayout >;
}

const mapStateToProps = (
    state,
    ownProps
) => {
    return {
        studentData: selectStudentByStudentId(state, ownProps.match.params.id)
    };
};

const mapDispatchToProps = dispatch => {
    return {
        submitForm: (studentData) => dispatch(updateStudentRedux.actionFn(studentData))
    };
};
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(UpdateStudent);