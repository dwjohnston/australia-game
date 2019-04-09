import React from 'react';
import { makeStyles } from '@material-ui/styles';
import StandardPageLayout from './StandardPageLayout';
const useStyles = makeStyles({
    root: {
        padding: "2em",
        display: "flex", 
        flexFlow: "column nowrap", 
        alignItems: "stretch",
        maxWidth: 600, 
        margin: "0 auto", 
    },
});

export default function StudentEditFormLayout({ children }) {
    const classes = useStyles();
    return <StandardPageLayout>
        <div className={classes.root}>
            {children}
        </div>
    </StandardPageLayout>;
}