import React, { useEffect } from 'react';
import { makeStyles } from '@material-ui/styles';
import { connect } from 'react-redux';
import { mapItemSelector } from '../redux/Map';
import { cursorSelector } from '../redux/Keys';

const SIZE = 20; 
const useStyles = makeStyles(theme => ({
    root: {
        width: SIZE, 
        height: SIZE, 
        border: "solid 1px black", 
        margin: 2, 
    },
}));

function MapSquare({mapItem, isCursor}) {
    const classes = useStyles();
    const {color} = mapItem;  
    return <div className = {classes.root} style = {{
        backgroundColor: color, 
        border: isCursor? "solid 2px red" : "solid 1px black", 
    }}>

     </div>
;
}


const mapStateToProps = (
    state,
    ownProps
) => {
    return {
       mapItem: mapItemSelector(state, ownProps.x, ownProps.y),
       isCursor: cursorSelector(state, ownProps.x, ownProps.y)
    };
};

const mapDispatchToProps = dispatch => {
    return {

    };
};
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(MapSquare);