import React, { useEffect } from 'react';
import { makeStyles } from '@material-ui/styles';
import { connect } from 'react-redux';
import { Card, Typography } from '@material-ui/core';
import { symbolSelector } from '../../redux/Symbols';


const useStyles = makeStyles(theme => ({
    root: {
        width: 60, 
        height: 60,
        display: "flex", 
        flexFlow: "column nowrap", 
        alignItems: "center", 
        justifyContent: "space-around", 
        margin: 20, 
    },

}));



function Symbol({ symbolData, id }) {
    const classes = useStyles();
    return <Card className= {classes.root}>

            <Typography variant="body2"> {JSON.stringify(symbolData)}</Typography>

           <Typography variant="body2"> {JSON.stringify(id)}</Typography>
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