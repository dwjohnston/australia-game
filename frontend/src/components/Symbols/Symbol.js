import React, { useEffect } from 'react';
import { makeStyles } from '@material-ui/styles';
import { connect } from 'react-redux';
import { Card, Typography } from '@material-ui/core';
import { symbolSelector } from '../../redux/Symbols';
import a from "../../images/a.png"; 
import b from "../../images/b.png"; 

import c from "../../images/c.png"; 

import d from "../../images/d.png"; 


const useStyles = makeStyles(theme => ({
    root: {
        width: 100, 
        height: 100,
        display: "flex", 
        flexFlow: "column nowrap", 
        alignItems: "center", 
        justifyContent: "space-around", 
        margin: 20, 
        padding: 20, 
    },

    image: {
        objectFit: "scale-down", 
    }

}));


const imageMap = {
    A: a, 
    B: b, 
    C: c, 
    D: d, 
}


function Symbol({ symbolData, id }) {
    const classes = useStyles();
    return <Card className= {classes.root}>

            <img src = {imageMap[symbolData]} className = {classes.image}/>

           <Typography variant="body2"> {id}</Typography>
    </Card>
;
}


const mapStateToProps = (
    state,
    ownProps
) => {
    return {

        symbolData: symbolSelector(state, ownProps.id)
    };
};


const mapDispatchToProps = dispatch => {
    return {


    };
};
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Symbol);