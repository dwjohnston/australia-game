import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/styles';
import {updateStudentRedux} from "../../redux/Student/student"; 
import { Input, TextField } from '@material-ui/core';
import Button from "../generic/Button";
import { connect } from 'react-redux';
import { Redirect } from "react-router-dom";
import { STUDENT_TABLE } from '../../routes/routes';
const useStyles = makeStyles({
    root: {
        display: "flex",
        flexFlow: "column nowrap",
        alignItems: "stretch",

        maxWidth: 600,
    },

    field: {
        //display: "block",
        paddingBottom: "1em",
    }
});

/***
 * Not that happy with the way I've done this. 
 * 
 * Possibly would have been better to use something like Formik. 
 */
function StudentEditForm({ studentData, submitForm, updateLoading }) {
    const classes = useStyles();
    const [name, updateName] = useState(studentData.name);
    const [grade, updateGrade] = useState(studentData.grade);

    const [formSubmitted, updateFormSubmitted] = useState(false);

    return (
        (formSubmitted && !updateLoading) ? <Redirect to={STUDENT_TABLE} /> : <form
            className={classes.root}
            onSubmit={(event) => {
                event.preventDefault();
                submitForm({
                    id: studentData.id,
                    name,
                    grade: grade,
                });

                updateFormSubmitted(true);
            }}
        >
            <TextField
                disabled
                label="Student ID"
                value={studentData.id || "n/a"}
                className={classes.field}
            />
            <TextField
                value={name}
                label="Student Name"
                onChange={(event) => updateName(event.target.value)}
                disabled={updateLoading}
                className={classes.field}

            />

            <TextField
                value={grade}
                label="Grade"
                onChange={(event) => updateGrade(event.target.value)}
                disabled={updateLoading}
                type="text"
                className={classes.field}

            />

            <Button
                type="submit"
                disabled={updateLoading}
                className={classes.field}
                color="primary"

            >Submit</Button>
        </form >
    )

}



const mapStateToProps = (
    state,
    ownProps
) => {
    return {
        updateLoading: updateStudentRedux.loadingSelector(state)
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
)(StudentEditForm);
