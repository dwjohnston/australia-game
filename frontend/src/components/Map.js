import React, { useEffect } from 'react';
import { makeStyles } from '@material-ui/styles';
import { connect } from 'react-redux';
import { mapRedux } from '../redux/Map';
import MapSquare from './MapSquare';
import { keysRedux } from '../redux/Keys';

const useStyles = makeStyles(theme => ({
    root: {

    },
    mapRow: {
        display :"flex", 
        flexFlow: "row nowrap", 
    }
}));



function Map({ map, keyPress, }) {
    const classes = useStyles();

    useEffect(()=> {
        document.addEventListener("keydown", (event) => {
            console.log(event.keyCode);
            keyPress(event.keyCode); 
        }, false);

        return () => {
            //Unbind event listeners.
        }
    })
    return <div className= {classes.root}>

        {map.map((v,i) => {
            return <div className ={classes.mapRow} key = {`maprow-${i}`}>{v.map((w,j) => {            
              return  <MapSquare x = {i} y = {j} key = {`mapsquare-${i}-${j}`}/>
            })}</div>
        })}
    </div>
;
}


const mapStateToProps = (
    state,
    ownProps
) => {
    return {
      map: mapRedux.dataSelector(state),   
    };
};

const mapDispatchToProps = dispatch => {
    return {
        keyPress: key => dispatch(keysRedux.actionFn(key))
    };
};
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Map);