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
        >Connect The People</Typography>

        <Typography variant = "body1" align ="center" gutterBottom> 
            Use arrow keys to move around, and Q, W, E to make an action. 
        </Typography>

        <Typography variant = "body1" align ="center" gutterBottom> 
            Each tribe reponds to actions differently!
        </Typography>
        
    </header>;
}