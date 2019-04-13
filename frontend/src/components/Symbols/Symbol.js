import React, { useEffect } from 'react';
import { makeStyles } from '@material-ui/styles';
import { connect } from 'react-redux';


const useStyles = makeStyles(theme => ({
    root: {

    },
    mapRow: {
        display :"flex", 
        flexFlow: "row nowrap", 
    }
}));



function Symbol({ symbolData, id }) {
    const classes = useStyles();
    return <div className= {classes.root}>

            {JSON.stringify(id)}
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
)(Symbol);