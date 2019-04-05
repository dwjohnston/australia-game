import React from 'react';
import { makeStyles } from '@material-ui/styles';
import { Typography } from '@material-ui/core';
import StudentEditForm from './StudentEditForm';
import { createEmptyStudent } from '../../redux/selectors';
import StudentEditFormLayout from '../layouts/StudentEditFormLayout';

const useStyles = makeStyles({
    root: {
        display: "flex",
        flexFlow: "column nowrap",
        alignItems: "stretch",
    },
});

const emptyData = createEmptyStudent();

export default function CreateStudent({ }) {
    const classes = useStyles();
    return <StudentEditFormLayout>
        <Typography variant="h2" gutterBottom>Create Student </Typography>
        <StudentEditForm studentData={emptyData} />
    </StudentEditFormLayout>;
}