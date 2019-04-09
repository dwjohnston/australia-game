import React from 'react';
import { makeStyles } from '@material-ui/styles';
import { connect } from 'react-redux';
import { Fab, Typography } from '@material-ui/core';
import CloseIcon from '@material-ui/icons/Close';
import { selectAllErrors, requestClearAllErrors } from '../../redux/genericReduxCreators';

const useStyles = makeStyles((theme) => {
    console.log(theme);
    return {
        root: {
            padding: "1em",
            margin: "1em 2em",
            color: `${theme.palette.secondary.main}`,
            fontWeight: "bold",
            border: `solid 3px ${theme.palette.secondary.main}`,
            borderRadius: 5
        },

        button: {
            display: "block",
            margin: "0 0 0 auto",
        }
    }
},

);

function ErrorPanel({ errors, clearErrors }) {
    const classes = useStyles();

    return (errors.length > 0 && <div className={classes.root}>
        <Typography variant="p">    Uh oh, something went wrong. </Typography>
        <Fab
            color="secondary"
            size="small"
            className={classes.button}
            onClick={clearErrors}
        >
            <CloseIcon />
        </Fab>
    </div>);
}



const mapStateToProps = (
    state,
    ownProps
) => {
    return {
        errors: selectAllErrors(state),
    };
};

const mapDispatchToProps = dispatch => {
    return {
        clearErrors: () => dispatch(requestClearAllErrors())
    };
};
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ErrorPanel);