import React from 'react';
import { makeStyles } from '@material-ui/styles';
import { Typography } from '@material-ui/core';
const useStyles = makeStyles((theme) =>{

    return  ({
        root: {
            padding: theme.spacing.unit* 4
        },
    })
});

export default function StudentEditFormLayout({ children }) {
    const classes = useStyles();
    return <header className={classes.root}>
        <Typography
            variant="h1"
            align="center"
            gutterBottom
        >Grid Tribes</Typography>
        
    </header>;
}