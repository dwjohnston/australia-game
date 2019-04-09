import React from 'react';
import { makeStyles } from '@material-ui/styles';
import {navBarLinks} from "../../routes/routes";
import NavLink from './NavLink';

const useStyles = makeStyles({
    root: {
        display: "flex",
        flexFlow: "row nowrap",
    },
});

export default function NavBar({  }) {
    const classes = useStyles();
    return <div className={classes.root}>
    {navBarLinks.map((v, i) => <NavLink label = {v.label} link = {v.link} key = {v.link}/>)}
    </div>;
}