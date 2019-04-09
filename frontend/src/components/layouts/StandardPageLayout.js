import React from 'react';
import { makeStyles } from '@material-ui/styles';
import NavBar from '../flowLogic/NavBar';
const useStyles = makeStyles({
    root: {
        padding: "2em",
        maxWidth: 1024, 
        margin: "0 auto", 
    },
});

export default function StandardPageLayout({ children }) {
    const classes = useStyles();
    return <div className={classes.root}>
        <NavBar/>

        {children}

    </div>;
}