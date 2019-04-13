import React, { useEffect } from 'react';
import { makeStyles } from '@material-ui/styles';
import { connect } from 'react-redux';
import Map from './Map';

const useStyles = makeStyles(theme => ({
    root: {

    },
}));

function Main({  }) {

    return <div>

        hello world

        <Map/>
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
)(Main);