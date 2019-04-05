import React from 'react';
import { makeStyles } from '@material-ui/styles';
import { Typography } from '@material-ui/core';
const useStyles = makeStyles({
    root: {

    },
});

export default function StudentEditFormLayout({ children }) {
    const classes = useStyles();
    return <header className={classes.root}>
        <Typography
            variant="h1"
            align="center"
            gutterBottom
        >Acme Student Mangement Tool</Typography>
    </header>;
}