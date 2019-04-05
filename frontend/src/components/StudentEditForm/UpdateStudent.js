import React from 'react';
import { makeStyles } from '@material-ui/styles';
import { Typography } from '@material-ui/core';
import StudentEditForm from './StudentEditForm';
import { connect } from 'react-redux';
import { selectStudentByStudentId } from '../../redux/selectors';
import { requestUpdateStudent } from '../../redux/actions';
import StudentEditFormLayout from '../layouts/StudentEditFormLayout';

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
        submitForm: (studentData) => dispatch(requestUpdateStudent(studentData))
    };
};
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(UpdateStudent);