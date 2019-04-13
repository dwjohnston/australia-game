import React, { useEffect } from 'react';
import { makeStyles } from '@material-ui/styles';
import { connect } from 'react-redux';

import Symbol from './Symbol';

const useStyles = makeStyles(theme => ({
    root: {
        display: "flex", 
        flexFlow: "row nowrap", 
        justifyContent: "center", 
    },

}));



function SymbolPanel({ }) {
    const classes = useStyles();
    return <div className= {classes.root}>

        <Symbol id = "Q"/>
        <Symbol id = "W"/>
        <Symbol id = "E"/>

    </div>
;
}


const mapStateToProps = (
    state,
    ownProps
) => {
    return {
    };
};

const mapDispatchToProps = dispatch => {
    return {


    };
};
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(SymbolPanel);