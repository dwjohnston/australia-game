import React, { useEffect } from 'react';
import { makeStyles } from '@material-ui/styles';
import { connect } from 'react-redux';
import Map from './Map';
import SymbolsPanel from './Symbols/SymbolsPanel';

const useStyles = makeStyles(theme => ({
    root: {

    },
}));

function Main({  }) {

    return <div>
        <SymbolsPanel/>
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