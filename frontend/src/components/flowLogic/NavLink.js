import React from 'react';
import { makeStyles } from '@material-ui/styles';
import Button from "../generic/Button"; 
import { Link } from 'react-router-dom';
const useStyles = makeStyles({
    root: {

    },
});

export default function NavLink({label, link }) {
    const classes = useStyles();
    return <Button component = {Link} to = {link}>{label}</Button> ;
}