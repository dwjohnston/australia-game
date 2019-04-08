import React, { useState } from 'react';
import { makeStyles } from '@material-ui/styles';
import { Table, TableHead, TableBody, TableRow, TableCell } from '@material-ui/core';
import { connect } from 'react-redux';
import ButtonGroup from '../generic/ButtonGroup';
import { Link } from "react-router-dom";
import * as Routes from "../../routes/routes";
import {deleteStudentRedux} from "../../redux/Student/student"; 
import Button from "../generic/Button";
import ControlPanel from './ControlPanel';
import { selectAllStudents } from '../../redux/selectors';
const useStyles = makeStyles({
    root: {

    },

    currencyColumn: {
        textAlign: "right",
    }
});

function StudentTable({ students, deleteStudent, currencyRate }) {
    const classes = useStyles();

    return (
        <section>
            <ControlPanel
  
            />
            <Table className={classes.root}>
                <TableHead>
                    <TableRow>
                        <TableCell>Student ID</TableCell>
                        <TableCell>Student Name</TableCell>
                        <TableCell>Grade</TableCell>
                        <TableCell>Action</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {students && students.map((student, i) => {
                        return (<TableRow
                            key={student.id}
                        >
                            <TableCell>{student.id}</TableCell>
                            <TableCell>{student.name}</TableCell>
                            <TableCell>{student.grade}</TableCell>
                            <TableCell>
                                <ButtonGroup>
                                    <Button
                                        component={Link}
                                        to={`${Routes.UPDATE_STUDENT}/${student.id}`}
                                        color="primary"
                                    >Update</Button>
                                    <Button
                                        onClick={() => deleteStudent(student)}
                                        color="secondary"
                                    >Delete</Button>
                                </ButtonGroup>
                            </TableCell>
                        </TableRow>)
                    })}
                </TableBody>


            </Table>
        </section>);

}




const mapStateToProps = (
    state,
    ownProps
) => {
    console.log(state);
    return {
        students: selectAllStudents(state),
    };
};

const mapDispatchToProps = dispatch => {
    return {
        deleteStudent: (student) => dispatch(deleteStudentRedux.actionFn(student))
    };
};
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(StudentTable); 